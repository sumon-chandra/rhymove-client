import { IoMdRibbon, IoIosVideocam, IoMdLocate } from "react-icons/io";
const BestFeatures = () => {
  return (
    <section className="bg-priColor mx-auto px-4 lg:px-0 lg:mt-20 mt-8 lg:py-36 py-16">
      <h3 className="lg:pb-16 pb-5 lg:text-5xl text-2xl font-K2D font-bold text-center text-white">
        We provide the best experience
      </h3>
      <div className="lg:flex items-center justify-between gap-10 lg:w-1200 mx-auto lg:space-y-0 space-y-4">
        <div className="flex flex-col items-center lg:gap-4 text-center">
          <IoMdLocate className="text-white text-7xl font-bold" />
          <h3 className="text-white lg:text-3xl text-xl font-bold">
            Perfect location
          </h3>
          <p>
            We have several convenient locations in different parts of the city.
          </p>
        </div>
        <div className="flex flex-col items-center lg:gap-4 text-center">
          <IoMdRibbon className="text-white text-7xl font-bold" />
          <h3 className="text-white lg:text-3xl text-xl font-bold">
            Best Team
          </h3>
          <p>
            Our team consists of the best specialists who know their job
            perfectly.
          </p>
        </div>
        <div className="flex flex-col items-center lg:gap-4 text-center">
          <IoIosVideocam className="text-white text-7xl font-bold" />
          <h3 className="text-white lg:text-3xl text-xl font-bold">
            Video Classes
          </h3>
          <p>Our video tutorials are available on our website. </p>
        </div>
      </div>
    </section>
  );
};

export default BestFeatures;
