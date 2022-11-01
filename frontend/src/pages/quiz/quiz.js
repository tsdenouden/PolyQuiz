import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import { useState, useEffect, useCallback } from "react"

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import FormControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import styles from './Quiz.module.css'

const Quiz = () => {
    const { StudyID } = useParams()
    const studySets = useSelector(state => state.studySets.sets)
    const [quizSet, setQuizSet] = useState({})
    const [questions, setQuestions] = useState([])

    const createQuestion = useCallback(( answerIndex, terms) => {
        const createChoices = () => {
            let choices = []
            // add the real answer/definition to the list of choices
            choices.push(terms[answerIndex].def)

            // add wrong answers
            let maxChoices = 2
            if (terms.length <= 2) maxChoices = terms.length-1

            for (let i = 0; i < maxChoices; i++) {
                let random = randomInt(0, terms.length)
                while (random === answerIndex || choices.includes(terms[random].def)) {
                    random = randomInt(0, terms.length)
                }
                choices.push(terms[random].def)
            }
            
            return choices
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
            const getStudySet = studySets.filter(set => set.id === Number(StudyID))
            setQuizSet(getStudySet[0])
            const quizTerms = getStudySet[0].terms

            // create a question for each term
            let questionBank = []

            for (let i = 0; i < getStudySet[0].terms.length; i++) {
                questionBank.push(createQuestion(i, quizTerms))
            }
            setQuestions(questionBank)
        }
    }, [StudyID, studySets, createQuestion])

    const submitQuiz = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const formObj = Object.fromEntries(data.entries())
        
        const userAnswers = Object.values(formObj)
        const realAnswers = questions.map(question => question.answer)
        let score=0

        for (let i = 0; i < userAnswers.length; i++) {
            if (userAnswers[i] === realAnswers[i]) score+=1
        }
        
        const grade = (score/realAnswers.length)*100
        console.log(grade)
    }

    const randomInt = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }

    return (
        <Box className={styles.quizWrapper}>
            {/* { JSON.stringify(questions) } */}
            <Box className={styles.quizTitle}>
                <Typography variant="h4">
                    {quizSet.title}
                </Typography>
                <Typography variant="h6">
                    Made by {quizSet.author}
                </Typography>
            </Box>
            <Stack component="form" onSubmit={submitQuiz} className={styles.quizForm}>
                <FormControl className={styles.formControl} fullWidth>
                {questions.map((question, index) =>
                    <Box key={index} className={styles.questionCard}>
                        <Typography variant="h5">
                            {question.text}
                        </Typography>
                        <RadioGroup 
                            name={`radioButtons${question.text}`}
                            className={styles.questionRadio}
                        >
                            {question.choices.map((choice, index) =>
                                <FormControlLabel
                                    key={index}
                                    value={choice}
                                    label={choice}
                                    control={<Radio />}
                                />
                            )}
                        </RadioGroup>
                    </Box>
                )}
                </FormControl>
                <Button 
                    type="submit" 
                    variant="contained"
                    className={styles.submitButton}
                >
                    Submit
                </Button>
            </Stack>
        </Box>
    )
}

export default Quiz