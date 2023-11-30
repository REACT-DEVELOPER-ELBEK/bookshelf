"use client"
import { configureStore } from '@reduxjs/toolkit'
import booksSlicer from '../slicers/getSlicer'
import postBookSlicer from '../slicers/postBookSlicer'
import deleteBookSlicer from '../slicers/deleteBookSlicer'
import editBookSlicer from '../slicers/editBookSlicer'

export const store = configureStore({
  reducer: {
    books: booksSlicer,
    postBooks: postBookSlicer,
    deleteBook: deleteBookSlicer,
    updateBook: editBookSlicer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch