import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import SearchIcon from '@mui/icons-material/Search'

import styles from './Hub.module.css'

const Hub = () => {
    const navigate = useNavigate()

    // get study sets & initially hide it
    let setsVisible = false
    const studySets = useSelector(state => state.studySets.sets)

    // before showing the list of study sets,
    // check if it actually has stuff
    // by checking if first entry has a title
    if (studySets[0].title) setsVisible = true

    useEffect(() => {
        // redirect user to login page if study sets is empty
        if (!studySets[0].title) navigate('/') 
    }, [navigate, studySets])

    // query study sets
    const [query, setQuery] = useState('')

    const handleQueryChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <Box className={styles.hubContainer}>
            <Typography variant="h2" component="h2">
                Explore
            </Typography>
            <Typography variant="h6" component="h6" color="primary.main">
                Latest Study Sets
            </Typography>
        
            <Box className={styles.hubSearchContainer}>
                <SearchIcon sx={{ mr:1, my: 1.5 }}/>
                <TextField 
                    id="search"
                    label="Search"
                    value={query}
                    onChange={handleQueryChange}
                    variant="standard"
                    margin="normal"
                    autoComplete="off"
                    autoFocus
                    fullWidth
                />
            </Box>
            <Stack className={styles.hubStack}>
                {setsVisible && studySets.filter(set =>
                    set.title.toLowerCase().includes(query.toLowerCase())).map(set =>
                    <Card key={set.id} className={styles.hubCard}>
                        <CardHeader 
                            title={set.title}
                            subheader={set.author}
                        />
                        <CardContent>
                            <Typography>
                                {set.description}
                            </Typography>
                        </CardContent>
                    </Card>
                )}
            </Stack>
        </Box>
    )
}

export default Hub