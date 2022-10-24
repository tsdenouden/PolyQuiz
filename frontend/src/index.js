import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import CssBaseline from '@mui/material/CssBaseline'

// eslint-disable-next-line no-unused-vars
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </BrowserRouter>
)