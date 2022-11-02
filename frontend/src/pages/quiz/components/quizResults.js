import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'

import styles from '../Quiz.module.css'

const QuizResults = ({userResults}) => {
    return (
        <>
        <Box className={styles.resultsCard}>
            <Typography variant="h3">
                <CheckCircleIcon 
                    fontSize="large"
                    color="primary"
                    sx={{ marginRight: '10px' }}
                />
                {userResults.grade}%
            </Typography>
        </Box>
        {/* {JSON.stringify(userResults)} */}

        <Typography variant="h4" sx={{ marginTop: '30px' }}>
            Results
        </Typography> 

        <Stack sx={{ width: '30%' }}>
            {userResults.correctAnswers
            && userResults.correctAnswers.map(correct =>
                <Box className={styles.answer}>
                    <CheckCircleIcon />
                    <Typography 
                        variant="h6"
                        sx={{ marginLeft: '7px' }}
                    >
                        {correct}
                    </Typography>
                </Box>
            )}
            
            {userResults.wrongAnswers
            && userResults.wrongAnswers.map(wrong =>
                <Box className={styles.answer}>
                    <CancelIcon color="primary" />
                    <Typography 
                        variant="h6" 
                        sx={{ marginLeft: '7px' }}
                    >
                        {wrong}
                    </Typography>
                </Box>
            )}
        </Stack>
        </>
    )
}

export default QuizResults