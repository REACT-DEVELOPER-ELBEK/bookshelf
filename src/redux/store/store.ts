"use client"
import { configureStore } from '@reduxjs/toolkit'
import booksSlicer from '../slicers/getSlicer'

export const store = configureStore({
  reducer: {
    books: booksSlicer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch