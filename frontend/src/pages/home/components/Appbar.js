import { useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Stack from '@mui/system/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import StyledBadge from './StyledBadge'

const Appbar = () => {
    const { user } = useSelector(state => state.user)

    const LogOutUser = () => {
        window.location.reload()
    }

    return (
        <AppBar 
            position="static" 
            sx={{
                position: "fixed",
                top: "0",
                zIndex: "1"
            }}
        >
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