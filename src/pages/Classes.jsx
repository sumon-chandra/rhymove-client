import { useEffect, useState } from "react";
import SectionTitle from "./../components/sections/SectionTitle";
import axios from "axios";
import ClassCard from "./../components/cards/ClassCard";
import { Helmet } from "react-helmet-async";
const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/classes").then(({ data }) => setClasses(data));
  }, []);
  return (
    <>
      <Helmet>
        <title>All Classes - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="section">
        <SectionTitle value="Our Classes!" />
        <div className="lg:grid grid-cols-3 gap-x-10 gap-y-20">
          {classes.map((item) => (
            <ClassCard key={item?._id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Classes;
