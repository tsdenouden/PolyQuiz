import Typography from '@mui/material/Typography'

const Logo = ({size}) => {
    return (
        <>
            <Typography 
                variant={size}
                display="inline"
            >
                Poly
            </Typography>
            <Typography
                variant={size}
                display="inline"
                color="primary"
            >
                Quiz
            </Typography>
        </>
    )
}

export default Logo