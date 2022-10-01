import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Api } from '../../common/Api';

// fetchingAsynch movies Data
export const fetchMoviesAsynch = createAsyncThunk(
  'movies/fetchMoviesAsynch',
  () => {
    const search = 'Harry';
    return axios
      .get(`http://www.omdbapi.com?apikey=${Api}&s=${search}&type=movie`)
      .then((res) => {
        return res.data;
      });
  }
);
// fetchingseries data
export const fetchSeriesAsynch = createAsyncThunk(
  'series/fetchSeriesAsynch',
  () => {
    const search = 'Friends';
    return axios
      .get(`http://www.omdbapi.com?apikey=${Api}&s=${search}&type=series`)
      .then((res) => {
        return res.data;
      });
  }
);

// fetchingSingle Data
export const fetchSingleData = createAsyncThunk(
  'series/fetchSingleData',
  (id) => {
    return axios
      .get(`http://www.omdbapi.com?apikey=${Api}&i=${id}&Plot=full`)
      .then((res) => {
        return res.data;
      });
  }
);
const initialState = {
  movies: {},
  series: {},
  singleDeta: {},
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    Addmovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchMoviesAsynch.pending]: () => {
      console.log('pending');
    },
    [fetchMoviesAsynch.fulfilled]: (state, { payload }) => {
      console.log('fullfiled');
      return {
        ...state,
        movies: payload,
      };
    },
    [fetchMoviesAsynch.rejected]: () => {
      console.log('rejected');
    },

    // series fetching data fullfil actioncretor
    [fetchSeriesAsynch.fulfilled]: (state, { payload }) => {
      console.log('fullfiled', payload);
      return {
        ...state,
        series: payload,
      };
    },

    // fetching Id data
    [fetchSingleData.fulfilled]: (state, payload) => {
      // console.log('fullfiled', id);
      return {
        ...state,
        singleDeta: payload,
      };
    },
  },
});

// exporting action
export const { Addmovies } = movieSlice.actions;

// to get All movies data
export const getAllMovies = (state) => state?.movies?.movies;
export const getAllSeries = (state) => state?.movies?.series;

//reducer
export default movieSlice.reducer;
