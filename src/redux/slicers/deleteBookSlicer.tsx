import { initialStateType } from "@/types/initialState.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteBook = createAsyncThunk("books/delete", async(id)=>{
    const response = await axios.delete(`https://6532d892d80bd20280f61c4c.mockapi.io/books/${id}`)
    const result = response.data
    return result
})

const initialState:initialStateType = {
    loading: false,
    data: null,
    error: null,
}

const deleteBookSlicer = createSlice({
    name: "books/delete",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(deleteBook.pending, (state)=>{
            state.loading = true
        }).addCase(deleteBook.fulfilled, (state, action)=>{
            state.data = action.payload
        }).addCase(deleteBook.rejected, (state, action)=>{
            console.log(action.payload)
            
        })
    }
})

export default deleteBookSlicer.reducer