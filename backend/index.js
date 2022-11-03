const express = require('express')
const cors = require('cors')

// initialise express app
const app = express()

app.use(express.json())
app.use(cors())

let db_studysets=[
    {
        id: 1,
        title: 'DebugQuiz',
        author: 'TestMan',
        description: 'Description test',
        terms: [
            {
                id: 1,
                term: 'Cat',
                def: 'Animal'
            },
            {
                id: 2,
                term: 'Phone',
                def: 'Device'
            },
            {
                id: 3,
                term: 'Box',
                def: 'Container'
            },
        ],
    },
]

app.get('/api/studysets', (request, response) => {
    response.json(db_studysets)
})

app.get('/api/studysets/:id', (request, response) => {
    const id = Number(request.params.id)
    const findStudySet = db_studysets.filter(set => set.id === id)
    response.json(findStudySet)
})

app.post('/api/studysets', (request, response) => {
    const body = request.body
    db_studysets = db_studysets.concat(body)
    response.send(body)
})

app.delete('/api/studysets/:id', (request, response) => {
    const id = Number(request.params.id)
    db_studysets = db_studysets.filter(set => set.id !== id)
    response.status(204).end()
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})