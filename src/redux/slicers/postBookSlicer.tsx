import { initialStateType } from "@/types/initialState.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postBook = createAsyncThunk("books/post", async (bookData) => {
  try {
    const response = await axios.post(
      "https://6532d892d80bd20280f61c4c.mockapi.io/books",bookData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState: initialStateType = {
  loading: false,
  data: null,
  error: "",
};

const bookPost = createSlice({
  name: "books/post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(postBook.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(postBook.rejected, (state, action) => {
        console.table(action.payload);
      });
  },
});

export default bookPost.reducer