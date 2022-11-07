import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import { useState, useEffect, useCallback } from "react"
import useDocumentTitle from '../../hooks/useDocumentTitle'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import QuizForm from './components/QuizForm'
import QuizResults from './components/QuizResults'

import styles from './Quiz.module.css'

const Quiz = () => {
    window.scrollTo(0, 0)
    useDocumentTitle('Quiz')

    const { StudyID } = useParams()
    const studySets = useSelector(state => state.studySets.sets)
    
    const [quizSet, setQuizSet] = useState({})
    const [quizCompleted, setQuizCompletion] = useState(false)
    const [questions, setQuestions] = useState([])
    const [results, setResults] = useState([])

    // create a multiple choice question using terms from a study set
    const createQuestion = useCallback((answerIndex, terms) => {
        const createChoices = () => {
            let choices = []
            // add the real answer/definition to the list of choices
            choices.push(terms[answerIndex].def)

            // check how many more choices can be added
            let maxChoices = 2
            if (terms.length <= 2) maxChoices = terms.length-1

            // add wrong answers
            for (let i = 0; i < maxChoices; i++) {
                // select random index
                let random = randomInt(0, terms.length)
                // choose a different index if the term at that index
                // is either the answer or is already listed as a choice
                while (random === answerIndex || choices.includes(terms[random].def)) {
                    random = randomInt(0, terms.length)
                }
                choices.push(terms[random].def)
            }
            
            // put choices in random order
            return shuffleArray(choices)
        }

        const newQuestion = {
            text: terms[answerIndex].term,
            answer: terms[answerIndex].def,
            choices: createChoices()
        }
        return newQuestion
    }, [])

    useEffect(() => {
        // if a StudyID has been passed via route params
        // make quiz use the study set with that StudyID
        if (StudyID) {
            const getStudySet = studySets.filter(set => set.id === StudyID)
            setQuizSet(getStudySet[0])

            // put terms in random order
            const quizTerms = shuffleArray(getStudySet[0].terms)

            // create a question for each term
            let questionBank = []
            for (let i = 0; i < quizTerms.length; i++) {
                questionBank.push(createQuestion(i, quizTerms))
            }
            setQuestions(questionBank)
        }
    }, [StudyID, studySets, createQuestion])

    const submitQuiz = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const formObj = Object.fromEntries(data.entries())
        
        // compare user's input with the real answers
        const userAnswers = Object.values(formObj)
        const realAnswers = questions.map(question => question.answer)
        let score=0

        // keep track of which questions the user got right & wrong
        let correct = []
        let wrong = []

        for (let i = 0; i < userAnswers.length; i++) {
            if (userAnswers[i] === realAnswers[i]) {
                score+=1
                correct.push(questions[i].text)
            } else {
                wrong.push(questions[i].text)
            }
        }

        // final results
        const userResults = {
            grade: Math.trunc((score/realAnswers.length)*100),
            correctAnswers: correct,
            wrongAnswers: wrong
        }
        
        // save user's results & set quiz to complete to render
        // the results page
        setQuizCompletion(true)
        setResults(userResults)
        window.scrollTo(0, 0)
    }

    // durstenfeld shuffle algorithm
    const shuffleArray = (originalArray) => {
        const array = originalArray.slice(0)
        
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array
    }

    // get random integer
    const randomInt = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }

    return (
        <Box className={styles.container}>
            {/* { JSON.stringify(questions) } */}
            <Box className={styles.header}>
                <Typography variant="h4">
                    {quizSet.title}
                </Typography>
                <Typography variant="h6">
                    Made by {quizSet.author}
                </Typography>
            </Box>
            {quizCompleted
                ? <QuizResults userResults={results} />
                : <QuizForm 
                    questions={questions} 
                    submitQuiz={submitQuiz} 
                  />
            }
        </Box>
    )
}

export default Quiz