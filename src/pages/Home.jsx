import About from "../components/home/About";
import Features from "../components/home/Features";
import PopularClasses from "../components/home/PopularClasses";
import PopularInstructors from "../components/home/PopularInstructors";
import Slider from "../components/home/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <PopularClasses />
      <PopularInstructors />
      <About />
      <Features />
    </div>
  );
};

export default Home;
