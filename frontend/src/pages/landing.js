import { useNavigate } from 'react-router-dom'

import Box from '@mui/system/Box'
import Button from '@mui/material/Button'

const LandingPage = () => {
    const navigate = useNavigate()

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