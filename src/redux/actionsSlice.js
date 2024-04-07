import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    likes: JSON.parse(localStorage.getItem('likes')) || [],
    selects: JSON.parse(localStorage.getItem('selects')) || []
}

const actionsSlice = createSlice({
    name: 'actions',
    initialState,
    reducers: {
        addLike: (state, action) => {
            state.likes.push(action.payload)
            localStorage.setItem('likes', JSON.stringify(state.likes))
        },
        removeLike: (state, action) => {
            state.likes = state.likes.filter((item) => item.id !== action.payload)
            localStorage.setItem('likes', JSON.stringify(state.likes.filter((item) => item.id !== action.payload.id)))
        },
        addSelect: (state, action) => {
            state.selects.push(action.payload)
            localStorage.setItem('selects', JSON.stringify(state.selects))
        },
        removeSelect: (state, action) => {
            state.selects = state.selects.filter((item) => item.id !== action.payload)
            localStorage.setItem('selects', JSON.stringify(state.selects.filter((item) => item.id !== action.payload.id)))
        }
    }
})

export const { addLike, removeLike, addSelect, removeSelect } = actionsSlice.actions
const actionsReducer = actionsSlice.reducer

export default actionsReducer