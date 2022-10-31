import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addSet } from "../../redux/sets"

import ViewStudySet from './components/ViewStudySet'
import EditStudySet from './components/EditStudySet'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from "@mui/material/Modal"

import styles from './Study.module.css'

const Study = () => {
    const dispatch = useDispatch()
    
    // study sets & username
    const studySets = useSelector(state => state.studySets.sets)
    const { username } = useSelector(state => state.user)

    const [modalShow, setModalShow] = useState(false)
    const [modalMsg, setModalMsg] = useState('')

    // toggle modal visibility & set message
    const toggleModal = (visible, message) => {
        setModalMsg(message)
        setModalShow(visible)
    }

    // if StudyID exists in the route params, just view the study set with that ID
    // /home/study/:StudyID
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

    // add term to new study set
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

    // submit new study set
    const submitStudySet = (e) => {
        e.preventDefault()

        const data = new FormData(e.target)
        const formObj = Object.fromEntries(data.entries())

        // create copy of formObj with title & description properties removed
        const { title, description, ...formTerms } = formObj

        // get all the terms & definitions
        const termDef = Object.values(formTerms)

        // put each term & definition pair together
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

        // update terms state
        setTerms(termObjs)

        // create the study set
        const newStudySet = {
            title: formObj.title,
            author: username,
            description: formObj.description,
            terms: termObjs
        }

        // save it
        dispatch(addSet(newStudySet))

        toggleModal(true, '🎉 Success! Your study set has been published. 🎉')
    }

    return (
        <Box className={styles.studyContainer}>           
            <Modal
                open={modalShow}
                onClose={() => { setModalShow(false) }}
                className={styles.Modal}
            >
                <Box className={styles.ModalBox}>
                    <Typography variant="h4" component="h4">
                        {modalMsg}  
                    </Typography>
                </Box>
            </Modal>

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