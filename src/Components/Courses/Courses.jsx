import { motion } from "framer-motion";
import "./Courses.css";

const TextAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const CardAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.05 },
  }),
};

const Courses = () => {
  return (
    <motion.div initial='hidden' whileInView='visible' className='courses'>
      <div className='container'>
        <div className='courses__container'>
          <motion.h2
            initial='hidden'
            whileInView='visible'
            custom={1}
            variants={TextAnimation}
            className='courses__heading'
            id='courses'
          >
            Kurslar
          </motion.h2>
          <motion.div
            initial='hidden'
            whileInView='visible'
            custom={1}
            variants={TextAnimation}
            className='d-flex justify-content-center'
          >
            <div className='about__devider'></div>
          </motion.div>

          <motion.ul
            initial='hidden'
            whileInView='visible'
            variants={CardAnimation}
            className='courses__list'
            custom={1}
          >
            <motion.li
              initial='hidden'
              whileInView='visible'
              variants={CardAnimation}
              custom={1}
              className='card'
            >
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
            </motion.li>

            <motion.li
              initial='hidden'
              whileInView='visible'
              variants={CardAnimation}
              custom={2}
              className='card'
            >
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
            </motion.li>

            <motion.li
              initial='hidden'
              whileInView='visible'
              variants={CardAnimation}
              custom={3}
              className='card'
            >
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
            </motion.li>

            <motion.li
              initial='hidden'
              whileInView='visible'
              variants={CardAnimation}
              custom={4}
              className='card'
            >
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
            </motion.li>
            <motion.li
              initial='hidden'
              whileInView='visible'
              variants={CardAnimation}
              custom={5}
              className='card'
            >
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
            </motion.li>
            <motion.li
              initial='hidden'
              whileInView='visible'
              variants={CardAnimation}
              custom={6}
              className='card'
            >
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
            </motion.li>
            <motion.li
              initial='hidden'
              whileInView='visible'
              variants={CardAnimation}
              custom={7}
              className='card'
            >
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
            </motion.li>

            <motion.li
              initial='hidden'
              whileInView='visible'
              variants={CardAnimation}
              custom={8}
              className='card'
            >
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
            </motion.li>

            <motion.li
              initial='hidden'
              whileInView='visible'
              variants={CardAnimation}
              custom={9}
              className='card'
            >
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
            </motion.li>

            <motion.li
              initial='hidden'
              whileInView='visible'
              variants={CardAnimation}
              custom={10}
              className='card'
            >
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
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Courses;
