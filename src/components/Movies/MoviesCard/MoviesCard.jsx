import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ card, onClickUpdateMovie }) {
  const { pathname } = useLocation();

  const typeButton = pathname === '/saved-movies' ? 'movies-card__button_type_delete' : 'movies-card__button_type_favorite';
  const typeSaveButton = card.saved ? 'movies-card__button_type_favorite-enable' : 'movies-card__button_type_favorite-disabled';
  const typeAriaSaveButton = card.saved ? 'Убрать из сохраненных' : 'Сохранить';
  const typeAriaButton = pathname === '/saved-movies' ? 'Удалить' : typeAriaSaveButton;

  const handleSaveMovie = () => {
    onClickUpdateMovie(card);
    console.log(card.saved)
  };

  const durationH = card.duration >= 60 ? `${Math.floor(card.duration / 60)} ч ` : '';
  const durationM = card.duration === 60 ? '' : `${card.duration % 60} м`;
  const duration = `${durationH}${durationM}`.trim();

  return (

    <article className="movies-card">
      <a className="movies-card__link-image link-animation" href={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movies-card__image"
          src={card.thumbnail}
          alt="Описание картинки"
        />
      </a>
      <div className="movies-card__container">
        <div className="movies-card__info">
          <h2 className="movies-card__title">{card.nameRU}</h2>


        </div>
        <button
          className={`movies-card__button ${typeButton} ${typeSaveButton} link-animation`}
          type="button"
          aria-label={typeAriaButton}
          onClick={handleSaveMovie}
        />

      </div>
      <hr className='movies-card__line'></hr>
      <p className="movies-card__duration">{duration}</p>
    </article>
  );
}
///////////////////////
/* <li className="movies-card">
   <div className="movies-card__container">
     <div className="movies-card__info">
       <h2 className="movies-card__title">{card.nameRU}</h2>
       <p className="movies-card__duration">{duration}</p>
     </div>

     <button
       className={`movies-card__button ${typeButton} ${typeSaveButton} link-animation`}
       onClick={handleSaveMovie}
       aria-label={typeAriaButton}
       type="button"
     />
   </div>
   <a className="movies-card__link-image link-animation" href={card.trailerLink} target="_blank" rel="noreferrer">
     <img
       className="movies-card__image"
       alt="Картинка фильма"
       src={card.thumbnail}
     />
   </a>
 </li>
);
}*/

export default MoviesCard;
