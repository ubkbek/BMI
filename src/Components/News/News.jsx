import { useEffect, useState } from "react";
import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9090/public_news")
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
      });
  }, [news]);
  return (
    <div className='news' id='news'>
      <div className='container news__container'>
        <h2 className='news__heading'>Yangiliklar</h2>
        <div>
          <div className='about__devider'></div>
        </div>

        <ul className='news__list'>
          {news?.map((e) => (
            <li key={e.id} className='news__item'>
              <img src={e.photo} alt={e.title} width={300} height={200} />
              <div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
