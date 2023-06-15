import { useEffect, useState } from "react";
import "./ClientTeachers.css";
import { Link } from "react-router-dom";

const ClientTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [limit, setLimit] = useState([6]);

  useEffect(() => {
    fetch("http://localhost:9090/public_teachers")
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data.slice(0, limit));
      });
  }, [teachers]);
  return (
    <div className='teachers' id='teachers'>
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

        <div className='d-flex justify-content-center'>
          <Link
            onClick={() => {
              if (limit == 6) setLimit(1000);
              else setLimit(6);
              console.log(limit);
            }}
            className='about__link'
          >
            {limit == 6 ? "Hammasini ko'rish" : "Yopish"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientTeachers;
