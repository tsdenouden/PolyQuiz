import { Route, Routes } from 'react-router-dom'
import { useSelector } from "react-redux"

import Grid from '@mui/material/Grid'
import Navigation from './Navigation'

import Hub from '../hub/hub'
import Study from '../study/study'
import Profile from '../profile/profile'
import Redirect from '../../components/redirect'

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
                    <Route path="/hub" element={authorised? <Hub />: <Redirect />} />
                    <Route path="/study" element={authorised? <Study />: <Redirect />} />
                    <Route path="/profile" element={authorised? <Profile />: <Redirect />} />
                </Routes>
                {authorised && <Navigation />}
            </Grid>
        </Grid>
    )
}

export default Home