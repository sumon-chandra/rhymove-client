import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";

const InstructorCard = ({ instructor, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={`${index % 2 === 0 ? "1400" : "500"}`}
      className={`card rounded-[4rem] group shadow-2xl mx-auto w-60 relative z-10 ${
        index % 2 === 0 ? "lg:mt-36 mt-5" : "lg:mt-0 mt-5"
      }`}
    >
      <figure>
        <img
          src={instructor.image}
          alt={instructor.name}
          className="object-cover h-52 rounded-b-[4rem] z-10"
        />
      </figure>

      <div className="w-full lg:pt-20 lg:space-y-1 pb-4 text-center z-0 lg:absolute rounded-b-[4rem] rounded-t-3xl lg:bg-white top-8 right-0 lg:group-hover:translate-y-24 duration-700 lg:shadow-lg">
        <h5 className="font-bold">{instructor.name}</h5>
        <p className="text-xs">{instructor.email}</p>
        <div className="flex justify-center gap-3">
          <FaFacebook className="cursor-pointer hover:text-priColor" />
          <FaInstagramSquare className="cursor-pointer hover:text-priColor" />
          <FaYoutube className="cursor-pointer hover:text-priColor" />
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
