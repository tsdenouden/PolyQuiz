import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateName } from '../../redux/user'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import styles from './Profile.module.css'

const Profile = () => {
    const { username } = useSelector(state => state.user)

    // boolean to keep track of whether user is viewing profile in edit mode
    // also used for conditionally rendering components for profile editing
    const [edit, setEdit] = useState(false)

    // user can edit username while editing profile, keep track of changes to username
    const [newUsername, setNewUsername] = useState(username)

    const handleNewUsername = (e) => {
        setNewUsername(e.target.value)
    }

    return (
        <Box className={styles.profileContainer}>
            {!edit && <Typography variant="h4" component="h4">
                {username}'s study sets
            </Typography> }

            {edit && 
            <TextField 
                id="newUsername"
                label="Set Username"
                value={newUsername}
                onChange={handleNewUsername}
                variant="standard"
                margin="normal"
                autoComplete="off"
                autoFocus
                sx={{ width: '40%' }}
            />}

            {!edit &&
            <Box className={styles.profileMenu}>
                <Button 
                    variant="contained" 
                    sx={{ mr: 2 }}
                    onClick={() => {setEdit(!edit)}}
                >
                    Edit profile
                </Button>
                <Button variant="contained">
                    Share study sets
                </Button>
            </Box>}
        </Box>
    )
}

export default Profile