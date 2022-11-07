import Stack from '@mui/material/Stack'
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from '@mui/material/Typography'

import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import QuizIcon from '@mui/icons-material/Quiz'

import styles from '../LandingPage.module.css'

const FeaturesOverview = () => {
    return (
        <Stack 
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 6 }}
            className={styles.stack}
        >
            <Card >
                <CardContent 
                className={styles.card}
                sx={{
                    backgroundColor: '#1c1819'
                }}
                >
                    <PeopleAltIcon 
                        color="primary" 
                        fontSize="large"
                    />
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        Explore
                    </Typography>
                    <Typography>
                        View the latest study sets published by other
                        students.
                    </Typography>
                </CardContent>
            </Card>
            <Card >
                <CardContent 
                className={styles.card}
                sx={{
                    backgroundColor: '#1c1819'
                }}
                >
                    <CreateNewFolderIcon 
                        color="primary" 
                        fontSize="large"
                    />
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        Study
                    </Typography>
                    <Typography>
                        Write down the terms you've learnt in class
                        in the study set editor.
                    </Typography>
                </CardContent>
            </Card>
            <Card >
                <CardContent 
                className={styles.card}
                sx={{
                    backgroundColor: '#1c1819'
                }}
                >
                    <QuizIcon 
                        color="primary" 
                        fontSize="large"
                    />
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        Quiz
                    </Typography>
                    <Typography>
                        Generate random quizzes from any study set.
                    </Typography>
                </CardContent>
            </Card>
        </Stack>
    )
}

export default FeaturesOverview