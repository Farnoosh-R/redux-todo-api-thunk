import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionAsyncStorage } from "next/dist/server/app-render/action-async-storage-instance";

export const fetchTodo = createAsyncThunk('fetchTodo', async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        return data.json()
})

const initialState = {
    isLoading: false,
    data: [],
    error: false,
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchTodo.rejected, (state, action) => {
            state.error = true
        })
    }
})
export const {} = todoSlice.actions
export default todoSlice.reducer;