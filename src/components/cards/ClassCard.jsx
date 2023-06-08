import React from "react";

const ClassCard = ({ item }) => {
  return (
    <div className="card rounded-none hover:shadow-2xl shadow-xl font-semibold lg:mt-0 mt-4">
      <figure>
        <img src={item?.image} alt="" className="w-full h-60 object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{item?.name}</h3>
        <p>Instructor: {item?.instructorName}</p>
        <p>
          <span className="font-bold">{item?.enrolledStudents} </span> students
          are already enrolled.
        </p>
        <p>
          Price:
          <span className="font-bold"> ${item?.price}</span>
        </p>
        <button className="btn-sm bg-priColor w-1/2 mx-auto text-white">
          Select the Class
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
