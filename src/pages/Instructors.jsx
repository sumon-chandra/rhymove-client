import { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "./../components/sections/SectionTitle";
import InstructorCard from "../components/cards/InstructorCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/instructors").then(({ data }) =>
      setInstructors(data)
    );
  }, []);
  return (
    <section className="section">
      <SectionTitle value="Our Instructors!" />
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

export default Instructors;
