import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState } from 'react';

function Movies(loggedIn) {

  const [preloaderState, setPreloaderState] = useState(false);


  return (
    <main>
      <SearchForm />
      {preloaderState && <Preloader />}
      <MoviesCardList />
    </main>
  );
}

export default Movies;
