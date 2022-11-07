import { useState } from 'react'
import { Link } from 'react-router-dom'

import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ClassIcon from '@mui/icons-material/Class'
import ForumIcon from '@mui/icons-material/Forum'

const Navigation = () => {
    const [value, setValue] = useState(0)
    
    return (
        <BottomNavigation 
            showLabels 
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue)
            }}
            sx={{
                position: "fixed",
                bottom: "0px",
                width: "100%",
                height: "10%",
                padding: "20px"
            }}
        >
            <BottomNavigationAction
                component={Link} 
                to='/home/hub'
                label='Hub' 
                icon={<ForumIcon fontSize="large" />} 
            />
            <BottomNavigationAction 
                component={Link}
                to='/home/study'
                label='Study' 
                icon={<ClassIcon fontSize="large" />} 
            />
            <BottomNavigationAction 
                component={Link}
                to='/home/profile'
                label='Profile' 
                icon={<AccountCircleIcon fontSize="large" />} 
            />
        </BottomNavigation>
    )
}
export default Navigation