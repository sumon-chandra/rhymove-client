import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../sections/SectionTitle";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/popular-classes").then(({ data }) => {
      setClasses(data);
    });
  }, []);
  return (
    <section className="section">
      <SectionTitle value="Our Popular Classes!" />
      <div className="lg:grid grid-cols-3 gap-x-10 gap-y-20">
        {classes.map((item) => (
          <div
            key={item?._id}
            className="card rounded-none hover:shadow-2xl shadow-xl font-semibold lg:mt-0 mt-4"
          >
            <figure>
              <img
                src={item?.image}
                alt=""
                className="w-full h-60 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{item?.name}</h3>
              <p>Instructor: {item?.instructorName}</p>
              <p>
                <span className="font-bold">{item?.availableSeats} </span> seats
                available.
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
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
