import { useEffect, useState } from "react";
import "./ClientTeachers.css";
import { Link } from "react-router-dom";

const ClientTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9090/public_teachers")
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data.slice(0, 5));
      });
  }, [teachers]);
  return (
    <div className='teachers'>
      <div className='container teachers__container'>
        <h2 className='teachers__heading'>Ustozlarimiz</h2>
        <div>
          <div className='about__devider'></div>
        </div>

        <ul className='teachers__list'>
          {teachers.map((item) => (
            <li className='teachers__item' key={item.id}>
              <img src={item.image} alt={item.name + "image"} />

              <div className='teachers__item-wrapper'>
                <h3h4 className='h3'>{item.name}</h3h4>
                <p className='text-light'>{item.course} kursi uztozi</p>
                <p>{item.info}</p>
              </div>
            </li>
          ))}
        </ul>

        <Link className='text-decoration-none text-warning' to={"/"}>
          Ko`proq ko`rish
        </Link>
      </div>
    </div>
  );
};

export default ClientTeachers;
