import { useEffect, useState } from "react";
import "./TeacherCourses.css";
import { useLogin } from "../../Contexts/auth.context";
import { toast } from "react-toastify";

const TeacherCourses = () => {
  const [courses, setCourses] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [token] = useLogin();

  useEffect(() => {
    fetch("http://localhost:9090/courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, [courses, token]);

  const handleDelete = (e) => {
    fetch(`http://localhost:9090/courses/${e.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data)
          toast.success("Kurs o'chirildi!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value.trim();
    const description = e.target.description.value.trim();
    const price = e.target.price.value;
    const photo = e.target.photo.value.trim();

    console.log(title, description, price, photo);

    fetch(`http://localhost:9090/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },

      body: JSON.stringify({
        title,
        description,
        photo,
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          e.target.title.value = null;
          e.target.description.value = null;
          e.target.photo.value = null;
          e.target.price.value = null;

          setOpenModal(false);

          toast.success("Kurs yaratildi!", {
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

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <h2 className='h4 mb-3'>Kurslar</h2>
        <button
          onClick={() => setOpenModal(!openModal)}
          className='btn btn-warning text-light'
        >
          {openModal
            ? "Kurs qoshishni bekor qilish"
            : "Yangi  qoshikurs qoshish"}
        </button>
      </div>

      {openModal && (
        <form onSubmit={handleSubmit} className='my-4 text-center d-flex'>
          <input
            className='form-control me-2 py-2'
            type='text'
            placeholder='Kurs nomini kiriting...'
            required
            name='title'
          />

          <input
            className='form-control me-3'
            type='text'
            placeholder='Kurstarif uchun  kiriting...'
            required
            name='description'
          />

          <input
            className='form-control me-3'
            type='number'
            placeholder='oylik narxi'
            name='price'
            min={400000}
            step={1}
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
            <div className='col course-col-1'>Kurs nomi</div>
            <div className='col course-col-2'>malumot</div>
            <div className='col course-col-3'>narxi</div>
            <div className='col course-col-4'>ochilgan vaqti</div>
            <div className='col course-col-5'>tahrirlash</div>
          </li>

          {courses.map((item) => (
            <li key={item.id} className='table-row'>
              <div className='col course-col-1' data-label='Job Id'>
                {item.title}
              </div>
              <div className='col course-col-2' data-label='Customer Name'>
                {item.description}
              </div>
              <div className='col course-col-3' data-label='Amount'>
                {item.price}
              </div>
              <div className='col course-col-4' data-label='Amount'>
                {item.created_at}
              </div>
              <div className='col course-col-5' data-label='Amount'>
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

export default TeacherCourses;
