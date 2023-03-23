import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';

function Register({ loggedIn }) {
  return (
    <section className="sign">

      <form className="sign__form" name="register">
        <fieldset className="sign__fieldset">
          <Link to="/" className="sign__header link-animation" aria-label="На главную">
            <img
              className="sign__img"
              src={logo}
              alt="логотип"
            />
          </Link>
          <h1 className="sign__title">
            Добро пожаловать!
          </h1>

          <label className="sign__form-label" htmlFor="name">
            Имя
            <input
              className="sign__form-input"
              type="text"
              placeholder="Ваше имя"
              id="name"
              name="name"
              aria-label="Введите ваше имя"
            />
          </label>

          <label className="sign__form-label" htmlFor="email">
            E-mail
            <input
              className="sign__form-input sign__form-input_type_error"
              type="email"
              placeholder="Ваш e-mail"
              id="email"
              name="email"
              aria-label="Введите ваш e-mail"
            />
            <span className="sign__form-input-error">Что-то пошло не так...</span>
          </label>

          <label className="sign__form-label" htmlFor="password">
            Пароль
            <input
              className="sign__form-input sign__form-input_type_error"
              type="password"
              placeholder="Ваш пароль"
              id="password"
              name="password"
              aria-label="Введите ваш пароль"
            />
            <span className="sign__form-input-error">Что-то пошло не так...</span>
          </label>
        </fieldset>

        <fieldset className="sign__fieldset">
          <button
            className="sign__form-button link-animation"
            type="button"
            aria-label="Зарегистрироваться"
            onClick={loggedIn}
          >
            Зарегистрироваться
          </button>

          <p className="sign__text">
            Уже зарегистрированы?
            <Link
              to="/signin"
              className="sign__text-link link-animation"
              aria-label="На страницу входа"
            >
              Войти
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}

export default Register;
