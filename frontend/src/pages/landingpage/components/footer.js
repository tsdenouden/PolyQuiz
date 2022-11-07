import Box from '@mui/system/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import styles from '../LandingPage.module.css'

const Footer = () => {
    return (
        <Box className={styles.footer}>
            <Box>
                <Typography 
                    variant="subtitle1"
                    color="primary"
                    display="inline"
                >
                    React.js
                </Typography>
                <Typography 
                    variant="subtitle1"
                    display="inline"
                    sx={{ ml: '5px' }}
                >
                    app made by Tristan Shawn den Ouden
                </Typography>
            </Box>
            <Typography variant="subtitle2">
            For more information, check out the 
                <Link 
                    href="https://github.com/tsdenouden/quizProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ ml: '5px' }}
                >
                    documentation.
                </Link>
            </Typography>
        </Box>
    )
}

export default Footer