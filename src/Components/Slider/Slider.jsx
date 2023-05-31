import { useState, useEffect } from "react";
import "./Slider.css";
import ubkImg from "./../../assets/ubk.jpg";
import baxtiyorImg from "'./../../assets/baxa.jpg'";
import javlonImg from "./../../assets/javlon.JPG";
import elyorImg from "../../assets/elyor.JPG";
import jamolImg from "./../../assets/jamol.JPG";
import axtamImg from "./../../assets/axtam.JPG";

const Slider = () => {
  const data = [
    {
      id: 1,
      name: "Baxtiyor Ergashev",
      special: "Oliy toifali tarix fani ustozi",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a placeat ab sint nostrum, perspiciatis ducimus et soluta minus perferendis ullam modi enim asperiores ut, voluptatem cumque, dignissimos nam quo.",
      image: baxtiyorImg,
    },
    {
      id: 2,
      name: "Ulugbek Jovliyev",
      special: "oliy toifali matematika kursi  ustozi",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a placeat ab sint nostrum, perspiciatis ducimus et soluta minus perferendis ullam modi enim asperiores ut, voluptatem cumque, dignissimos nam quo.",
      image: ubkImg,
    },
    {
      id: 3,
      name: "Javlonbek Yunusov",
      special: "Oliy toifali ona-tili adabiyoti ustozi",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a placeat ab sint nostrum, perspiciatis ducimus et soluta minus perferendis ullam modi enim asperiores ut, voluptatem cumque, dignissimos nam quo.",
      image: javlonImg,
    },
    {
      id: 4,
      name: "Elyormen Xotamaliyev",
      special: "Kimyo fani ustozi",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a placeat ab sint nostrum, perspiciatis ducimus et soluta minus perferendis ullam modi enim asperiores ut, voluptatem cumque, dignissimos nam quo.",
      image: elyorImg,
    },
    {
      id: 5,
      name: "Axtam Ramazonov",
      special: "Fizika fani ustozi",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a placeat ab sint nostrum, perspiciatis ducimus et soluta minus perferendis ullam modi enim asperiores ut, voluptatem cumque, dignissimos nam quo.",
      image: axtamImg,
    },
    {
      id: 6,
      name: "Jamoliddin Satimov",
      special: "Biologoiya fani ustozi",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a placeat ab sint nostrum, perspiciatis ducimus et soluta minus perferendis ullam modi enim asperiores ut, voluptatem cumque, dignissimos nam quo.",
      image: jamolImg,
    },
  ];
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className='section container'>
      <h2 className='slider__header'>Ustozlarimiz</h2>

      <div className='d-flex justify-content-center'>
        <div className='about__devider'></div>
      </div>

      <div className='section-center'>
        {people.map((item, indexPeople) => {
          const { id, image, name, special, info } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />

              <div>
                <h4>{name}</h4>
                <p className='title'>{special}</p>
                <p className='text abs'>{info}</p>
              </div>
            </article>
          );
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <i className='fa fa-arrow-left' />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <i className='fa fa-arrow-right' />
        </button>
      </div>

      <div className='slider__points'>
        {people.map((item, k) => {
          return (
            <li
              onClick={() => setIndex(k)}
              className={k == index ? "slider__point checked" : "slider__point"}
              key={item}
            ></li>
          );
        })}
      </div>
    </section>
  );
};

export default Slider;
