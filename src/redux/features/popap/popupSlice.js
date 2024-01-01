import {createSlice } from "@reduxjs/toolkit"

const initialState = {
    activ: false
}

export const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        toggleActive: (state) => {
            state.activ = !state.activ
        },
        deleteActive: (state) => {
            state.activ = false
        }
    },
})
export const { toggleActive, deleteActive  } = popupSlice.actions
export default popupSlice.reducer