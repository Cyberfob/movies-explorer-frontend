import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const { pathname } = useLocation();
  const isFooterVisible = pathname === '/' || pathname === '/movies' || pathname === '/saved-movies';

  return (
    (isFooterVisible) && (
      <footer className="section footer">
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className="footer__container">
          <p className="footer__date">
            © 2023
          </p>
          <ul className="footer__list" >
            <li className="footer__list-item">
              <a
                className="footer__link link-animation"
                href="https://https://practicum.yandex.ru/"
                target="_blank"
                aria-label="Ссылка на сайт Яндекс.Практикум"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__list-item">
              <a
                className="footer__link link-animation"
                href="https://github.com"
                target="_blank"
                aria-label="Ссылка на Github"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
  );
}

export default Footer;