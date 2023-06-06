import { useEffect, useState } from "react";
import "./AdminGroups.css";
import { useLogin } from "../../Contexts/auth.context";
import { toast } from "react-toastify";

const AdminGroups = () => {
  const [openModal, setOpenModal] = useState(false);
  const [token] = useLogin();
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9090/courses", {
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
    fetch("http://localhost:9090/groups", {
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGroups(data);
      });
  }, [token, groups]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value.trim();
    const course = e.target.course.value;
    const teacher = e.target.teacher.value;

    fetch(`http://localhost:9090/groups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },

      body: JSON.stringify({
        title,
        teacher_id: teacher,
        course_id: course,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setGroups(data);

          e.target.reset();

          toast.success("Guruh yaratildi!", {
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
    fetch(`http://localhost:9090/groups/${e.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data)
          toast.success("Guruh o'chirildi!", {
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

  const handleSelectCourse = (e) => {
    fetch(`http://localhost:9090/course_teachers/${e.target.value}`, {
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data);
      });
  };

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <h2 className='h4 mb-3'>Guruhlar</h2>
        <button
          onClick={() => setOpenModal(!openModal)}
          className='btn btn-warning text-light'
        >
          Yangi guruh qo`shish
        </button>
      </div>

      {openModal && (
        <form onSubmit={handleSubmit} className='my-4 text-center d-flex'>
          <input
            className='form-control me-2 py-2'
            type='text'
            placeholder='Guruh nomi'
            required
            name='title'
          />

          <select
            onChange={handleSelectCourse}
            className='form-control me-2 py-2'
            name='course'
          >
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>

          <select className='form-control me-2 py-2' name='teacher'>
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.name}
              </option>
            ))}
          </select>

          <button className='btn btn-success px-3'>Qoshish</button>
        </form>
      )}

      <div className='containerbek'>
        <ul className='responsive-table'>
          <li className='table-header'>
            <div className='col groups-col-1'>Guruh nomi</div>
            <div className='col groups-col-2'>kurs</div>
            <div className='col groups-col-3'>ustozi</div>
            <div className='col groups-col-4'>ochilgan sana</div>
            <div className='col groups-col-5'>o`chirish</div>
          </li>

          {groups.length &&
            groups.map((item) => (
              <li key={item.id} className='table-row'>
                <div className='col groups-col-1' data-label='Job Id'>
                  {item.title}
                </div>
                <div className='col groups-col-2' data-label='Customer Name'>
                  {item.course}
                </div>
                <div className='col groups-col-3' data-label='Amount'>
                  {item.teacher}
                </div>
                <div className='col groups-col-4' data-label='Amount'>
                  {item.created_at}
                </div>
                <div className='col groups-col-5' data-label='Amount'>
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

export default AdminGroups;
