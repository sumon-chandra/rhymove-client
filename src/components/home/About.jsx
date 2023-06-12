import React from "react";
import arrow from "../../assets/slider/arrow.png";
import img from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { GiCandlebright } from "react-icons/gi";

const About = () => {
  return (
    <section className="section lg:grid grid-cols-2 gap-20">
      <div className="">
        <h3 className="lg:pb-16 pb-5 lg:text-[6rem] leading-[7rem] text-2xl font-K2D font-bold lg:text-left text-center">
          Sign Up for Classes
        </h3>
        <img
          src={img}
          alt=""
          className="lg:w-96 w-4/5 mx-auto rounded-full shadow-2xl"
        />
      </div>
      <div className="lg:text-xl mt-6 font-semibold text-gray-500 lg:leading-9 lg:mt-24">
        <p>
          Train under the best dance choreographers. Sign up for dance lessons
          only at Dance Studio and learn different dance styles from all over
          the world like tango, waltz, hiphop, ballet and more.
        </p>
        <ul className=" lg:mt-10 mt-6 lg:space-y-8 lg:text-2xl text-gray-700">
          <li className="flex gap-2 items-center">
            <GiCandlebright /> <span>Personalized Dance Class Schedules</span>
          </li>
          <li className="flex gap-2 items-center">
            <GiCandlebright />
            <span>Learn From 100+ Professional Dancers</span>
          </li>
          <li className="flex gap-2 items-center">
            <GiCandlebright />
            <span>Chance To Perform On Broadway</span>
          </li>
          <li className="flex gap-2 items-center">
            <GiCandlebright />
            <span>Attend Annual Dance Festivals</span>
          </li>
        </ul>
        <div className="flex items-end gap-2 lg:mt-14 mt-6">
          <img src={arrow} alt="" className="lg:w-20 w-6" />
          <Link
            to="/"
            className="btn btn-sm lg:btn-md rounded-lg lg:text-xl text-xs bg-priColor hover:bg-secColor font-bold font-K2D normal-case"
          >
            See more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
