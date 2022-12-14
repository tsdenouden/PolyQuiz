import { Link as RouterLink } from "react-router-dom"

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import styles from '../Study.module.css'

const ViewStudySet = ({studySet}) => {
    return (
        <>
            <Typography variant="h4" sx={{ mb: '12px' }}>
                {studySet.title}
            </Typography>
            <Typography variant="h6">
                    Made by {studySet.author}
            </Typography>

            <Stack>
                {studySet.terms?.map(term => 
                    <Box key={term.id} className={styles.card}>
                        <ViewTerm value={term.term} label="Term" /> 
                        <ViewTerm value={term.def} label="Definition" /> 
                    </Box>
                )}
                <QuizLink StudyID={studySet.id}/>
            </Stack>
        </>
    )
}

const ViewTerm = ({id, value, label}) => {
    return (
        <Box className={styles.input}>
            <TextField
                value={value}
                label={label} 
                variant="outlined" 
                autoComplete="off"
                disabled
                multiline 
                inputProps={{ maxLength: 100 }}
            /> 
        </Box>
    )
}

const QuizLink = ({StudyID}) => {
    return (
        <Button 
            variant="contained"
            component={RouterLink}
            to={`/home/quiz/${StudyID}`}
            sx={{ p: '15px' }}
            >
                Start Quiz
            </Button>
    )
}

export default ViewStudySet