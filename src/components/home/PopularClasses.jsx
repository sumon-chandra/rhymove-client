import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../sections/SectionTitle";
import ClassCard from "../cards/ClassCard";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios("https://rhymove-server.vercel.app/popular-classes").then(
      ({ data }) => {
        setClasses(data);
      }
    );
  }, []);
  return (
    <section className="section">
      <SectionTitle value="Our Popular Classes!" />
      <div className="lg:grid grid-cols-3 gap-x-10 gap-y-20">
        {classes.map((item, index) => (
          <ClassCard key={item?._id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
