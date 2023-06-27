import img from "../../assets/slider/slider-03.png";
import arrow from "../../assets/slider/arrow.png";
import { MdOutlineEventSeat, MdOutlineSportsGymnastics } from "react-icons/md";
import { GiGuitar } from "react-icons/gi";
import { useSpring, animated } from "@react-spring/web";

const Features = () => {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 50 },
  });
  return (
    <section className="section lg:grid grid-cols-2 items-center">
      <div className="lg:-mr-20 hidden lg:block">
        <img src={img} alt="" className="w-full" />
      </div>
      <div>
        <h3 className="lg:pb-16 pb-5 lg:text-[6rem] leading-[7rem] text-2xl font-K2D font-bold lg:text-left text-center">
          Get Moving With Us
        </h3>
        <div className="lg:space-y-24 space-y-20 relative">
          <div className="lg:flex items-end gap-10 lg:relative lg:right-24">
            <div className="lg:w-[30rem] glass px-9 py-14 shadow-2xl">
              <div className="-mt-24 p-2 text-7xl w-24 h-24 text-center bg-yellow-200 border-4 border-priColor rounded-full">
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
              className="rotate-180 w-20 hidden lg:block"
            />
          </div>
          <div className="lg:flex items-end gap-10 lg:relative right-0">
            <img
              src={arrow}
              alt=""
              className="rotate-90 w-20 hidden lg:block"
            />
            <div className="lg:w-[30rem] glass px-9 py-14 shadow-2xl">
              <div className="-mt-24 p-2 text-7xl w-24 h-24 text-center bg-yellow-200 border-4 border-priColor rounded-full">
                <GiGuitar />
              </div>
              <h4 className="my-3 text-2xl font-bold">Dance Choreography</h4>
              <p className="text-xl leading-9">
                Follow our dance choreography videos to learn different dance
                styles.
              </p>
            </div>
          </div>
          <div className="lg:flex items-end gap-10 lg:relative right-24">
            <div className="lg:w-[30rem] glass px-9 py-14 shadow-2xl">
              <div className="-mt-24 p-2 text-7xl w-24 h-24 text-center bg-yellow-200 border-4 border-priColor rounded-full">
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
