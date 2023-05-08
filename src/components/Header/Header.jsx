import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavigationLoggedIn from '../NavigationLoggedIn/NavigationLoggedIn';

function Header({ isLoggedIn }) {
  const { pathname } = useLocation();
  const colorHeader = pathname === '/' ? 'header_main' : 'header_logged-in';
  const isHeadervisible = pathname === '/signin' || pathname === '/signup';

  return (
    (!isHeadervisible)
    && (
      <header className={`section header ${colorHeader} ${pathname === '/' ? 'header_promo' : ''}`}>
        <Link to="/" className="header__logo link-animation">
          <img
            className="header__img"
            src={logo}
            alt="логотип"
          />
        </Link>
        {isLoggedIn ? <NavigationLoggedIn /> : <Navigation />}

      </header>
    )
  );
}

export default Header;
