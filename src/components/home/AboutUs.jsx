import React from "react";
import CountUp from "react-countup";
import { FaPlus } from "react-icons/fa";
import SectionTitle from "./../sections/SectionTitle";
import { FaShoePrints, FaSpa, FaSkating, FaWalking } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="section lg:mt-32">
      <section className="relative">
        <div className="absolute bottom-0 right-40 bg-blue-600 lg:w-96 h-[25em] z-0 blur-[200px]  lg:rotate-45"></div>
        <SectionTitle value="About us" />
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mx-auto text-xs lg:text-lg lg:font-semibold lg:-mt-8 lg:w-4/5 lg:text-center"
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <div className="grid-cols-2 mt-6 space-y-6 lg:mt-20 gap-x-10 gap-y-20 lg:grid lg:space-y-0">
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="about-cart group"
          >
            <div className="about-icon-container group-hover:bg-white">
              <FaShoePrints className="text-3xl text-white duration-700 group-hover:text-priColor" />
            </div>
            <div>
              <h4 className="pb-2 text-xl font-bold text-white">
                Break Dance Stunt Coaching
              </h4>
              <p className="text-white">
                On the other hand, we denounce with On the other hand, we
                denounce with On the other hand, we denounce...
              </p>
            </div>
          </div>
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="about-cart group"
          >
            <div className="about-icon-container group-hover:bg-white">
              <FaSpa className="text-3xl text-white duration-700 group-hover:text-priColor" />
            </div>
            <div>
              <h4 className="pb-2 text-xl font-bold text-white">
                Ballet Dance Choreographer
              </h4>
              <p className="text-white">
                On the other hand, we denounce with On the other hand, we
                denounce with On the other hand, we denounce...
              </p>
            </div>
          </div>
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="about-cart group"
          >
            <div className="about-icon-container group-hover:bg-white">
              <FaSkating className="text-3xl text-white duration-700 group-hover:text-priColor" />
            </div>
            <div>
              <h4 className="pb-2 text-xl font-bold text-white">
                Skill Based Coaching
              </h4>
              <p className="text-white">
                On the other hand, we denounce with On the other hand, we
                denounce with On the other hand, we denounce...
              </p>
            </div>
          </div>
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="about-cart group"
          >
            <div className="about-icon-container group-hover:bg-white">
              <FaWalking className="text-3xl text-white duration-700 group-hover:text-priColor" />
            </div>
            <div>
              <h4 className="pb-2 text-xl font-bold text-white">
                Experinced Dance Master
              </h4>
              <p className="text-white">
                On the other hand, we denounce with On the other hand, we
                denounce with On the other hand, we denounce...
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        data-aos-duration="1000"
        data-aos="fade-up"
        className="z-30 items-center justify-around p-10 mt-10 space-y-10 bg-white rounded-lg shadow-xl lg:mt-20 font-inter lg:flex lg:space-y-0"
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
    </div>
  );
};

export default AboutUs;
