import { useEffect, useState } from "react";
import "./AdminStudents.css";
import { useLogin } from "../../Contexts/auth.context";
import { toast } from "react-toastify";

const AdminStudents = () => {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [token] = useLogin();
  const [courseGroups, setCourseGroups] = useState([]);

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
    fetch("http://localhost:9090/students", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      });
  }, [students]);

  const handleDelete = (e) => {
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
          toast("O'chirildi!", {
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

  const handleSelectCourse = (e) => {
    fetch(`http://localhost:9090/teacher/groups/${e.target.value}`, {
      headers: {
        "content-type": "application/json",
        access_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourseGroups(data, token);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const password = e.target.password.value.trim();
    const phone = e.target.phone.value;
    const image = e.target.image.value.trim();
    const group_id = e.target.group.value.trim();

    fetch(`http://localhost:9090/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },

      body: JSON.stringify({
        name,
        password,
        phone,
        image,
        group_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          e.target.reset();
          setOpenModal(false);
          toast("Yaratildi!", {
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
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <h2 className='h4 mb-3'>Talabalar</h2>
        <button
          onClick={() => setOpenModal(!openModal)}
          className='btn btn-warning text-light'
        >
          {openModal
            ? "Talaba qoshishni bekor qilish"
            : "Yangi  talaba qo`shish"}
        </button>
      </div>

      {openModal && (
        <form
          onSubmit={handleSubmit}
          className='row g-3 mb-5  d-flex justify-content-center m-auto'
        >
          {/* name */}
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

          {/* password */}
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

          {/* phone */}
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

          {/* image */}
          <div className='col-6'>
            <label htmlFor='inputAddress2' className='form-label'>
              Rasm uchun url manzlini kiriting
            </label>
            <input
              name='image'
              type='text'
              className='form-control'
              id='inputAddress2'
              placeholder='url link'
              required
            />
          </div>

          {/* course */}
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
              onChange={handleSelectCourse}
            >
              <option value='DEFAULT' disabled hidden>
                Choose a salutation ...
              </option>

              {courses.map((course) => (
                <option key={course.id} value={course.id} selected>
                  {course.title}
                </option>
              ))}
            </select>
          </div>

          {/* groups */}
          <div className='col-md-6'>
            <label htmlFor='inputStatee' className='form-label'>
              Guruhni tanlang
            </label>
            <select
              name='group'
              id='inputStatee'
              className='form-select'
              required
              defaultValue={0}
            >
              <option value='DEFAULT' disabled>
                Choose a salutation ...
              </option>
              {courseGroups.map((group) => (
                <option key={group.id} value={group.id} selected>
                  {group.title}
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
            <div className='col student-col-1'>Ism familiya</div>
            <div className='col student-col-2'>kurs</div>
            <div className='col student-col-3'>guruh</div>
            <div className='col student-col-4'>telefon</div>
            <div className='col student-col-5'>parol</div>
            <div className='col student-col-6'>vaqt</div>
            <div className='col student-col-7'>tahrirlash</div>
          </li>

          {students.map((item) => (
            <li key={item.id} className='table-row'>
              <div className='col student-col-1' data-label='Job Id'>
                {item.name}
              </div>
              <div className='col student-col-2' data-label='Customer Name'>
                {item.course}
              </div>
              <div className='col student-col-3' data-label='Amount'>
                {item.group}
              </div>
              <div className='col student-col-4' data-label='Amount'>
                {item.phone}
              </div>
              <div className='col student-col-5' data-label='Amount'>
                {item.password}
              </div>
              <div className='col student-col-6' data-label='Amount'>
                {item.created_at}
              </div>
              <div className='col student-col-7' data-label='Amount'>
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

export default AdminStudents;
