import React, { useEffect, useState } from "react";
import SectionTitle from "./../sections/SectionTitle";
import axios from "axios";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/popular-instructors").then(({ data }) => {
      setInstructors(data);
    });
  }, []);
  return (
    <section className="section">
      <SectionTitle value="Our Popular Instructors!" />
      <div className="lg:grid grid-cols-3 place-items-center gap-x-10 gap-y-20">
        {instructors.map((instructor, index) => (
          <div
            key={instructor._id}
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
        ))}
      </div>
    </section>
  );
};

export default PopularInstructors;
