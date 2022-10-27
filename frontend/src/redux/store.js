import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import setReducer from './sets'

export default configureStore({
    reducer: {
        user: userReducer,
        studySets: setReducer
    }
})