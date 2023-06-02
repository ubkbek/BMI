import "./Hero.css";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero__container'>
          <h1 className='hero__heading'>
            Renessans O`quv markazi sifatli talim va kafolatli natija taklif
            qiladi!
          </h1>

          <p className='hero__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro
            expedita atque inventore modi cum amet eius, adipisci asperiores
            reprehenderit, ad, sequi facere? Reprehenderit vero ipsa modi odio
            autem. Corrupti. Ad, sequi facere? Reprehenderit vero ipsa modi odio
            autem. Corrupti.
          </p>

          <a className='hero__link' href='/#courses'>
            Kurslar
            <i className='fa fa-long-arrow-down' aria-hidden='true'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
