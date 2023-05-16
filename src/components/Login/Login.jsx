import { Link } from 'react-router-dom';
import '../Register/Register.css';
import { useState, useEffect } from 'react';
import logo from '../../images/logo.svg';
import useFormValidation from '../../hooks/useFormValidation';

function Login({ handleLogin, loggedIn, errorLogin }) {

  const [errorText, setErrorText] = useState('');

  const {
    values, errors, isValid, handleChange,
  } = useFormValidation();

  const { email, password } = values;

  function handleErrorrMessage() {
    if (errorLogin === 400) {
      setErrorText('Ошибка при вводе логина или пароля')
    } else if (errorLogin === 500) {
      setErrorText('Ошибка сервера. Попробуйте позже еще раз.')
    } else if (errorLogin) {
      console.log(errorLogin)
      setErrorText('Такого пользователя не существует.')
    } else {
      return;
    }
  }

  useEffect(() => {
    handleErrorrMessage();
  }, [errorLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      handleLogin(email, password);
    }
  };
  return (
    <section className="sign">

      <form className="sign__form" name="login" onSubmit={handleSubmit}>
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
              className={`sign__form-input ${errors.email ? 'sign__form-input_type_error' : ''}`}
              onChange={handleChange}
              value={email || ''}
              aria-label="Введите ваш e-mail"
              id="email"
              name="email"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              placeholder="Ваш e-mail"
              type="email"
              required
            />
            <span
              className="sign__form-error sign__form-error_type_input">
              {errors.email}
            </span>
          </label>

          <label className="sign__form-label" htmlFor="password">
            Пароль
            <input
              className={`sign__form-input ${errors.password ? 'sign__form-input_type_error' : ''}`}
              onChange={handleChange}
              value={password || ''}
              aria-label="Введите ваш пароль"
              id="password"
              minLength="8"
              name="password"
              placeholder="Ваш пароль"
              type="password"
              required
            />
            <span
              className="sign__form-error sign__form-error_type_input">
              {errors.password}
            </span>
          </label>
        </fieldset>

        <fieldset className="sign__fieldset">
          <span className="sign__form-error sign__form-error_type_form">
            {errorText}
          </span>
          <button
            className="sign__form-button button-animation"
            disabled={!isValid}
            aria-label="Войти"
            type="submit">
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
