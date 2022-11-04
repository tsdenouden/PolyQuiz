import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Stack from '@mui/system/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'

import styles from '../Home.module.css'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#e8233f',
      color: '#d42039',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '100%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
}));

const Appbar = () => {
    const { user } = useSelector(state => state.user)

    const navigate = useNavigate()

    const LogOutUser = () => {
        window.location.reload()
    }

    return (
        <AppBar position="static" className={styles.Appbar}>
            <Container maxWidth="x1">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h4 ">
                            PolyQuiz
                        </Typography>
                    </Box>
                    <Stack direction="row" spacing={2}>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ 
                                vertical: 'bottom', 
                                horizontal: 'right' 
                            }}
                            variant="dot"
                        >
                            <Avatar 
                                alt={user.name} 
                                src={user.picture} 
                                sx={{ 
                                    width: '40px',
                                    height: '40px',
                                }}
                            />
                        </StyledBadge>
                        <Button 
                            variant="contained"
                            onClick={LogOutUser}
                        >
                            Log out
                        </Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Appbar