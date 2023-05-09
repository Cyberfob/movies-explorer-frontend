import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <main>
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}

export default SavedMovies;
