import img from "../../assets/slider/slider-03.png";
import arrow from "../../assets/slider/arrow.png";
import { MdOutlineEventSeat, MdOutlineSportsGymnastics } from "react-icons/md";
import { GiGuitar } from "react-icons/gi";

const Features = () => {
  return (
    <section className="items-center grid-cols-2 section lg:grid">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="hidden lg:-mr-20 lg:block"
      >
        <img src={img} alt="" className="w-full" />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <h3 className="lg:pb-16 pb-5 lg:text-[6rem] leading-[7rem] text-2xl font-K2D font-bold lg:text-left text-center">
          Get Moving With Us
        </h3>
        <div className="relative space-y-20 lg:space-y-24">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="items-end gap-10 lg:flex lg:relative lg:right-24"
          >
            <div className="lg:w-[30rem] glass px-9 py-14 shadow-2xl rounded-lg">
              <div className="w-24 h-24 p-2 -mt-24 text-center bg-yellow-200 border-4 rounded-full text-7xl border-priColor">
                <MdOutlineEventSeat />
              </div>
              <h4 className="my-3 text-2xl font-bold">Join Our Class</h4>
              <p className="text-xl leading-9">
                Learn from the best dance choreographers. Sign up for our dance
                lessons today.
              </p>
            </div>
            <img
              src={arrow}
              alt=""
              className="hidden w-20 rotate-180 lg:block"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="right-0 items-end gap-10 lg:flex lg:relative"
          >
            <img
              src={arrow}
              alt=""
              className="hidden w-20 rotate-90 lg:block"
            />
            <div className="lg:w-[30rem] glass px-9 py-14 shadow-2xl rounded-lg">
              <div className="w-24 h-24 p-2 -mt-24 text-center bg-yellow-200 border-4 rounded-full text-7xl border-priColor">
                <GiGuitar />
              </div>
              <h4 className="my-3 text-2xl font-bold">Dance Choreography</h4>
              <p className="text-xl leading-9">
                Follow our dance choreography videos to learn different dance
                styles.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="items-end gap-10 lg:flex lg:relative right-24"
          >
            <div className="lg:w-[30rem] glass px-9 py-14 shadow-2xl rounded-lg">
              <div className="w-24 h-24 p-2 -mt-24 text-center bg-yellow-200 border-4 rounded-full text-7xl border-priColor">
                <MdOutlineSportsGymnastics />
              </div>
              <h4 className="my-3 text-2xl font-bold">Perform Onstage</h4>
              <p className="text-xl leading-9">
                Perform onstage at our annual dance festival and get a chance to
                garner worldwide recognition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
