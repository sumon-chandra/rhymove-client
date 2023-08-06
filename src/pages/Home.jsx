import { Helmet } from "react-helmet-async";
import Features from "../components/home/Features";
import PopularClasses from "../components/home/PopularClasses";
import PopularInstructors from "../components/home/PopularInstructors";
import BestFeatures from "../components/home/BestFeatures";
import Banner from "../components/home/Banner";
import AboutClass from "../components/home/AboutClass";
import AboutUs from "../components/home/AboutUs";
import Gallery from "../components/home/Gallery";
import GetInTouch from "../components/home/GetInTouch";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Rhymove Dance Studio & School</title>
      </Helmet>
      <Banner />
      <AboutUs />
      <PopularClasses />
      <PopularInstructors />
      <AboutClass />
      <Features />
      <BestFeatures />
      <Gallery />
      <GetInTouch />
    </div>
  );
};

export default Home;
