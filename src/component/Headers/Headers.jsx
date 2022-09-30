import React from 'react';
import './Headers.css';
import { Link } from 'react-router-dom';

const Headers = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png'
            alt=''
          />
        </div>
      </Link>

      <div className='profile'>
        <img src='https://www.w3schools.com/w3images/avatar2.png' alt='' />
      </div>
    </div>
  );
};

export default Headers;
