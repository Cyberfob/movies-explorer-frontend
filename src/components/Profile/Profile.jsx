import { useState, useEffect, useContext } from 'react';
import { UserDataContext } from '../CurrentUserContext/CurrentUserContext';
import useFormValidation from '../../hooks/useFormValidation';
import './Profile.css';

function Profile({ handleLogout, errorProfile, onUpdateUser }) {

  const [errorText, setErrorText] = useState('');
  const [messageType, setMessageType] = useState('');
  const [profileData, setProfileData] = useState(false);
  const currentUser = useContext(UserDataContext);
  const { values, errors, isValid, handleChange } = useFormValidation();
  const { name = currentUser.name, email = currentUser.email } = values;

  useEffect(() => {
    setProfileData(name === currentUser.name && email === currentUser.email);
  }, [name, email, currentUser.name, currentUser.email, profileData]);

  const handleErrorText = () => {
    if (errorProfile === 200) {
      setErrorText('Данные успешно обновлены');
      setMessageType('profile__form-message_type_success');
    } else {
      setErrorText(errorProfile.message);
      setMessageType('profile__form-message_type_error');
    }
  };

  const handleChangeForm = () => {
    if (!profileData) {
      setErrorText('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onUpdateUser({ name, email });
    }
  };

  useEffect(() => {
    handleErrorText();
  }, [errorProfile]);

  useEffect(() => {
    handleChangeForm();
  }, [profileData]);

  return (
    <section className="profile">

      <form className="profile__form" onSubmit={handleSubmit} name="profile">
        <fieldset className="profile__fieldset">
          <h1 className="profile__title">{`Привет ${currentUser.name}!`}</h1>
          <label className="profile__form-label" htmlFor="name">
            Имя
            <input
              required
              className="profile__form-input"
              onChange={handleChange}
              value={name || ''}
              aria-label="Введите ваше имя"
              id="name"
              minLength="2"
              maxLength="30"
              name="name"
              placeholder="Ваше имя"
              type="text" />
          </label>
          <hr className="line profile__line" />
          <label className="profile__form-label" htmlFor="email">
            E-mail
            <input
              required
              className="profile__form-input"
              onChange={handleChange}
              value={email || ''}
              aria-label="Введите ваш e-mail"
              id="email"
              name="email"
              placeholder="Ваш e-mail"
              type="email" />
          </label>
        </fieldset>
        <fieldset className="profile__fieldset">
          <span className="profile__form-message profile__form-message_type_error">
            {errors.name}
            {errors.email}
          </span>
          <span className={`profile__form-message ${messageType}`}>
            {errorText}
          </span>
          <button
            className="profile__button button-animation"
            disabled={!isValid || profileData}
            aria-label="Редактировать профиль"
            type="submit">
            Редактировать
          </button>
          <button
            className="profile__button profile__button_type_logout link-animation"
            aria-label="Выйти из аккаунта"
            type="button"
            onClick={handleLogout}>
            Выйти из аккаунта
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default Profile;
