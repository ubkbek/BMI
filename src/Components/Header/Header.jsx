import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./../../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={isActive ? "active header" : "header"}>
      <div className='container'>
        <div className='header__container'>
          <Link className='header__logo-link' to='/'>
            <img
              className='header__logo-img'
              src={logo}
              alt='Logo of renessans'
              width={170}
            />
          </Link>

          <ul className='header__nav-list'>
            <li className='header__nav-item'>
              <a href='/#about' className='header__nav-link'>
                BIZ HAQIMIZDA
              </a>
            </li>
            <li className='header__nav-item'>
              <a href='/' className='header__nav-link'>
                KURSLAR
              </a>
            </li>
            <li className='header__nav-item'>
              <a href='/#teachers' className='header__nav-link'>
                JAMOA
              </a>
            </li>
            <li className='header__nav-item'>
              <a href='/#news' className='header__nav-link'>
                YANGILIKLAR
              </a>
            </li>
            <li className='header__nav-item'>
              <a href='/results' className='header__nav-link'>
                NATIJALAR
              </a>
            </li>
            <li className='header__nav-item'>
              <a href='/contacts' className='header__nav-link'>
                BOGLANISH
              </a>
            </li>

            <li className='header__nav-item'>
              <Link
                to='/login'
                className='header__nav-link btn btn-light text-dark rounded-1 py-1 px-3 login-btn'
              >
                KIRISH
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setIsActive(!isActive)}
            className='header__menu-btn'
          >
            <i
              className={
                isActive
                  ? "fa-solid fa-bars header__btn d-none"
                  : "fa-solid fa-bars header__btn"
              }
            ></i>
            <i
              className={
                isActive
                  ? "fa-sharp fa-solid fa-xmark header__btn"
                  : "fa-sharp fa-solid fa-xmark header__btn d-none"
              }
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
