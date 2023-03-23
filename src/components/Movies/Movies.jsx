import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(loggedIn) {

  return (
    <main>
      <SearchForm />
      <Preloader />
      <MoviesCardList />
    </main>
  );
}

export default Movies;
