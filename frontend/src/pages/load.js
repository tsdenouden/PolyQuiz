import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { initSet } from '../redux/sets'

import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"

const LoadingScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // update study sets state & navigate user to hub page
    setTimeout(() => {
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
        dispatch(initSet(db_studysets))
        navigate('/home/hub')
    }, 500)

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center',
                height: '100vh' 
            }}
        >
            <CircularProgress color="inherit" sx={{ marginBottom: '10px' }}/>
            <Typography>
                Fetching latest study sets...
            </Typography>
        </Box>
    )
}

export default LoadingScreen