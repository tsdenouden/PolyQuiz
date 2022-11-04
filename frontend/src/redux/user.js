import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: false
    },
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload
        },
    }
})

export const { updateUser } = userSlice.actions

export default userSlice.reducer