import { useNavigate } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

import Box from '@mui/system/Box'
import Button from '@mui/material/Button'

const LandingPage = () => {
    const navigate = useNavigate()
    useDocumentTitle()

    const LogIn = () => {
        navigate('/login')
    }

    return (
        <Box>
            <Button
                onClick={LogIn}
            >
                Log In
            </Button>
        </Box>
    )
}

export default LandingPage