import "./About.css";
import { motion } from "framer-motion";

const CardAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const TextAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2 },
  },
};

const About = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      className='about'
      id='about'
    >
      <div className='container'>
        <div className='about__container'>
          <motion.h2
            initial='hidden'
            whileInView='visible'
            variants={TextAnimation}
            className='about__heading'
          >
            Biz haqimizda
          </motion.h2>

          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={TextAnimation}
            className='about__devider'
          ></motion.div>

          <motion.p
            variants={TextAnimation}
            initial='hidden'
            whileInView='visible'
            className='about__text'
          >
            Biz Renessans jamoasi bilan 5 yildan buyon xalqqa xizmat qilib
            kelmoqdamiz. Bizning maqsadimiz bilimga chanqoq yoshlarni orzulari
            tomon ildamlashlariga Komak berishdan iborat. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Deleniti magni repellat
            architecto, earum placeat distinctio maiores est eos quod itaque
            excepturi natus omnis ipsam unde! Omnis, numquam. Cupiditate!
          </motion.p>

          <motion.ul
            initial='hidden'
            whileInView='visible'
            className='about__list'
          >
            <motion.li
              variants={CardAnimation}
              custom={0.5}
              className='about__item'
            >
              <i
                className='fa fa-line-chart about__icon'
                aria-hidden='true'
              ></i>
              <h3 className='about__item-heading'>Missiyamiz</h3>
              <p className='about__item-text'>
                Intellectual yoshlarni o`zlari orzu qilgan Oliy ta`lim
                muassasiga yetaklash!`
              </p>
            </motion.li>
            <motion.li
              variants={CardAnimation}
              custom={1}
              className='about__item'
            >
              <i
                className='fa fa-external-link-square about__icon'
                aria-hidden='true'
              ></i>
              <h3 className='about__item-heading'>Tariximiz</h3>
              <p className='about__item-text'>
                Biz 5 yildan ortiq tarixga egamiz, 5 yillik davr mobaynida biz
                1000 lab abiturriyentlarga talaba bolishlariga yordam berdik
              </p>
            </motion.li>
            <motion.li
              variants={CardAnimation}
              custom={1.5}
              className='about__item'
            >
              <i
                className='fa fa-graduation-cap about__icon'
                aria-hidden='true'
              ></i>
              <h3 className='about__item-heading'>Yo`nalish</h3>
              <p className='about__item-text'>
                tabiiy fanlar, aniq fanlar, gumanitar fanlar hamda til
                kurslarimiz mavjud. IT kurslatimiz ham yo`lga qoyilgan`
              </p>
            </motion.li>
            <motion.li
              variants={CardAnimation}
              custom={2}
              className='about__item'
            >
              <i className='fa fa-check about__icon' aria-hidden='true'></i>
              <h3 className='about__item-heading'>Muvaffaqqiyat</h3>
              <p className='about__item-text'>
                Biz qisqa muddat ichida katta natijalarga erishdik.
                Muvaffaqqiyatdi abituriyentlar, ahil jamoa va xalq ishonchi
              </p>
            </motion.li>
            <motion.li
              variants={CardAnimation}
              custom={2.5}
              className='about__item'
            >
              <i className='fa fa-star about__icon' aria-hidden='true'></i>
              <h3 className='about__item-heading'>Grantlar</h3>
              <p className='about__item-text'>
                Renessans o`quv markazi muntazam grantlar tashkil etadi.
                Grantlarimiz qisman yoki toliq holda tolovni tolab berishga
                qaratilgan
              </p>
            </motion.li>
          </motion.ul>

          <motion.a
            variants={CardAnimation}
            whileInView='visible'
            initial='hidden'
            className='about__link'
            href='/'
          >
            Biz bilan boglaning
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
