import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import slider1 from "../../assets/slider/slider-01.png";
import slider2 from "../../assets/slider/slider-02.png";
import slider3 from "../../assets/slider/slider-03.png";
import arrow from "../../assets/slider/arrow.png";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper font-K2D"
      >
        <SwiperSlide>
          <div className="flex justify-between items-center lg:px-32 px-4">
            <div className="w-1/2">
              <h2 className="lg:text-[130px] lg:leading-[150px] font-bold">
                Best <br /> Dance <br /> Studio
              </h2>
              <div className="flex items-end gap-2 lg:mt-14 mt-6">
                <img src={arrow} alt="" className="lg:w-20 w-6" />
                <button className="btn btn-sm lg:btn-md rounded-lg lg:text-xl text-xs bg-priColor hover:bg-secColor font-bold font-K2D normal-case">
                  Watch Tutorials
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <img src={slider1} alt="" className="ms-auto w-full" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-center lg:px-32 px-4">
            <div className="w-1/2">
              <h2 className="lg:text-[130px] lg:leading-[150px] font-bold">
                World <br /> Class <br /> Instructors
              </h2>
              <div className="flex items-end gap-2 lg:mt-14 mt-6">
                <img src={arrow} alt="" className="lg:w-20 w-6" />
                <button className="btn btn-sm lg:btn-md rounded-lg lg:text-xl text-xs bg-priColor hover:bg-secColor font-bold font-K2D normal-case">
                  See More Details
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <img src={slider2} alt="" className="ms-auto w-full" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-center lg:px-32 px-4">
            <div className="w-1/2">
              <h2 className="lg:text-[130px] lg:leading-[150px] font-bold">
                One to <br /> One <br /> Mentoring!
              </h2>
              <div className="flex items-end gap-2 lg:mt-14 mt-6">
                <img src={arrow} alt="" className="lg:w-20 w-6" />
                <button className="btn btn-sm lg:btn-md rounded-lg lg:text-xl text-xs bg-priColor hover:bg-secColor font-bold font-K2D normal-case">
                  Join Now
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <img src={slider3} alt="" className="ms-auto w-full" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
