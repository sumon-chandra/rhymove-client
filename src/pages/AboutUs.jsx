import { Helmet } from "react-helmet-async";
import CountUp from "react-countup";
import { FaPlus } from "react-icons/fa";
import SectionTitle from "../components/sections/SectionTitle";
import about1 from "../assets/about/about-1.jpg";
import about2 from "../assets/about/about-2.jpg";
import aboutOverlay from "../assets/about/about-overlay.png";
import PopularInstructors from "../components/home/PopularInstructors";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Rhymove Dance Studio & School</title>
      </Helmet>
      <main className="section">
        <SectionTitle value="About Us!" />
        <p
          data-aos-duration="1000"
          data-aos="fade-up"
          className="mx-auto text-xs text-center lg:-mt-12 lg:text-lg lg:w-3/4"
        >
          We're committed to guiding you on a special dance journey with
          tailored classes and instructors
        </p>
        <section className="relative items-center justify-center gap-20 mt-10 space-y-10 lg:flex lg:mt-20 lg:space-y-0">
          <figure
            data-aos-duration="2000"
            data-aos="zoom-in"
            className="z-10 lg:w-1/2"
          >
            <img src={about1} alt="" className="rounded-lg" />
            <img
              src={aboutOverlay}
              className="absolute hidden lg:block -z-10 opacity-20 -left-10 -top-10 w-52"
              alt=""
            />
          </figure>
          <div data-aos-duration="2000" data-aos="zoom-in" className="lg:w-1/2">
            <p className="text-lg font-bold uppercase lg:text-2xl text-priColor">
              Who we are
            </p>
            <h3 className="pb-4 font-black lg:w-3/4 lg:text-3xl">
              BEST DANCE SCHOOL & STUDIO SINCE 1992
            </h3>
            <p>
              This also meant we needed to provide a learning environment run by
              experienced and successful coaches. However, our most important
              goal was to create a welcoming atmosphere and community in which
              everyone feels a sense of belonging.
            </p>
          </div>
        </section>
        <section
          data-aos-duration="1000"
          data-aos="fade-up"
          className="items-center justify-around p-10 mt-10 space-y-10 bg-white rounded-lg shadow-xl lg:mt-32 font-inter lg:flex lg:space-y-0"
        >
          <div className="relative text-center">
            <CountUp
              className="font-black text-7xl font-K2D"
              start={0}
              end={200}
              duration={2.5}
            />
            <FaPlus className="absolute top-0 text-2xl text-red-500 right-8 lg:right-1" />
            <p className="text-3xl font-bold text-gray-500">Dance Class</p>
          </div>
          <div className="relative text-center">
            <CountUp
              className="font-black text-7xl font-K2D"
              start={0}
              end={70}
              duration={2.5}
            />
            <FaPlus className="absolute text-2xl text-red-500 top-1 right-14 lg:right-3" />
            <p className="text-3xl font-bold text-gray-500">Instructors</p>
          </div>
          <div className="relative text-center">
            <CountUp
              className="font-black text-7xl font-K2D"
              start={0}
              end={30}
              duration={2.5}
            />
            <FaPlus className="absolute text-2xl text-red-500 top-1 right-14 lg:right-6" />
            <p className="text-3xl font-bold text-gray-500">Total Branch</p>
          </div>
          <div className="relative text-center">
            <CountUp
              className="font-black text-7xl font-K2D"
              start={0}
              end={340}
              duration={2.5}
            />
            <FaPlus className="absolute top-0 text-2xl text-red-500 right-8 lg:right-1" />
            <p className="text-3xl font-bold text-gray-500">Dance Class</p>
          </div>
        </section>
        <section className="relative items-center justify-center gap-20 mt-10 space-y-10 lg:space-y-0 lg:flex lg:mt-32">
          <div data-aos-duration="1000" data-aos="fade-up" className="lg:w-1/2">
            <p className="text-lg font-bold uppercase lg:text-2xl text-priColor">
              Why choose us
            </p>
            <h3 className="pb-4 font-black lg:w-3/4 lg:text-3xl">
              OVER 10 YEARS IN THE DANCING SCHOOL
            </h3>
            <p>
              In molestie malesuada dolor, in dignissim enim imperdiet id.
              Integer vel tellus justo. Mauris finibus ante in elit pellentesque
              molestie. Maecenas malesuada neque ac tempus vulputate. Morbi
              mollis eleifend tincidunt. Etiam mi sapien, hendrerit sit amet
              diam euismod, tempor ullamcorper libero. Quisque tempus urna arcu.
            </p>
          </div>
          <figure
            data-aos-duration="700"
            data-aos="fade-up"
            className="z-10 lg:w-1/2"
          >
            <img src={about2} alt="" className="rounded-lg" />
            <img
              src={aboutOverlay}
              className="absolute hidden lg:block -z-10 opacity-20 -right-10 -top-10 w-52"
              alt=""
            />
          </figure>
        </section>
        <PopularInstructors />
      </main>
    </>
  );
};

export default AboutUs;
