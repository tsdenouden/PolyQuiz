const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.connect(url)

const studySchema = new mongoose.Schema({
    title: String,
    author: String,
    avatar: String,
    description: String,
    terms: Array
})

studySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = String(returnedObject._id)
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('StudySet', studySchema)