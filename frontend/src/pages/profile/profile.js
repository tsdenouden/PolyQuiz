import { useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'

import StudySets from '../../components/studySets/studySets'

import styles from './Profile.module.css'

const Profile = () => {
    const { user } = useSelector(state => state.user)

    return (
        <Box className={styles.profileContainer}>
            <Box className={styles.profileView}>
                <Avatar 
                    alt={user.name} 
                    src={user.picture} 
                    sx={{ 
                        width: '80px',
                        height: '80px',
                        marginBottom: '20px' 
                    }}
                />
                <Typography variant="h4">
                    {user.name}'s study sets
                </Typography> 
                {/* <Box className={styles.profileActions}>
                    <Button variant="contained">
                        Share study sets
                    </Button>
                </Box> */}
                <StudySets setProp='author' mustInclude={user.name} />
            </Box>
        </Box>
    )
}

export default Profile