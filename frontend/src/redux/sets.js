import { createSlice } from "@reduxjs/toolkit"

export const setSlice = createSlice({
    name: "studySets",
    initialState: {
        sets: ['Study Sets']
    },
    reducers: {
        initSet: (state, action) => {
            state.sets = action.payload
        },
        addSet: (state, action) => {
            action.payload.id = state.sets.length+1
            state.sets = state.sets.concat(action.payload)
        }
    }
})

export const { addSet, initSet } = setSlice.actions

export default setSlice.reducer