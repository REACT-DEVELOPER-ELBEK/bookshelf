import { initialStateType } from "@/types/initialState.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk("books/get", async (searchField) => {
  try {
    if (searchField == undefined) {
      const response = await axios(
        `https://6532d892d80bd20280f61c4c.mockapi.io/books`
      );
      console.log(`https://6532d892d80bd20280f61c4c.mockapi.io/books`);
      return response.data;
    } else {
      const response = await axios(
        `https://6532d892d80bd20280f61c4c.mockapi.io/books?search=${searchField}`
      );
      console.log(`https://6532d892d80bd20280f61c4c.mockapi.io/books?search=${searchField}`);
      return response.data;
    }
  } catch (error) {
    console.log(error);
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, aciton) => {
        console.table(aciton.payload);
      });
  },
});

export default booksData.reducer;
