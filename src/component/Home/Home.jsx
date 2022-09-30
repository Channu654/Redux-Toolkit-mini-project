import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Api } from '../../common/Api';
import { BaseUrl } from '../../common/BaseUrl';
import { Addmovies, getAllMovies } from '../../features/Movies/MoviesSlice';
import Footer from '../footer/Footer';
import MovieDetails from '../MovieDetails/MovieDetails';
import PageNotFound from '../PageNoteFound/PageNotFound';
import './Home.css';

const Home = () => {
  const state = useSelector(getAllMovies);
  console.log('selector:', state);

  const dispatch = useDispatch();

  const fetchMoviesData = () => {
    const search = 'Harry';
    return axios
      .get(`http://www.omdbapi.com?apikey=${Api}&s=${search}&type=movie`)
      .then((res) => dispatch(Addmovies(res.data)))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);
  // Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
  // Title
  // :
  // "Harry Potter and the Deathly Hallows: Part 2"
  // Type
  // :
  // "movie"
  // Year
  // :
  // "2011"
  // imdbID
  // :
  // "tt1201607"

  return (
    <div className='movies'>
      Home
      {state?.Search?.map((item) => {
        return (
          <div>
            <img src={item.Poster} alt='' />
            <h4>{item.Title}</h4>
            <h4>{item.Year}</h4>
            <MovieDetails data={item} />
          </div>
        );
      })}
      <PageNotFound />
      <Footer />
    </div>
  );
};

export default Home;
