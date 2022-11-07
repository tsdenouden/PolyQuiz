import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

import { useDispatch } from 'react-redux'
import { updateUser } from '../redux/user'
import { useNavigate } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import loginImage from '../assets/pexels.jpg'

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useDocumentTitle('Login')

    // save user details to state
    const LogInUser = (token) => {
        const userInfo = jwt_decode(token)
        if (userInfo) {
            dispatch(updateUser(userInfo))
            navigate('/load')   
        } 
    }

    return (
        <Grid 
            container 
            component="main" 
            sx={{ height: '100vh' }}
        >
            <Grid 
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${loginImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper}>
                <Stack
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                    }}
                >
                    <Typography 
                        variant="h2"
                        sx={{ mb: '30px' }}
                    >
                        PolyQuiz
                    </Typography>
                    <GoogleLogin 
                        onSuccess={credentialResponse => {
                            LogInUser(credentialResponse.credential)
                        }}
                        onError={() => {
                            console.log('Login Failed')
                        }}
                        size="large"
                        width="100%"
                    />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default LoginPage