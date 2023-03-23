import { Link } from 'react-router-dom';
import '../Register/Register.css';
import logo from '../../images/logo.svg';

function Login({ loggedIn }) {
  return (
    <section className="sign">

      <form className="sign__form" name="login">
        <fieldset className="sign__fieldset">
          <Link to="/" className="sign__header link-animation" aria-label="На главную">
            <img
              className="sign__img"
              src={logo}
              alt="логотип"
            />
          </Link>
          <h1 className="sign__title">
            Рады видеть!
          </h1>

          <label className="sign__form-label" htmlFor="email">
            E-mail
            <input

              className="sign__form-input"
              type="email"
              placeholder="Ваш e-mail"
              id="email"
              name="email"
              aria-label="Введите ваш e-mail"
            />

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
            aria-label="Войти"
            onClick={loggedIn}
          >
            Войти
          </button>

          <p className="sign__text">
            Ещё не зарегистрированы?
            <Link
              to="/signup"
              className="sign__text-link link-animation"
              aria-label="На страницу регистрации"
            >
              Регистрация
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}

export default Login;
