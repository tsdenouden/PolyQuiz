const express = require('express')

// initialise express app
const app = express()

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

app.get('/', (request, response) => {
    response.json(db_studysets)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})