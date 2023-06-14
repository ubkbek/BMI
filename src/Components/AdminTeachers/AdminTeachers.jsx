import { useEffect, useState } from "react";
import "./AdminTeachers.css";
import { useLogin } from "../../Contexts/auth.context";
import { toast } from "react-toastify";

const AdminTeachers = () => {
  const [teachers, setTeachers] = useState([]);
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

  useEffect(() => {
    fetch("http://localhost:9090/teachers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data);
      });
  }, [teachers, token]);

  const handleDelete = (e) => {
    console.log("salom");
    fetch(`http://localhost:9090/users/${e.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data)
          toast("Uztoz o'chirildi!", {
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

    const name = e.target.name.value.trim();
    const info = e.target.info.value.trim();
    const phone = e.target.phone.value;
    const course = e.target.course.value.trim();
    const password = e.target.password.value.trim();
    const photo = e.target.photo.value.trim();

    fetch(`http://localhost:9090/teachers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },

      body: JSON.stringify({
        name,
        info,
        phone,
        course_id: course,
        password,
        image: photo,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.id) {
          e.target.reset();

          setOpenModal(false);

          toast("Ustoz qo'shildi!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          return alert("Bu ustoz avval qo'shilgan");
        }
      })
      .catch((err) => {
        return alert(err.message);
      });
  };

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <h2 className='h4 mb-3'>Uztozlar</h2>
        <button
          onClick={() => setOpenModal(!openModal)}
          className='btn btn-warning text-light'
        >
          Yangi ustoz qo`shish
        </button>
      </div>

      {openModal && (
        <form
          onSubmit={handleSubmit}
          className='row g-3 mb-5 w-75 d-flex justify-content-center m-auto'
        >
          <div className='col-md-6'>
            <label htmlFor='name' className='form-label'>
              Ism familiya
            </label>
            <input
              name='name'
              type='text'
              className='form-control'
              id='name'
              required
            />
          </div>

          <div className='col-md-6'>
            <label htmlFor='password' className='form-label'>
              Parol kiriting
            </label>
            <input
              name='password'
              type='password'
              className='form-control'
              id='password'
              required
            />
          </div>

          <div className='col-6'>
            <label htmlFor='info' className='form-label'>
              Ma`lumot
            </label>
            <input
              name='info'
              type='text'
              className='form-control'
              id='info'
              placeholder='Ustoz haqida malumot kiriting'
              required
            />
          </div>

          <div className='col-6'>
            <label htmlFor='inputAddress2' className='form-label'>
              Rasm uchun url manzlini kiriting
            </label>
            <input
              name='photo'
              type='text'
              className='form-control'
              id='inputAddress2'
              placeholder='url link'
              required
            />
          </div>

          <div className='col-md-6'>
            <label htmlFor='inputCity' className='form-label'>
              Telefon raqam
            </label>
            <input
              name='phone'
              type='text'
              className='form-control'
              id='inputCity'
              required
            />
          </div>

          <div className='col-md-6'>
            <label htmlFor='inputState' className='form-label'>
              Kursni tanlang
            </label>
            <select
              name='course'
              id='inputState'
              className='form-select'
              required
              defaultValue={0}
            >
              <option value='DEFAULT' disabled>
                Choose a salutation ...
              </option>
              {courses.map((course) => (
                <option key={course.id} value={course.id} selected>
                  {course.title}
                </option>
              ))}
            </select>
          </div>

          <div className='col-12 d-flex justify-content-end'>
            <button type='submit' className='btn btn-primary'>
              Qoshish
            </button>
          </div>
        </form>
      )}

      <div className='containerbek'>
        <ul className='responsive-table'>
          <li className='table-header'>
            <div className='col teachers-col-1'>Ism familiya</div>
            <div className='col teachers-col-2'>malumot</div>
            <div className='col teachers-col-3'>kurs</div>
            <div className='col teachers-col-4'>telefon</div>
            <div className='col teachers-col-5'>vaqti</div>
            <div className='col teachers-col-6'>tahrirlash</div>
          </li>

          {teachers.map((item) => (
            <li key={item.id} className='table-row'>
              <div className='col teachers-col-1' data-label='Job Id'>
                {item.name}
              </div>
              <div className='col teachers-col-2' data-label='Customer Name'>
                {item.info}
              </div>
              <div className='col teachers-col-3' data-label='Amount'>
                {item.course}
              </div>
              <div className='col teachers-col-4' data-label='Amount'>
                {item.phone}
              </div>
              <div className='col teachers-col-5' data-label='Amount'>
                {item.created_at}
              </div>
              <div className='col teachers-col-6' data-label='Amount'>
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

export default AdminTeachers;
