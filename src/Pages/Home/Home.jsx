import "./Home.css";
import { About, Header, Hero, Slider } from "../../Components";

const Home = () => {
  return (
    <div>
      <div className='wrapper__bg'>
        <Header />
        <Hero />
      </div>

      <About />
      <Slider />
    </div>
  );
};

export default Home;
