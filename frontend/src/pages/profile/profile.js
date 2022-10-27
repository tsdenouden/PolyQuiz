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
    const dispatch = useDispatch()

    // check if user is editing profile
    const [edit, setEdit] = useState(false)

    // 2 way data binding with text field to get new username
    const [newUsername, setNewUsername] = useState(username)

    const handleNewUsername = (e) => {
        setNewUsername(e.target.value)
    }

    // confirm name change
    const submitNewUsername = () => {
        dispatch(updateName(newUsername))
        setEdit(false)
    }


    // TODO: RENDER USER'S STUDY SETS

    return (
        <Box className={styles.profileContainer}>
            {!edit && 
            <Box>
                <Typography variant="h4" component="h4">
                {username}'s study sets
                </Typography> 
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
                </Box>
            </Box>}

            {edit && 
            <Box className={styles.profileEdit}>
                <TextField 
                id="newUsername"
                label="Set Username"
                value={newUsername}
                onChange={handleNewUsername}
                variant="standard"
                margin="normal"
                autoComplete="off"
                autoFocus
                sx={{ width: '100%' }}
                />
                <Box sx={{ marginTop: '15px;' }}>
                    <Button variant="contained" onClick={submitNewUsername}>
                        Confirm
                    </Button>
                </Box>
            </Box>}
        </Box>
    )
}

export default Profile