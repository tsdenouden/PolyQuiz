import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from "@mui/material/Modal"

import styles from '../Study.module.css'

const NotificationModal = ({show, setShow, message}) => {
    return (
        <Modal
            open={show}
            onClose={() => { setShow(false) }}
            className={styles.modal}
            >
            <Box className={styles.blockModal}>
                <Typography variant="h4">
                    {message}  
                </Typography>
            </Box>
        </Modal>
    )
}

export default NotificationModal

