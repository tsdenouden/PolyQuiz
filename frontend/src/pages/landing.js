import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'

const LandingPage = () => {
    const navigate = useNavigate()

    const LogIn = () => {
        navigate('/login')
    }

    return (
        <div>
            <Button variant="contained" onClick={LogIn}>
                Log In
            </Button>
        </div>
    )
}

export default LandingPage