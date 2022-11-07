import { useNavigate } from 'react-router-dom'
import useDocumentTitle from '../../hooks/useDocumentTitle'

import Box from '@mui/system/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

import Appbar from './components/appbar'
import FeaturesOverview from './components/features'
import Footer from './components/footer'
import Logo from '../../components/logo'

import bgImage from '../../assets/pexels-space.jpg'
import styles from './LandingPage.module.css'

const LandingPage = () => {
    const navigate = useNavigate()
    useDocumentTitle()

    const Login = () => {
        navigate('/login')
    }

    return (
        <Box>
            <Appbar onLogin={Login} />
            <Box className={styles.header}>
                <Box
                    component="img"
                    className={styles.headerContentImg}
                    src={bgImage}
                    draggable="false"
                />
                <Box className={styles.headerContent}>
                    <Logo size="h1" />
                    <Typography variant="h4" color="secondary">
                        Quiz Generator App
                    </Typography>
                </Box>
            </Box>
            <Box
                component={Paper}
                sx={{
                    height: '50vh',
                }}
            >
                <FeaturesOverview />
                <Footer />
            </Box>
        </Box>
    )
}


export default LandingPage