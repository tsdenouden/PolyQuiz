import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#1c1819"
        },
        text: {
            primary: '#e8dadc'
        },
        primary: {
            main: '#e8233f'
        },
        secondary: {
            main: '#332f30'
        }
    },
    typography: {
        fontFamily: 'Roboto',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
})