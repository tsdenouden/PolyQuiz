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
            state.sets = state.sets.concat(action.payload)
        },
        deleteSet: (state, action) => {
            state.sets = state.sets.filter(set => set.id !== action.payload)
        }
    }
})

export const { addSet, initSet, deleteSet } = setSlice.actions

export default setSlice.reducer