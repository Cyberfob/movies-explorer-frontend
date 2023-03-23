/* eslint-disable jsx-a11y/label-has-associated-control */
import './SearchForm.css';

function SearchForm() {
  return (
    <div className="section search-form">
      <form className="search-form__container">
        <fieldset className="search-form__field search-form__field-input">
          <div className="search-form__icon" />
          <label className="search-form__input-wrapper" htmlFor="film">
            <input
              className="search-form__input"
              type="text"
              placeholder="Фильм"
              id="film"
              name="film"
              required
            />
          </label>
          <button
            className="search-form__submit link-animation"
            type="submit"
            aria-label="Найти фильм"
          />
        </fieldset>
        <fieldset className="search-form__field search-form__field-short-films">
          <div className="search-form__line" />
          <label className="search-form__checkbox-label" htmlFor="short-films">
            <input
              className="search-form__checkbox"
              type="checkbox"
              id="short-films"
              name="short-films"
            />
            <span className="search-form__checkbox-switch" />
          </label>
          <p className="search-form__short-films-text">
            Короткометражки
          </p>
        </fieldset>
      </form>
      <hr className="line" />
    </div>
  );
}

export default SearchForm;
