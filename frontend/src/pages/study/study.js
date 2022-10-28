import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addSet } from "../../redux/sets"

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Modal from "@mui/material/Modal"

import styles from './Study.module.css'

const Study = () => {
    const dispatch = useDispatch()

    const { username } = useSelector(state => state.user)

    const [modalShow, setModalShow] = useState(false)
    const [modalMsg, setModalMsg] = useState('')

    const toggleModal = (visible, message) => {
        setModalMsg(message)
        setModalShow(visible)
    }

    const [terms, setTerms] = useState([
        {
            id: 1,
            term: '',
            def: '',
        }
    ])

    // add term to study set
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

        // get all the terms & definitions from the study set
        let termDef = []

        for (let i = 0; i < e.target.length; i++) {
            if ((e.target[i].id).includes('term') || (e.target[i].id).includes('def')) {
                termDef.push(e.target[i].value)
            }
        }

        // put terms & definitions together as objects in array
        let termObjs = []

        for (let i = 0; i < termDef.length; i+=2) {
            let newTerm = {
                id: i,
                term: termDef[i],
                def: termDef[i+1]
            }

            termObjs.push(newTerm)
        }

        // update terms state
        setTerms(termObjs)

        // create the study set
        const newStudySet = {
            title: e.target.title.value,
            author: username,
            description: e.target.description.value,
            terms: termObjs
        }

        // save it
        dispatch(addSet(newStudySet))

        toggleModal(true, '🎉 Success! Your study set has been published. 🎉')
    }

    return (
        <Box className={styles.studyContainer}>
           <Typography variant="h4" component="h4" sx={{ marginBottom: '20px' }}>
                New Study Set
            </Typography>
            
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

            <Stack component='form' noValidate onSubmit={submitStudySet}>
                <TextField
                    id="title"
                    label="Title"
                    variant="standard"
                    required
                    inputProps={{ maxLength: 20 }}
                    sx={{ marginBottom: '10px' }}
                />
                <TextField
                    id="description"
                    label="Description"
                    variant="standard"
                    inputProps={{ maxLength: 50 }}
                    sx={{ marginBottom: '50px' }}
                />
                <Typography variant="h5" component="h5">
                    Terms
                </Typography>
                
                {terms.map(term => 
                    <Box key={term.id} className={styles.termCard}>
                        <Box className={styles.cardTextField}>
                            <TextField 
                                    id={`term${term.id}`}
                                    label="Term" 
                                    variant="outlined" 
                                    multiline 
                                    inputProps={{ maxLength: 50 }}
                            /> 
                        </Box>
                        <Box className={styles.cardTextField}>
                            <TextField 
                                id={`def${term.id}`}
                                label="Definition" 
                                variant="outlined" 
                                multiline
                                inputProps={{ maxLength: 100 }}
                            /> 
                        </Box>
                    </Box>
                )}
                <ButtonGroup orientation="vertical">
                    <Button 
                        onClick={addTerm} 
                        variant="contained" 
                        color="secondary" 
                        sx={{ padding: '20px' }}
                    >
                        <AddCircleIcon sx={{ marginRight: '5px' }} />
                        Add Term
                    </Button>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        sx={{ marginBottom: '200px' }}
                    >
                        Save
                    </Button>
                </ButtonGroup>
            </Stack>
        </Box>
    )
}

export default Study