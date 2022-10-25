import { Link } from 'react-router-dom'
import { BottomNavigation } from '@mui/material'
import { BottomNavigationAction } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ClassIcon from '@mui/icons-material/Class'
import ForumIcon from '@mui/icons-material/Forum'

import styles from './Home.module.css'

const Navigation = () => {
    return (
        <BottomNavigation 
            showLabels 
            className={styles.BottomNav}
        >
            <BottomNavigationAction
                component={Link} 
                to='/home/hub'
                label='Hub' 
                icon={<ForumIcon />} 
                className={styles.BottomNavLink}
            />
            <BottomNavigationAction 
                component={Link}
                to='/home/study'
                label='Study' 
                icon={<ClassIcon />} 
                className={styles.BottomNavLink}
            />
            <BottomNavigationAction 
                component={Link}
                to='/home/profile'
                label='Profile' 
                icon={<AccountCircleIcon />} 
                className={styles.BottomNavLink}
            />
        </BottomNavigation>
    )
}
export default Navigation