import './Profile.css';

function Profile({ loggedOut }) {
  return (
    <section className="profile">

      <form className="profile__form" name="profile">

        <fieldset className="profile__fieldset">
          <h1 className="profile__title">Привет, Виталий!</h1>

          <label className="profile__form-label" htmlFor="name">
            Имя
            <input
              required
              className="profile__form-input"
              type="text"
              placeholder="Ваше имя"
              id="name"
              name="name"
              aria-label="Введите ваше имя"
            />
          </label>

          <hr className="line profile__line" />

          <label className="profile__form-label" htmlFor="email">
            E-mail
            <input
              required
              className="profile__form-input"
              type="email"
              placeholder="Ваш e-mail"
              id="email"
              name="email"
              aria-label="Введите ваш e-mail"
            />
          </label>

        </fieldset>

        <fieldset className="profile__fieldset">
          <button
            className="profile__button link-animation"
            type="submit"
            aria-label="Редактировать профиль"
          >
            Редактировать
          </button>

          <button
            className="profile__button profile__button_type_logout link-animation"
            aria-label="Выйти из аккаунта"
            type="button"
            onClick={loggedOut}
          >
            Выйти из аккаунта
          </button>
        </fieldset>

      </form>

    </section>
  );
}

export default Profile;
