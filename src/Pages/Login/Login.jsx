import { useLogin } from "../../Contexts/auth.context.jsx";
import { Link } from "react-router-dom";
// import logo from "./../../assets/logo_black.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  let a = false;
  if (a) console.log(token);
  const [token, setToken] = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, password } = e.target;

    fetch("http://localhost:9090/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value.trim(),
        password: password.value.trim(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.access_token) {
          toast("Kirish tasdiqlandi!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          setToken(data.access_token);

          const route =
            data.role == 3
              ? "/admin"
              : data.role == 2
              ? "/teacher"
              : "/student";

          navigate(route);
        } else {
          toast.error("Login yoki parol xato! Qaytadan urunib ko'ring", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  };

  return (
    <div className='login'>
      <div className='contanier'>
        <div className='login__container'>
          {/* <img src={logo} alt='logo' /> */}

          <h2 className='login__heading'>Login</h2>

          <form onSubmit={handleSubmit}>
            <input
              name='name'
              className='login__input form-control'
              type='text'
              placeholder='Ism familangizni kiriting...'
              required
            />

            <input
              name='password'
              className='login__input form-control'
              type='password'
              placeholder='Parolingizni kiriting...'
              required
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
