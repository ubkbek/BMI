import "./Home.css";
import {
  About,
  Courses,
  Footer,
  Header,
  Hero,
  News,
  Slider,
} from "../../Components";

const Home = () => {
  return (
    <div>
      <div className='wrapper__bg'>
        <Header />
        <Hero />
      </div>

      <About />
      <Slider />
      <Courses />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
