import { Route, Routes } from 'react-router-dom'
import { useSelector } from "react-redux"

import Grid from '@mui/material/Grid'
import Navigation from './Navigation'

import Hub from '../hub/hub'
import Study from '../study/study'
import Quiz from '../quiz/quiz'
import Profile from '../profile/profile'

import styles from './Home.module.css'

const Home = () => {
    // check if user is authorised/logged in
    let authorised=true
    const studySets = useSelector(state => state.studySets.sets)
    if (!studySets[0].title) authorised=false

    return (
        <Grid container component="main" className={styles.HomeView}>
            <Grid item xs={12}>
                <Routes>
                    <Route path="/hub" element={<Hub />} />
                    <Route path="/study" element={<Study />}>
                        <Route path="/study/:StudyID" element={<Study />} />
                    </Route>
                    <Route path="/quiz/:StudyID" element={<Quiz />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                {authorised && <Navigation />}
            </Grid>
        </Grid>
    )
}

export default Home