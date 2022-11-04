import { Route, Routes } from 'react-router-dom'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Navigation from './components/Navigation'
import Appbar from './components/Appbar'
import Hub from '../hub/hub'
import Study from '../study/study'
import Quiz from '../quiz/quiz'
import Profile from '../profile/profile'

const Home = () => {
    return (
        <Box>
            <Appbar />
            <Grid 
                container 
                component="main" 
                sx={{
                    height: '100vh',
                    marginTop: '60px'
                }}
            >
                <Grid item xs={12}>
                    <Routes>
                        <Route path="/hub" element={<Hub />} />
                        <Route path="/study" element={<Study />}>
                            <Route path="/study/:StudyID" element={<Study />} />
                        </Route>
                        <Route path="/quiz/:StudyID" element={<Quiz />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                    <Navigation />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home