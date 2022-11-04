import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

import { useDispatch } from 'react-redux'
import { updateUser } from '../redux/user'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const LandingPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // save user details to state
    const LogInUser = (token) => {
        const userInfo = jwt_decode(token)
        if (userInfo) {
            dispatch(updateUser(userInfo))
            navigate('/load')
        } 
    }

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid 
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                    }}
                >
                    <Typography 
                        variant="h2" 
                        component="h2"
                    >
                        PolyQuiz
                    </Typography>
                    <Stack
                        spacing={2} 
                        sx={{
                            textAlign: 'center',
                            marginTop: '30px',
                            width: '80%'
                        }}
                    >
                        <Box style={{ marginTop: '20px' }}>
                            <GoogleLogin 
                                onSuccess={credentialResponse => {
                                    LogInUser(credentialResponse.credential)
                                }}
                                onError={() => {
                                    console.log('Login Failed')
                                }}
                            />
                        </Box>
                    </Stack>
                </Box>
            </Grid>
        </Grid>
    )
}

export default LandingPage