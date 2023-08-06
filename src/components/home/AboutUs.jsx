import React from "react";
import SectionTitle from "./../sections/SectionTitle";
import { FaShoePrints, FaSpa, FaSkating, FaWalking } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="relative section lg:mt-32">
      <div className="absolute bottom-0 right-40 bg-blue-600 lg:w-96 h-[25em] z-1 blur-[200px]  lg:rotate-45"></div>
      <SectionTitle value="About us" />
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className="mx-auto text-xs lg:text-lg lg:font-semibold lg:-mt-8 lg:w-4/5 lg:text-center"
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
      </p>
      <div className="grid-cols-2 mt-6 space-y-6 lg:mt-20 gap-x-10 gap-y-20 lg:grid lg:space-y-0">
        <div
          data-aos-duration="1000"
          data-aos="fade-down-right"
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
              On the other hand, we denounce with On the other hand, we denounce
              with On the other hand, we denounce...
            </p>
          </div>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-down-left"
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
              On the other hand, we denounce with On the other hand, we denounce
              with On the other hand, we denounce...
            </p>
          </div>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-up-right"
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
              On the other hand, we denounce with On the other hand, we denounce
              with On the other hand, we denounce...
            </p>
          </div>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-up-left"
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
              On the other hand, we denounce with On the other hand, we denounce
              with On the other hand, we denounce...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
