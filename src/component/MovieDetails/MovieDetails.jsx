import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleData } from '../../features/Movies/MoviesSlice';
import './MoviesDetails.css';

const MovieDetails = () => {
  const state = useSelector((state) => state?.movies?.singleDeta);
  console.log('state:', state.payload);

  const { imdbID } = useParams();
  console.log('imdbID:', imdbID);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleData(imdbID));
  }, [dispatch, imdbID]);

  return (
    <div>
      <div className='details'>
        <img src={state?.payload.Poster} alt='' />
        <h1> {state.payload.Title}</h1>
      </div>
      <div></div>
    </div>
  );
};

export default MovieDetails;
