import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { initSet } from '../redux/sets'

import Stack from "@mui/material/Stack"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"

import studyService from '../services/studyservice'

const FetchStudySets = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [error, setError] = useState('')

    useEffect(() => {
        // fetch study sets from API
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
        <Stack 
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh' 
            }}
        >
            <CircularProgress color="inherit" sx={{ mb: '10px' }}/>
            <Typography>
                Fetching latest study sets...
                {error}
            </Typography>
        </Stack>
    )
}

export default FetchStudySets