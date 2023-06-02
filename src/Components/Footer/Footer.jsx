import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='container'>
        <div className='footer__container'>
          <div className='footer__top'>
            <img src={logo} alt='logo' width={150} />
            <p>
              <i className='fa fa-map-marker' aria-hidden='true'></i>
              Address: Shahrisabz shahri, Shahrisabz yulduzi mehmonxonasi
              yonida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
