import "./About.css";

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='container'>
        <div className='about__container'>
          <h2 className='about__heading'>Biz haqimizda</h2>

          <div className='about__devider'></div>

          <p className='about__text'>
            Biz Renessans jamoasi bilan 5 yildan buyon xalqqa xizmat qilib
            kelmoqdamiz. Bizning maqsadimiz bilimga chanqoq yoshlarni orzulari
            tomon ildamlashlariga Komak berishdan iborat. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Deleniti magni repellat
            architecto, earum placeat distinctio maiores est eos quod itaque
            excepturi natus omnis ipsam unde! Omnis, numquam. Cupiditate!
          </p>

          <ul className='about__list'>
            <li className='about__item'>
              <i
                className='fa fa-line-chart about__icon'
                aria-hidden='true'
              ></i>
              <h3 className='about__item-heading'>Missiyamiz</h3>
              <p className='about__item-text'>
                Intellectual yoshlarni o`zlari orzu qilgan Oliy ta`lim
                muassasiga yetaklash!`
              </p>
            </li>
            <li className='about__item'>
              <i
                className='fa fa-external-link-square about__icon'
                aria-hidden='true'
              ></i>
              <h3 className='about__item-heading'>Tariximiz</h3>
              <p className='about__item-text'>
                Biz 5 yildan ortiq tarixga egamiz, 5 yillik davr mobaynida biz
                1000 lab abiturriyentlarga talaba bolishlariga yordam berdik
              </p>
            </li>
            <li className='about__item'>
              <i
                className='fa fa-graduation-cap about__icon'
                aria-hidden='true'
              ></i>
              <h3 className='about__item-heading'>Yo`nalish</h3>
              <p className='about__item-text'>
                tabiiy fanlar, aniq fanlar, gumanitar fanlar hamda til
                kurslarimiz mavjud. IT kurslatimiz ham yo`lga qoyilgan`
              </p>
            </li>
            <li className='about__item'>
              <i className='fa fa-check about__icon' aria-hidden='true'></i>
              <h3 className='about__item-heading'>Muvaffaqqiyat</h3>
              <p className='about__item-text'>
                Biz qisqa muddat ichida katta natijalarga erishdik.
                Muvaffaqqiyatdi abituriyentlar, ahil jamoa va xalq ishonchi
              </p>
            </li>
            <li className='about__item'>
              <i className='fa fa-star about__icon' aria-hidden='true'></i>
              <h3 className='about__item-heading'>Grantlar</h3>
              <p className='about__item-text'>
                Renessans o`quv markazi muntazam grantlar tashkil etadi.
                Grantlarimiz qisman yoki toliq holda tolovni tolab berishga
                qaratilgan
              </p>
            </li>
          </ul>

          <a className='about__link' href='/'>
            Biz bilan boglaning
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
