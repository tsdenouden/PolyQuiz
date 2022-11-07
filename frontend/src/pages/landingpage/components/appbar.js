import Box from '@mui/system/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

import Logo from '../../../components/logo'

const Appbar = ({onLogin}) => {
    return (
        <AppBar
            position="static"
            sx={{
                position: "fixed",
                top: "0",
                zIndex: "1"
            }}
        >
            <Container>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <Logo size="h5" />
                    </Box>
                    <Button
                    variant="contained"
                    onClick={onLogin}
                    sx={{ 
                        fontWeight: 'bold',
                        fontSize: '15px'
                    }}
                    >
                        Login
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Appbar