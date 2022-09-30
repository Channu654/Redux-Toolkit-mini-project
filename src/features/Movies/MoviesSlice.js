import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    Addmovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

// exporting action
export const { Addmovies } = movieSlice.actions;

// to get All movies data
export const getAllMovies = (state) => state?.movies?.movies;
//reducer
export default movieSlice.reducer;
