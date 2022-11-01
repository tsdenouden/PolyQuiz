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
                title: 'DebugQuiz',
                author: 'TestMan',
                description: 'Description test',
                terms: [
                    {
                        id: 1,
                        term: 'Cat',
                        def: 'Animal'
                    },
                    {
                        id: 2,
                        term: 'Phone',
                        def: 'Device'
                    },
                    {
                        id: 3,
                        term: 'Box',
                        def: 'Container'
                    },
                ],
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