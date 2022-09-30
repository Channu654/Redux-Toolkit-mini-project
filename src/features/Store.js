import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './Movies/MoviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
