import "./Hero.css";
import { motion } from "framer-motion";

const TextAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const Hero = () => {
  return (
    <motion.div initial='hidden' whileInView='visible' className='hero'>
      <div className='container'>
        <div className='hero__container'>
          <motion.h1
            custom={1}
            variants={TextAnimation}
            className='hero__heading'
          >
            Renessans O`quv markazi sifatli talim va kafolatli natija taklif
            qiladi!
          </motion.h1>

          <motion.p custom={2} variants={TextAnimation} className='hero__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro
            expedita atque inventore modi cum amet eius, adipisci asperiores
            reprehenderit, ad, sequi facere? Reprehenderit vero ipsa modi odio
            autem. Corrupti. Ad, sequi facere? Reprehenderit vero ipsa modi odio
            autem. Corrupti.
          </motion.p>

          <a className='hero__link' href='/#courses'>
            Kurslar
            <i className='fa fa-long-arrow-down' aria-hidden='true'></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
