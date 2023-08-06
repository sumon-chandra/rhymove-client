import galleryImg from "../../assets/gallery-img.png";
import SectionTitle from "./../sections/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// import ModalImage from "react-modal-image";
// import ImgModal from "../ImgModal";

const carousels = [
  "https://i.ibb.co/Fz52wf0/class-6.jpg",
  "https://i.ibb.co/4mGyNpz/class-5.jpg",
  "https://i.ibb.co/8PpMXV7/class-4.jpg",
  "https://i.ibb.co/L67H32Y/class-3.jpg",
  "https://i.ibb.co/K7kzqgC/class-1.jpg",
  "https://i.ibb.co/2k27nY2/class-2.jpg",
];

const GalleryCard = () => {
  const [selectedImg, setSelectedImg] = useState("");
  const handleSelectImg = (src) => {
    setSelectedImg(src);
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="800" className="relative">
        <div className="swiper-button image-swiper-button-next">
          <IoIosArrowForward />
        </div>
        <div className="swiper-button image-swiper-button-prev">
          <IoIosArrowBack />
        </div>
        <Swiper
          spaceBetween={40}
          breakpoints={{
            640: {
              slidesPerView: 1,
              grid: { rows: 1 },
            },
            768: {
              slidesPerView: 1,
              grid: { rows: 1 },
            },
            1024: {
              slidesPerView: 2,
              grid: { rows: 2 },
            },
          }}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          modules={[Grid, Navigation]}
          className="imgModalContainer lg:h-[500px]"
        >
          <div className="">
            {carousels.map((slide) => (
              <SwiperSlide key={slide}>
                <label
                  htmlFor="imgModal"
                  className="cursor-pointer"
                  onClick={() => handleSelectImg(slide)}
                >
                  <img
                    src={slide}
                    alt=""
                    className="w-full h-full rounded-lg"
                  />
                </label>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      {/* !!!!!!!!!!!! Image Modal !!!!!!!!!!!!!! */}
      <input type="checkbox" id="imgModal" className="modal-toggle" />
      <div className="z-50 modal">
        <div className="p-0 m-0 modal-box">
          <img src={selectedImg} alt="" />
        </div>
        <label className="modal-backdrop" htmlFor="imgModal"></label>
      </div>
    </>
  );
};

const Gallery = () => {
  return (
    <section className="relative section">
      <SectionTitle value="Our Gallery" />
      <div className="relative items-start justify-between space-y-10 lg:flex lg:space-y-0">
        <div className="z-20 m-4 lg:w-1/2">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="pb-3 lg:w-3/4 lg:pb-0"
          >
            Explore our Gallery, Dance is a performing art form consisting of
            purposefully selected sequences of human movement.
          </p>
          <GalleryCard />
        </div>
        <figure data-aos="fade-up" data-aos-duration="1000" className="z-10">
          <img
            src={galleryImg}
            alt=""
            className="w-1/2 mx-auto gallery-img-flip lg:w-full"
          />
        </figure>
        {/* !!!!!!! Background Overlay !!!!!!! */}
        <div className="absolute lg:w-44 w-20 h-[60em] lg:rotate-45 left-[50%] z-[1] bg-yellow-500 blur-[200px]"></div>
      </div>
    </section>
  );
};

export default Gallery;
