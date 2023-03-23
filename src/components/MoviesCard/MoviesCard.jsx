import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import thumbnail from '../../images/cardimg.png';

function MoviesCard() {
  const { pathname } = useLocation();

  const typeButton = pathname === '/saved-movies' ? 'movies-card__button_type_delete' : 'movies-card__button_type_favorite';

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const favoriteEnabled = isFavorite ? 'movies-card__button_type_favorite-enabled' : 'movies-card__button_type_favorite-disabled';

  return (
    <article className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__info">
          <h2 className="movies-card__title">33 слова о дизайне </h2>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        <button
          className={`movies-card__button ${typeButton} ${favoriteEnabled} link-animation`}
          type="button"
          aria-label="Сохранить"
          onClick={toggleFavorite}
        />
      </div>
      <a className="movies-card__link-image link-animation">
        <img
          className="movies-card__image"
          src={thumbnail}
          alt="Описание картинки"
        />
      </a>
    </article>
  );
}

export default MoviesCard;
