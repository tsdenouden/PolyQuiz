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
            <Typography variant="h4" sx={{ m: '20px' }}>
                New Study Set
            </Typography>
            <Stack component='form' onSubmit={handleSubmit}>
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
                    <Typography variant="h5" sx={{ m: '5px' }}>
                        Terms
                    </Typography>
                </Stack>
                {terms.map(term => 
                    <EditTerm key={term.id} term={term}/>
                )}
                <AddTerm onAdd={addTerm} />
            </Stack> 
        </>
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
            sx={{ mb: margin }}
        />
    )
}

const EditTerm = ({term}) => {
    return (
        <Box className={styles.card}>
            <Box className={styles.input}>
                <TextField 
                    name={`term${term.id}`}
                    label="Term" 
                    variant="outlined" 
                    autoComplete="off"
                    multiline 
                    required
                    inputProps={{ maxLength: 50 }}
                /> 
            </Box>
            <Box className={styles.input}>
                <TextField 
                    name={`def${term.id}`}
                    label="Definition" 
                    variant="outlined" 
                    autoComplete="off"
                    multiline
                    required
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
                sx={{ p: '20px' }}
            >
                <AddCircleIcon sx={{ mr: '5px' }} />
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