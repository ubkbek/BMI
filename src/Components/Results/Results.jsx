import { useEffect } from "react";
import "./Results.css";
import { useState } from "react";

const Results = () => {
  const [graduates, setGraduates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9090/graduates")
      .then((res) => res.json())
      .then((data) => {
        setGraduates(data);
      });
  }, [graduates]);

  return (
    <div className='results'>
      <div className='container results__container'>
        <h2 className='about__heading text-center'>
          Bitiruvchilarimiz natijalari
        </h2>
        <div className='d-flex justify-content-center'>
          <div className='about__devider'></div>
        </div>

        <ul className='results__list'>
          {graduates.map((e) => (
            <li key={e.id} className='results__item'>
              <div>
                <img src={e.image} alt='d' />
                <h3>{e.name}</h3>
                <p>{e.study_at}</p>
              </div>
              <p>{e.info}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Results;
