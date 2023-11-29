import { initialStateType } from "@/types/initialState.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchBooks = createAsyncThunk("books/get", async () => {
  try{
    const response = await axios(
        "https://6544ff835a0b4b04436d689a.mockapi.io/books"
      );
      return response.data;
  }catch(error){
    console.log(error)
  }
});

const initialState: initialStateType = {
  loading: false,
  data: [],
  error: null,
};

const booksData = createSlice({
    name: "books",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchBooks.pending, (state)=>{
            state.loading = true
        }).addCase(fetchBooks.fulfilled, (state, action)=>{
            state.data = action.payload
        }).addCase(fetchBooks.rejected, (state, aciton)=>{
            console.table(aciton.payload)
        })
    }
})

export default booksData.reducer