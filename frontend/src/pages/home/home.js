import Grid from '@mui/material/Grid'
import Navigation from './Navigation'
import { Route, Routes } from 'react-router-dom'

import Hub from '../hub/hub'
import Study from '../study/study'
import Profile from '../profile/profile'

import styles from './Home.module.css'

const Home = () => {
    return (
        <Grid container component="main" className={styles.HomeView}>
            <Grid item xs={12}>
                <Routes>
                    <Route path="/hub" element={<Hub />} />
                    <Route path="/study" element={<Study />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <Navigation />
            </Grid>
        </Grid>
    )
}

export default Home