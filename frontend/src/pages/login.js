import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateName, updatePassword } from '../redux/user'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import InputAdornment from '@mui/material/InputAdornment'
import VisibilityIcon from '@mui/icons-material/Visibility'

const LandingPage = () => {
    const navigate = useNavigate()
    const [passwordVisible, setPasswordVisibility] = useState(false)
    const dispatch = useDispatch()

    // login
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateName(e.target.user.value))
        dispatch(updatePassword(e.target.password.value))
        navigate('load')
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
                        test
                    </Typography>
                    <Stack
                        component='form'
                        noValidate
                        onSubmit={handleSubmit}
                        spacing={2} 
                        sx={{
                            textAlign: 'center',
                            marginTop: '30px',
                            width: '80%'
                        }}
                    >
                        <TextField 
                            id="user"
                            label="Username"
                            variant="outlined"
                            autoComplete="off"
                            margin="normal"
                            autoFocus
                            required
                            fullWidth
                        />
                        <TextField 
                            id="password"
                            label="Password"
                            variant="outlined"
                            type={passwordVisible? "text": "password"}
                            autoComplete="current-password"
                            margin="normal"
                            required
                            fullWidth
                            InputProps={{
                                endAdornment: 
                                <InputAdornment position="end">
                                    <VisibilityIcon onClick={() => {setPasswordVisibility(!passwordVisible)}} />
                                </InputAdornment>,
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Box style={{ marginTop: '20px' }}>
                            <Button type="submit" variant="contained" sx={{ marginRight: '1.5em' }}>
                                Sign Up
                            </Button>
                            <Button type="submit" variant="outlined">Log In</Button>
                        </Box>
                    </Stack>
                </Box>
            </Grid>
        </Grid>
    )
}

export default LandingPage