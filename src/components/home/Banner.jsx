import React from "react";
import shape from "../../assets/shape.png";
import shape2 from "../../assets/shape2.jpg";
import bannerImg from "../../assets/img.png";
import effect1 from "../../assets/effect1.png";
import effect2 from "../../assets/effect2.png";

const Banner = () => {
  return (
    <section className="lg:h-[80vh] w-full font-K2D relative select-none">
      <img
        className="absolute hidden lg:block top-[10%] -left-72 blur-[200px] rotate-12"
        src={shape}
        alt=""
      />
      <img
        className="lg:w-1/2 hidden lg:block absolute top-[10%] rotate-12 right-[10%] blur-[140px] z-1"
        src={shape2}
        alt=""
      />
      <img
        className="absolute z-10 hidden lg:block top-8 right-8"
        src={effect1}
        alt=""
      />
      <img
        className="absolute hidden w-32 rotate-45 opacity-20 lg:block top-8 left-8"
        src={effect2}
        alt=""
      />
      <div className="items-center justify-center h-full p-6 mt-8 lg:flex lg:mt-0">
        <h3
          data-aos="zoom-in-right"
          data-aos-duration="2000"
          className="lg:text-[14em] text-5xl text-center lg:text-left uppercase font-bold lg:w-1/2 banner-title"
        >
          Let's Dance
        </h3>
        <figure
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          className="z-10 -mt-6 lg:mt-20 lg:w-1/2"
        >
          <img className="lg:w-[70%] ms-auto" src={bannerImg} alt="" />
        </figure>
      </div>
    </section>
  );
};

export default Banner;
