import { Route, Routes } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Navigation from './Navigation'

import Hub from '../hub/hub'
import Study from '../study/study'
import Profile from '../profile/profile'

import styles from './Home.module.css'

const Home = () => {
    const db_users=[
        {
            id: 1,
            user: 'TestUser',
            img: '',
            studysets: [1]
        }
    ]
    
    const db_studysets=[
        {
            id: 1,
            title: 'Science',
            author: 'PhysicsMan',
            description: 'Cool study set about science.',
            terms: ['Dynamics', 'Ohms Law', 'Velocity'],
        },
        {
            id: 2,
            title: 'Geography',
            author: 'GeoMan',
            description: 'Cool study set about geography.',
            terms: ['USA', 'Continent', 'Equator'],
        },
        {
            id: 3,
            title: 'Computer Science',
            author: 'CompSciMan',
            description: 'Cool study set about computer science.',
            terms: ['Mouse', 'Browser', 'Compiler'],
        },
    ]

    return (
        <Grid container component="main" className={styles.HomeView}>
            <Grid item xs={12}>
                <Routes>
                    <Route path="/hub" element={<Hub studySets={db_studysets} />} />
                    <Route path="/study" element={<Study />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <Navigation />
            </Grid>
        </Grid>
    )
}

export default Home