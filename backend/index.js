require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const StudySet = require('./models/studysets')

const app = express()
app.use(express.static('build'))
app.use(express.json())
app.use(cors())

app.get('/api/studysets', (request, response) => {
    StudySet.find({})
        .then(sets => {
            response.json(sets)
        })
        .catch(err => console.log(err))
})

app.get('/api/studysets/:id', (request, response) => {
    StudySet.findById(request.params.id)
        .then(returnedSet => {
            response.json(returnedSet)
        })
        .catch(err => console.log(err))
})

app.post('/api/studysets', (request, response) => {
    const body = request.body

    const set = new StudySet({
        title: body.title,
        author: body.author,
        avatar: body.avatar,
        description: body.description,
        terms: body.terms
    })

    set.save()
        .then(savedSet => {
            response.json(savedSet)
        })
        .catch(err => console.log(err))
})

app.delete('/api/studysets/:id', (request, response) => {
    StudySet.findByIdAndDelete(request.params.id)
        .then(result => {
            console.log(result)
            response.status(204).end()
        })
        .catch(err => console.log(err))
})

const unknownEndpoint = (request, response) => {
    response.redirect('/')
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})