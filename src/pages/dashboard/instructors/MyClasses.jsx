import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "./../../../components/sections/SectionTitle";
const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [selectedItem, setSelectedItem] = useState(null);
  const { user } = useAuth();
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["MyClasses"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-classes?email=${user?.email}`);
      return res.data;
    },
  });
  // TODO: Update the enrolled and available seat in class ,,,,,,,,,, Feedback btn
  return (
    <>
      <Helmet>
        <title>My Classes - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="section">
        <SectionTitle value="My Classes!" />
        <div className="lg:grid grid-cols-2 gap-20 lg:pb-32 pb-6 font-inter font-semibold">
          {classes.map((item) => (
            <div
              key={item?._id}
              className="glass rounded-3xl lg:flex flex-row shadow-2xl p-4 lg:mt-0 mt-5"
            >
              <figure className="lg:w-[40%]">
                <img
                  src={item?.image}
                  alt=""
                  className="w-full h-full object-cover rounded-3xl"
                />
              </figure>
              <div className="card-body lg:w-[60%]">
                <h3 className="card-title">{item?.name}</h3>
                <p>Available Seat- {item?.availableSeats}</p>
                <p>Enrolled Student- {item?.enrolledStudents}</p>
                <p>Price- ${item?.price}</p>
                <p
                  className={`${item?.status === "denied" && "text-red-600"} ${
                    item?.status === "approved" && "text-green-600"
                  } text-priColor font-bold capitalize italic`}
                >
                  {item?.status}
                </p>
                <div
                  className={`flex items-center ${
                    item?.feedback ? "justify-between" : "justify-end"
                  }`}
                >
                  {item?.feedback && (
                    <label
                      htmlFor="showFeedbackModal"
                      onClick={() => setSelectedItem(item)}
                      className="btn btn-sm normal-case text-xs"
                    >
                      Feedback
                    </label>
                  )}
                  <button className="btn btn-sm normal-case text-xs">
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ********** Modal for display feedback ********** */}
      <input type="checkbox" id="showFeedbackModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{selectedItem?.name}</h3>
          <p className="border-l-4 mx-2 my-5 text-gray-500 ps-2">
            {selectedItem?.feedback}
          </p>
          <div className="modal-action">
            <label
              htmlFor="showFeedbackModal"
              className="btn btn-neutral btn-sm btn-circle"
            >
              X
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyClasses;
