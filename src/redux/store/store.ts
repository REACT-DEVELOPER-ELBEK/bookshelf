"use client"
import { configureStore } from '@reduxjs/toolkit'
import booksSlicer from '../slicers/getSlicer'
import postBookSlicer from '../slicers/postBookSlicer'

export const store = configureStore({
  reducer: {
    books: booksSlicer,
    postBooks: postBookSlicer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch