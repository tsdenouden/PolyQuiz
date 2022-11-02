import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'

import styles from '../Quiz.module.css'

const QuizResults = ({userResults}) => {
    const navigate = useNavigate()

    // redirect to hub/explore page
    const viewHub = () => {
        navigate('/home/hub')
    }

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
            && userResults.correctAnswers.map((correct, index) =>
                <Box key={index} className={styles.answer}>
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
            && userResults.wrongAnswers.map((wrong, index) =>
                <Box key={index} className={styles.answer}>
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
        <Button 
            variant="contained"
            sx={{ marginTop: '20px' }}
            onClick={viewHub}
        >
            Explore other study sets
        </Button>
        </>
    )
}

export default QuizResults