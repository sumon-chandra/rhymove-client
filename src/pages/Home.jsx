import { Helmet } from "react-helmet-async";
import About from "../components/home/About";
import Features from "../components/home/Features";
import PopularClasses from "../components/home/PopularClasses";
import PopularInstructors from "../components/home/PopularInstructors";
import Slider from "../components/home/Slider";
import BestFeatures from "../components/home/BestFeatures";
import Banner from "../components/home/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Rhymove Dance Studio & School</title>
      </Helmet>
      {/* <Slider /> */}
      <Banner />
      <PopularClasses />
      <PopularInstructors />
      <About />
      <Features />
      <BestFeatures />
    </div>
  );
};

export default Home;
