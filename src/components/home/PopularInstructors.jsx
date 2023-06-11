import React, { useEffect, useState } from "react";
import SectionTitle from "./../sections/SectionTitle";
import axios from "axios";
import InstructorCard from "../cards/InstructorCard";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axios("https://rhymove-server.vercel.app/popular-instructors").then(
      ({ data }) => {
        setInstructors(data);
      }
    );
  }, []);
  return (
    <section className="section">
      <SectionTitle value="Our Popular Instructors!" />
      <div className="lg:grid grid-cols-3 place-items-center gap-x-10 gap-y-20">
        {instructors.map((instructor, index) => (
          <InstructorCard
            instructor={instructor}
            index={index}
            key={instructor._id}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularInstructors;
