import { Link as RouterLink } from "react-router-dom"
import { useSelector } from "react-redux"

import Stack from '@mui/material/Stack'
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'

import styles from './studySets.module.css'

const StudySets = ({setProp, mustInclude}) => {
    const studySets = useSelector(state => state.studySets.sets)
    let studySetFilter = studySets.filter(set => set)

    switch (setProp) {
        case 'author':
            studySetFilter = studySets.filter(set => set.author.toLowerCase().includes(mustInclude.toLowerCase()))
            break
        case 'title':
            studySetFilter = studySets.filter(set => set.title.toLowerCase().includes(mustInclude.toLowerCase()))
            break
        default:   
            break
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
                            <Typography>
                                {set.description}
                            </Typography>
                            <Button 
                                variant="contained"
                                component={RouterLink}
                                to={`/home/study/${set.id}`}
                                sx={{ marginTop: '15px' }}
                            >
                                View Study Set
                            </Button>
                        </CardContent>
                    </Card>
                )}
        </Stack>
    )
}

export default StudySets