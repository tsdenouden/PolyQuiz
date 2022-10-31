import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addSet } from "../../redux/sets"

import Box from '@mui/material/Box'

import ViewStudySet from './components/ViewStudySet'
import EditStudySet from './components/EditStudySet'
import NotificationModal from './components/NotificationModal'

import styles from './Study.module.css'

const Study = () => {
    const dispatch = useDispatch()
    const [modalShow, setModalShow] = useState(false)
    const [modalMsg, setModalMsg] = useState('')

    const studySets = useSelector(state => state.studySets.sets)
    const { username } = useSelector(state => state.user)

    // if StudyID exists in the route params, just view the study set with that ID
    const { StudyID } = useParams()
    const [currentSet, setCurrentSet] = useState({})

    useEffect(() => {
        if (StudyID) {
            const getStudySet = studySets.filter(set => set.id === Number(StudyID))
            setCurrentSet(getStudySet[0])
        }
    }, [StudyID, studySets])

    // if StudyID doesn't exist, create a new study set
    // terms for new study set
    const [terms, setTerms] = useState([
        {
            id: 1,
            term: '',
            def: '',
        }
    ])

    const addTerm = () => {
        if (terms.length <= 9) {
            const newTerm = {
                id: terms.length+1,
                term: '',
                def: '',
            }
           setTerms(terms.concat(newTerm))
        } else {
            toggleModal(true, 'Maximum terms (10) reached.')
        }
    }

    const submitStudySet = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const formObj = Object.fromEntries(data.entries())

        // get terms & definitions
        const { title, description, ...formTerms } = formObj
        const termDef = Object.values(formTerms)
        let termObjs = []
        let id_count = 1 

        for (let i = 0; i < termDef.length; i+=2) {
            let newTerm = {
                id: id_count,
                term: termDef[i],
                def: termDef[i+1]
            }
            termObjs.push(newTerm)
            id_count++
        }
        setTerms(termObjs)

        const newStudySet = {
            title: title,
            author: username,
            description: description,
            terms: termObjs
        }
        dispatch(addSet(newStudySet))
        toggleModal(true, '🎉 Success! Your study set has been published. 🎉')
    }

    // toggle modal visibility & set message
    const toggleModal = (visible, message) => {
        setModalMsg(message)
        setModalShow(visible)
    }

    return (
        <Box className={styles.studyContainer}>
            <NotificationModal 
                show={modalShow}
                setShow={setModalShow}
                message={modalMsg}
            />
            {StudyID? 
                <ViewStudySet studySet={currentSet}/> : 
                <EditStudySet 
                    terms={terms} 
                    addTerm={addTerm} 
                    handleSubmit={submitStudySet}
                />
            }
        </Box>
    )
}

export default Study