import { useSelector } from "react-redux"

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import styles from './Study.module.css'

const Study = () => {

    const { username } = useSelector(state => state.user)

    const studyTerms = {
        title: '',
        author: username,
        description: '',
        terms: []
    }

    const submitStudySet = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <Box className={styles.studyContainer}>
           <Typography variant="h4" component="h4" sx={{ marginBottom: '20px' }}>
                New Study Set
            </Typography>
            
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
                <Typography variant="h5" component="h5" sx={{ marginBottom: '10px' }}>
                    Terms
                </Typography>
                <Box className={styles.termCard}>
                    <Box className={styles.cardTextField}>
                        <TextField 
                            id="term" 
                            label="Term" 
                            variant="outlined" 
                            required
                            multiline 
                            inputProps={{ maxLength: 50 }}
                        /> 
                    </Box>
                    <Box className={styles.cardTextField}>
                        <TextField 
                            id="def" 
                            label="Definition" 
                            variant="outlined" 
                            required
                            multiline
                            inputProps={{ maxLength: 100 }}
                        /> 
                    </Box>
                </Box>
                <Button type="submit" variant="contained">Save</Button>
            </Stack>
        </Box>
    )
}

export default Study