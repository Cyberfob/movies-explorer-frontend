import './Main.css';
import Header from '../Header/Header';
import main_logo from '../../images/main_logo.svg'

export default function Main () {
    return (
        <div className='main_conteiner'>
    <Header></Header>
        <main className='main'>
            <h1 className='main__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <img className='main__logo' src={main_logo}></img>
        </main>
        </div>
    );
}
    
