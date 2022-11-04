import { useState } from "react"

import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import SearchIcon from '@mui/icons-material/Search'

import StudySets from '../../components/studySets/studySets'

import styles from './Hub.module.css'


const Hub = () => {
    window.scrollTo(0, 0)
    
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
        
            <Box className={styles.hubSearch}>
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
            <StudySets setProp='title' mustInclude={query} />
        </Box>
    )
}

export default Hub