import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { initSet } from '../redux/sets'

import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"

import studyService from '../services/studyservice'

const FetchStudySets = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [error, setError] = useState('')

    useEffect(() => {
        studyService
        .getAll()
        .then(studySets => {
            dispatch(initSet(studySets))
            navigate('/home/hub')
        })
        .catch(err => {
            console.log("Can't fetch study sets from API: ", err)
            setError(err)
        })
    }, [dispatch , navigate])

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
                {error}
            </Typography>
        </Box>
    )
}

export default FetchStudySets