import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import './Header.css';

export default function Header () {


    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='logo'></img>
            <div className='header__conteiner'>
                <Link className='header__siginin' >Регистрация</Link>
                <Link className='header__siginup'>Войти</Link>
            </div>
        </header>
    )
}
