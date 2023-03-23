import './Promo.css';
import promo_logo from '../../../images/promo_logo.svg'

export default function Promo() {
  return (
    <div className="promo">
      <div className="promo__conteiner">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img className='promo__logo' src={promo_logo} alt='logo'></img>
      </div>
    </div>
  );
};