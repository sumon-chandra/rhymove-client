import React from "react";
import arrow from "../../assets/slider/arrow.png";
import img from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { GiCandlebright } from "react-icons/gi";

const AboutClass = () => {
  return (
    <section className="grid-cols-2 gap-20 section lg:grid">
      <div className="">
        <h3
          data-aos="fade-up"
          data-aos-duration="1000"
          className="lg:pb-16 pb-5 lg:text-[6rem] leading-[7rem] text-2xl font-K2D font-bold lg:text-left text-center"
        >
          Sign Up for Classes
        </h3>
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          src={img}
          alt=""
          className="w-4/5 mx-auto rounded-full shadow-2xl lg:w-96"
        />
      </div>
      <div className="mt-6 font-semibold text-gray-500 lg:text-xl lg:leading-9 lg:mt-24">
        <p data-aos="fade-up" data-aos-duration="700">
          Train under the best dance choreographers. Sign up for dance lessons
          only at Dance Studio and learn different dance styles from all over
          the world like tango, waltz, hiphop, ballet and more.
        </p>
        <ul
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mt-6 text-gray-700 lg:mt-10 lg:space-y-8 lg:text-2xl"
        >
          <li className="flex items-center gap-2">
            <GiCandlebright /> <span>Personalized Dance Class Schedules</span>
          </li>
          <li className="flex items-center gap-2">
            <GiCandlebright />
            <span>Learn From 100+ Professional Dancers</span>
          </li>
          <li className="flex items-center gap-2">
            <GiCandlebright />
            <span>Chance To Perform On Broadway</span>
          </li>
          <li className="flex items-center gap-2">
            <GiCandlebright />
            <span>Attend Annual Dance Festivals</span>
          </li>
        </ul>
        <button
          data-aos="fade-up"
          data-aos-duration="800"
          className="mt-6 my-btn"
        >
          <Link to="/">See more</Link>
        </button>
      </div>
    </section>
  );
};

export default AboutClass;
