import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: '',
        password: ''
    },
    reducers: {
        updateName: (state, action) => {
            state.username = action.payload
        },
        updatePassword: (state, action) => {
            state.password = action.payload
        }
    }
})

export const { updateName, updatePassword } = userSlice.actions

export default userSlice.reducer