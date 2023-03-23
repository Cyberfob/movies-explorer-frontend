import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <div className="section movies-cards">
      <ul className="movies-cards__list">
        <li className="movies-cards__item">
          <MoviesCard />
        </li>
        <li className="movies-cards__item">
          <MoviesCard />
        </li>
        <li className="movies-cards__item">
          <MoviesCard />
        </li>
        <li className="movies-cards__item">
          <MoviesCard />
        </li>
        <li className="movies-cards__item">
          <MoviesCard />
        </li>
        <li className="movies-cards__item">
          <MoviesCard />
        </li>
      </ul>

      <div className="movies-cards__button-more-wrapper">
        <button
          className="movies-cards__button-more link-animation"
          type="button"
          aria-label="Подгрузить еще больше карточек"
        >
          Ещё
        </button>
      </div>

    </div>
  );
}

export default MoviesCardList;
