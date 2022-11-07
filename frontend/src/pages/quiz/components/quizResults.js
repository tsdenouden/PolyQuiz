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
        <Box className={styles.containerResults}>
            <Typography variant="h3">
                <CheckCircleIcon 
                    fontSize="large"
                    color="primary"
                    sx={{ mr: '10px' }}
                />
                {userResults.grade}%
            </Typography>
        </Box>
        {/* {JSON.stringify(userResults)} */}

        <Typography variant="h4" sx={{ mt: '30px' }}>
            Results
        </Typography> 

        <Stack sx={{ width: '30%' }}>
            {userResults.correctAnswers
            && userResults.correctAnswers.map((correct, index) =>
                <Box key={index} className={styles.containerAnswer}>
                    <CheckCircleIcon />
                    <Typography 
                        variant="h6"
                        sx={{ ml: '7px' }}
                    >
                        {correct}
                    </Typography>
                </Box>
            )}
            
            {userResults.wrongAnswers
            && userResults.wrongAnswers.map((wrong, index) =>
                <Box key={index} className={styles.containerAnswer}>
                    <CancelIcon color="primary" />
                    <Typography 
                        variant="h6" 
                        sx={{ ml: '7px' }}
                    >
                        {wrong}
                    </Typography>
                </Box>
            )}
        </Stack>
        <Button 
            variant="contained"
            sx={{ mt: '20px' }}
            onClick={viewHub}
        >
            Explore other study sets
        </Button>
        </>
    )
}

export default QuizResults