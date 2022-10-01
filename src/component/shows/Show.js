import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Shows.css';

import {
  fetchSeriesAsynch,
  getAllSeries,
} from '../../features/Movies/MoviesSlice';

// import MovieDetails from '../MovieDetails/MovieDetails';

const Show = () => {
  const series = useSelector(getAllSeries);
  console.log('series:', series);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSeriesAsynch());
  }, [dispatch]);

  return (
    <div className='series'>
      Home
      {series?.Search?.map((item) => {
        return (
          <div>
            <img src={item.Poster} alt='' />
            <h4>{item.Title}</h4>
            <h4>{item.Year}</h4>
            {/* <MovieDetails data={item} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Show;
