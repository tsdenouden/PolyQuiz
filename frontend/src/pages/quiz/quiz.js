import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import { useState, useEffect, useCallback } from "react"

const Quiz = () => {
    const { StudyID } = useParams()
    const studySets = useSelector(state => state.studySets.sets)
    const [quizSet, setQuizSet] = useState({})
    const [questions, setQuestions] = useState([])

    const createQuestion = useCallback((terms) => {
        const randomId = randomInt(0, terms.length)

        const createChoices = () => {
            // list of choices for multiple choice question
            let choices = []

            // add the real answer/definition to the list of choices
            choices.push(terms[randomId].def)

            // add random definitions to list of choices
            let maxChoices = 2

            if (terms.length <= 2) {
                maxChoices = terms.length-1
            }

            for (let i = 0; i < maxChoices; i++) {
                let random = randomInt(0, terms.length)

                while (random === randomId) {
                    random = randomInt(0, terms.length)
                }

                choices.push(terms[random].def)
            }
            
            return choices
        }

        const newQuestion = {
            text: terms[randomId].term,
            answer: terms[randomId].def,
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

            // create 3 questions
            let questions = []

            for (let i = 0; i < getStudySet[0].terms.length; i++) {
                questions.push(createQuestion(getStudySet[0].terms))
            }

            setQuestions(questions)
        }

    }, [StudyID, studySets, createQuestion])

    const randomInt = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }

    return (
        <div>
            { JSON.stringify(questions) }
        </div>
    )
}

export default Quiz