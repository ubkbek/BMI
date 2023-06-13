import { useEffect, useState } from "react";
import "./AdminNews.css";
import { useLogin } from "../../Contexts/auth.context";
import { toast } from "react-toastify";

const AdminNews = () => {
  const [news, setNews] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [token] = useLogin();

  useEffect(() => {
    fetch("http://localhost:9090/news", {
      method: "GET",
      "Content-Type": "application/json",
      access_token: token,
    })
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [news, token]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value.trim();
    const text = e.target.text.value.trim();
    const photo = e.target.photo.value.trim();

    fetch(`http://localhost:9090/news`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },

      body: JSON.stringify({
        title,
        text,
        photo,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          e.target.reset();

          toast("Yangilik qo'shildi!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (e) => {
    fetch(`http://localhost:9090/news/${e.target.id}`, {
      method: "DELETE",
      "Content-Type": "application/json",
      access_token: token,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data)
          toast("Yangilik o'chirildi!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <h2 className='h4 mb-3'>Yangiliklar</h2>
        <button
          onClick={() => setOpenModal(!openModal)}
          className='btn btn-warning text-light'
        >
          {openModal ? "Yangilik qoshishni bekor qilish" : "Yangilik qoshish"}
        </button>
      </div>

      {openModal && (
        <form onSubmit={handleSubmit} className='my-4 text-center d-flex'>
          <input
            className='form-control me-2 py-2'
            type='text'
            placeholder='Yangilik sarlavhasi'
            required
            name='title'
          />
          <input
            className='form-control me-3'
            type='text'
            placeholder='Yangilik matni'
            required
            name='text'
          />
          <input
            className='form-control me-3'
            type='text'
            placeholder='Rasm url kiriting'
            name='photo'
          />
          <button className='btn btn-success px-3'>Qoshish</button>
        </form>
      )}

      <div className='containerbek'>
        <ul className='responsive-table'>
          <li className='table-header'>
            <div className='col col-news-1'>Yangilik sarlavhasi</div>
            <div className='col col-news-2'>matni</div>
            <div className='col col-news-3'>yaratilgan vaqti</div>
            <div className='col col-news-4'>activligi</div>
            <div className='col col-news-5'>o`chirish</div>
          </li>

          {news.map((item) => (
            <li key={item.id} className='table-row'>
              <div className='col col-news-1' data-label='Job Id'>
                {item.title}
              </div>
              <div className='col col-news-2' data-label='Customer Name'>
                {item.text}
              </div>
              <div className='col col-news-3' data-label='Amount'>
                {item.created_at}
              </div>
              <div className='col col-news-4' data-label='Amount'>
                <input
                  id={item.id}
                  // onChange={handleActive}
                  type='checkbox'
                  checked={item.status}
                />
              </div>
              <div className='col col-news-5' data-label='Amount'>
                <button className='btn text-danger'>
                  <i
                    onClick={handleDelete}
                    id={item.id}
                    className='fa fa-trash'
                    aria-hidden='true'
                  ></i>
                </button>
                <button className='btn text-warning'>
                  <i
                    id={item.id}
                    className='fa fa-pencil'
                    aria-hidden='true'
                  ></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminNews;
