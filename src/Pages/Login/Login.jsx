// import { useLogin } from "../../Contexts/auth.context.jsx";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo_black.png";
import "./Login.css";

const Login = () => {
  // const [token, setToken] = useLogin();

  return (
    <div className='login'>
      <div className='contanier'>
        <div className='login__container'>
          <img src={logo} alt='logo' />

          <h2 className='login__heading'>Login</h2>

          <form>
            <input
              className='login__input form-control'
              type='text'
              placeholder='Ism familangizni kiriting...'
            />

            <input
              className='login__input form-control'
              type='text'
              placeholder='Parolingizni kiriting...'
            />

            <button className='login__button form-control btn btn-success'>
              Jo`natish
            </button>
          </form>

          <Link className='text-dark' to='/'>
            Orqaga <i className='fa fa-arrow-left ms-2' aria-hidden='true'></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
