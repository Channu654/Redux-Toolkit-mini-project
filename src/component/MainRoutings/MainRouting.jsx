import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Headers from '../Headers/Headers';
import Home from '../Home/Home';
import MovieDetails from '../MovieDetails/MovieDetails';
import PageNotFound from '../PageNoteFound/PageNotFound';

const MainRouting = () => {
  // imdbID

  return (
    <div>
      <Headers />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:imdbID' element={<MovieDetails />} />
        <Route path='/pagenotfound' element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default MainRouting;
