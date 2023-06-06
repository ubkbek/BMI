import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='container'>
        <div className='footer__container'>
          <div className='footer__left'>
            <img src={logo} alt='logo' width={150} />
            <p>
              <i className='fa fa-map-marker' aria-hidden='true'></i>
              Address: Shahrisabz shahri, Shahrisabz yulduzi mehmonxonasi
              yonida.
            </p>
          </div>

          <ul className='footer__list'>
            <li className='footer__item'>
              <ul className='footer__inner-list'>
                <li className='footer__inner-item header__item'>
                  Sayt xaritasi
                </li>
                <li className='footer__inner-item'>
                  <a href='#courses'>Kurslar</a>
                </li>
                <li className='footer__inner-item'>
                  <a href='#news'>Yangiliklar</a>
                </li>
                <li className='footer__inner-item'>
                  <a href='#teachers'>Ustozlar</a>
                </li>
                <li className='footer__inner-item'>
                  <a href='#about'>Biz haqimizda</a>
                </li>
              </ul>
            </li>
            <li className='footer__item'>
              <ul className='footer__inner-list'>
                <li className='footer__inner-item header__item'>
                  Ijtimoiy tarmoqlarimiz
                </li>
                <li className='footer__inner-item'>
                  <a href='#news'>Telegram</a>
                </li>
                <li className='footer__inner-item'>
                  <a href='#teachers'>Instagram</a>
                </li>
                <li className='footer__inner-item'>
                  <a href='#about'>Facebook</a>
                </li>
              </ul>
            </li>
            <li className='footer__item'>
              <ul className='footer__inner-list'>
                <li className='footer__inner-item header__item'>
                  Biz bilan boshlaning
                </li>
                <li className='footer__inner-item'>
                  <a href='#'>+998 88 388 01 18</a>
                </li>
                <li className='footer__inner-item'>
                  <a href='#'>+998 88 999 99 99</a>
                </li>
                <li className='footer__inner-item'>
                  <a href='#'>renessans@gmail.com</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
