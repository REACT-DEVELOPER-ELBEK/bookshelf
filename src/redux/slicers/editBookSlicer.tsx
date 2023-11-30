import { initialStateType } from "@/types/initialState.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const editBook = createAsyncThunk("books/update", async(id)=>{
    const response = await axios.put(`https://6544ff835a0b4b04436d689a.mockapi.io/books/${id}`)
    const result = response.data
    console.log(result)
    return result
})

const initialState:initialStateType = {
    loading: false,
    data: null,
    error: null,
}

const updateBook = createSlice({
    name: "books/delete",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(editBook.pending, (state)=>{
            state.loading = true
        }).addCase(editBook.fulfilled, (state, action)=>{
            state.data = action.payload
        }).addCase(editBook.rejected, (state, action)=>{
            console.log(action.payload)
            
        })
    }
})

export default updateBook.reducer