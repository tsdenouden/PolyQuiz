import axios from 'axios'

const baseUrl = '/api/studysets'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getStudySet = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const addStudySet = StudySet => {
    const request = axios.post(baseUrl, StudySet)
    return request.then(response => response.data)
}

const deleteStudySet = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const exported = {
    getAll,
    getStudySet,
    addStudySet,
    deleteStudySet
}

export default exported