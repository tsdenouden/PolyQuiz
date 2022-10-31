import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import AddCircleIcon from '@mui/icons-material/AddCircle'

import styles from '../Study.module.css'

const EditStudySet = ({terms, addTerm, handleSubmit}) => {
    return (
        <>
            <Header 
                size="h4"
                text="New Study Set"
                margin="20px"
            />
            <Stack component='form' noValidate onSubmit={handleSubmit}>
                <Stack>
                    <EditText 
                        name="Title"
                        max={20}
                        margin="10px"
                    />
                    <EditText 
                        name="Description"
                        max={50}
                        margin="50px"
                    />
                    <Header 
                        size="h5"
                        text="Terms"
                        margin="5px"
                    />
                </Stack>
                {terms.map(term => 
                    <EditTerm key={term.id} term={term}/>
                )}
                <AddTerm onAdd={addTerm} />
            </Stack> 
        </>
    )
}

const Header = ({size, text, margin}) => {
    return (
        <Typography variant={size} component={size} sx={{ marginBottom: margin }}>
                {text}
        </Typography>
    )
}

const EditText = ({name, max, margin}) => {
    return (
        <TextField
            name={name.toLowerCase()}
            label={name}
            variant="standard"
            autoComplete="off"
            required
            inputProps={{ maxLength: max }}
            sx={{ marginBottom: margin }}
        />
    )
}

const EditTerm = ({term}) => {
    return (
        <Box className={styles.termCard}>
            <Box className={styles.cardTextField}>
                <TextField 
                    name={`term${term.id}`}
                    label="Term" 
                    variant="outlined" 
                    autoComplete="off"
                    multiline 
                    inputProps={{ maxLength: 50 }}
                /> 
            </Box>
            <Box className={styles.cardTextField}>
                <TextField 
                    name={`def${term.id}`}
                    label="Definition" 
                    variant="outlined" 
                    autoComplete="off"
                    multiline
                    inputProps={{ maxLength: 100 }}
                /> 
            </Box>
        </Box>
    )
}

const AddTerm = ({onAdd}) => {
    return (
        <ButtonGroup orientation="vertical">
            <Button 
                onClick={onAdd} 
                variant="contained" 
                color="secondary" 
                sx={{ padding: '20px' }}
            >
                <AddCircleIcon sx={{ marginRight: '5px' }} />
                Add Term
            </Button>
            <Button 
                type="submit" 
                variant="contained" 
            >
                    Save
            </Button>
        </ButtonGroup>
    )
}

export default EditStudySet