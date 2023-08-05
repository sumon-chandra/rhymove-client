import { Helmet } from "react-helmet-async";
import Features from "../components/home/Features";
import PopularClasses from "../components/home/PopularClasses";
import PopularInstructors from "../components/home/PopularInstructors";
// import Slider from "../components/home/Slider";
import BestFeatures from "../components/home/BestFeatures";
import Banner from "../components/home/Banner";
import AboutClass from "../components/home/AboutClass";
import AboutUs from "../components/home/AboutUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Rhymove Dance Studio & School</title>
      </Helmet>
      {/* <Slider /> */}
      <Banner />
      <AboutUs />
      <PopularClasses />
      <PopularInstructors />
      <AboutClass />
      <Features />
      <BestFeatures />
    </div>
  );
};

export default Home;
