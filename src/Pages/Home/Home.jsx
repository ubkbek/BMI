import "./Home.css";
import {
  About,
  Contacts,
  Courses,
  Footer,
  Header,
  Hero,
  Questions,
  Slider,
  Results,
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
      <Results />
      <Questions />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
