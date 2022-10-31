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
            const newSet = structuredClone(action.payload)
            newSet.id = state.sets.length+1
            state.sets = state.sets.concat(newSet)
        }
    }
})

export const { addSet, initSet } = setSlice.actions

export default setSlice.reducer