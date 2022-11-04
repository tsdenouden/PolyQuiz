import { Link as RouterLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deleteSet } from '../../redux/sets'

import Stack from '@mui/material/Stack'
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'
import Avatar from "@mui/material/Avatar"

import studyService from '../../services/studyservice'

import styles from './studySets.module.css'

const StudySets = ({setProp, mustInclude}) => {
    const { user } = useSelector(state => state.user)
    const studySets = useSelector(state => state.studySets.sets)
    const dispatch = useDispatch()

    let studySetFilter = studySets.filter(set => set)
    switch (setProp) {
        case 'author':
            studySetFilter = studySets.filter(set => set.author === mustInclude)
            break
        case 'title':
            studySetFilter = studySets.filter(set => 
                set.title.toLowerCase().includes(mustInclude.toLowerCase()))
            break
        default:   
            break
    }

    // delete a study set by id
    const deleteById = (id) => {
        // send delete request to api
        studyService
            .deleteStudySet(id)
            .then(result => {
                // delete from state
                dispatch(deleteSet(id))
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Stack className={styles.studyStack}>
                {studySetFilter.map(set =>
                    <Card key={set.id} className={styles.studyCard}>
                        <CardHeader 
                            title={set.title}
                            subheader={set.author}
                        />
                        <CardContent>
                            <Avatar 
                                alt={set.author}
                                src={set.avatar}
                                sx={{ marginBottom: '5px' }}
                            />
                            <Typography>
                                {set.description}
                            </Typography>
                            <Stack direction="row">
                                <Button 
                                    variant="contained"
                                    component={RouterLink}
                                    to={`/home/study/${set.id}`}
                                    sx={{ 
                                        marginTop: '15px',
                                        marginRight: '10px'
                                    }}
                                >
                                    View Study Set
                                </Button>
                                {set.author===user.name &&
                                <Button
                                    onClick={() => {deleteById(set.id)}}
                                    variant="contained"
                                    sx={{ marginTop: '15px' }}
                                >
                                    Delete
                                </Button>}
                            </Stack>
                        </CardContent>
                    </Card>
                )}
        </Stack>
    )
}

export default StudySets