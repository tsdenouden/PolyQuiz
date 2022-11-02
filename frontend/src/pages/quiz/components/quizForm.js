import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import FormControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import styles from '../Quiz.module.css'

const QuizForm = ({questions, submitQuiz}) => {
    return (
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
    )
}

export default QuizForm