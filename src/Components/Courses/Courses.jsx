// import { Link } from "react-router-dom";
import "./Courses.css";

const Courses = () => {
  return (
    <div className='courses'>
      <div className='container'>
        <div className='courses__container'>
          <h2 className='courses__heading' id='courses'>
            Kurslar
          </h2>
          <div className='d-flex justify-content-center'>
            <div className='about__devider'></div>
          </div>

          <ul className='courses__list'>
            <li className='card'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1XRoaDHrASPway5l3RUkYorAtvZhBh2QbLA&usqp=CAU'
                className='card-img-top'
                alt='da'
                height={200}
              />

              <div className='card-body'>
                <h5 className='card-title'>Matematika</h5>
                <p className='card-text'>
                  Oliy talim muaassasalari kirish imtihonlariga tayyorgarlik
                  uchun matematika kursi
                </p>
              </div>
            </li>

            <li className='card'>
              <img
                src='https://otmlar.uz/media/CACHE/images/posts/2022/11/01/e4a4f0a7742184d764915968981abd751/4c0f5d15957a0c2a14029b3f9da9992e.jpg'
                className='card-img-top'
                alt='da'
                height={200}
              />

              <div className='card-body'>
                <h5 className='card-title'>Fizika</h5>
                <p className='card-text'>
                  Oliy talim muaassasalari kirish imtihonlariga tayyorgarlik
                  uchun fizika kursi
                </p>
              </div>
            </li>

            <li className='card'>
              <img
                src='https://static.oliygoh.uz/crop/1/0/832__85_105740764.jpg?t=1590865302'
                className='card-img-top'
                alt='da'
                height={200}
              />

              <div className='card-body'>
                <h5 className='card-title'>Kimyo</h5>
                <p className='card-text'>
                  Oliy talim muaassasalari kirish imtihonlariga tayyorgarlik
                  uchun kimyo kursi
                </p>
              </div>
            </li>

            <li className='card'>
              <img
                src='https://alltest.uz/uploads/Content/Images/engkard.png'
                alt='da'
                height={200}
              />

              <div className='card-body'>
                <h5 className='card-title'>Ingliz tili garramatikasi</h5>
                <p className='card-text'>
                  Oliy talim muaassasalari kirish imtihonlariga tayyorgarlik
                  uchun ingliz tili kursi
                </p>
              </div>
            </li>
            <li className='card'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1XRoaDHrASPway5l3RUkYorAtvZhBh2QbLA&usqp=CAU'
                className='card-img-top'
                alt='da'
                height={200}
              />

              <div className='card-body'>
                <h5 className='card-title'>Matematika</h5>
                <p className='card-text'>
                  Oliy talim muaassasalari kirish imtihonlariga tayyorgarlik
                  uchun matematika kursi
                </p>
              </div>
            </li>

            <li className='card'>
              <img
                src='https://otmlar.uz/media/CACHE/images/posts/2022/11/01/e4a4f0a7742184d764915968981abd751/4c0f5d15957a0c2a14029b3f9da9992e.jpg'
                className='card-img-top'
                alt='da'
                height={200}
              />

              <div className='card-body'>
                <h5 className='card-title'>Fizika</h5>
                <p className='card-text'>
                  Oliy talim muaassasalari kirish imtihonlariga tayyorgarlik
                  uchun fizika kursi
                </p>
              </div>
            </li>

            <li className='card'>
              <img
                src='https://static.oliygoh.uz/crop/1/0/832__85_105740764.jpg?t=1590865302'
                className='card-img-top'
                alt='da'
                height={200}
              />

              <div className='card-body'>
                <h5 className='card-title'>Kimyo</h5>
                <p className='card-text'>
                  Oliy talim muaassasalari kirish imtihonlariga tayyorgarlik
                  uchun kimyo kursi
                </p>
              </div>
            </li>

            <li className='card'>
              <img
                src='https://alltest.uz/uploads/Content/Images/engkard.png'
                alt='da'
                height={200}
              />

              <div className='card-body'>
                <h5 className='card-title'>Ingliz tili garramatikasi</h5>
                <p className='card-text'>
                  Oliy talim muaassasalari kirish imtihonlariga tayyorgarlik
                  uchun ingliz tili kursi
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;
