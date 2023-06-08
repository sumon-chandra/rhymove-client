import React from "react";

const InstructorCard = ({ instructor, index }) => {
  return (
    <div
      className={`card rounded-t-[4rem] rounded-b-[4rem] shadow-2xl mx-auto w-60 ${
        index % 2 === 0 ? "lg:mt-36 mt-5" : "lg:mt-0 mt-5"
      }`}
    >
      <figure>
        <img
          src={instructor.image}
          alt={instructor.name}
          className="object-cover h-52 rounded-b-[4rem]"
        />
      </figure>

      <div className="ps-4 py-8 text-center">
        <h5 className="font-bold text-xl">{instructor.name}</h5>
        <p className="text-xs">Email: {instructor.email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
