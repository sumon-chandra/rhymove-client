import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sections/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const ManageClassCard = ({ item }) => {
  return (
    <div
      className={
        item?.availableSeats === 0
          ? "border-2 border-red-500 bg-[#fa00002b] card rounded-none hover:shadow-2xl shadow-xl font-semibold lg:mt-0 mt-4"
          : `card border-0 rounded-none hover:shadow-2xl shadow-xl font-semibold lg:mt-0 mt-4`
      }
    >
      <figure>
        <img src={item?.image} alt="" className="w-full h-60 object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{item?.name}</h3>
        <p>Instructor: {item?.instructorName}</p>
        <p>
          <span className="font-bold">{item?.enrolledStudents} </span> students
          are enrolled.
        </p>
        <p>
          {item?.availableSeats === 0 ? (
            <span className="text-red-500">Seats not available right now!</span>
          ) : (
            <>
              <span className="font-bold">{item?.availableSeats} </span> seats
              are available.
            </>
          )}
        </p>
        <p>
          Price:
          <span className="font-bold"> ${item?.price}</span>
        </p>
        <div className="flex justify-between gap-4 items-center pt-6">
          <button
            disabled={item?.status === "denied" || item?.status === "approved"}
            className="btn btn-sm rounded-none normal-case text-white bg-green-600 hover:bg-green-500"
          >
            Approved
          </button>
          <button className="btn btn-sm rounded-none normal-case text-white bg-red-600 hover:bg-red-500">
            Deny
          </button>
          <button className="btn btn-sm rounded-none normal-case text-white bg-priColor hover:bg-secColor">
            Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["ManageClasses"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/classes-for-admin?email=${user?.email}`
      );
      return res.data;
    },
  });
  return (
    <>
      <Helmet>
        <title>Manage Classes - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="section lg:pb-32 pb-7">
        <SectionTitle value="Manage All Classes!" />
        <div className="lg:grid grid-cols-3 gap-x-10 gap-y-20">
          {classes.map((item) => (
            <ManageClassCard key={item?._id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ManageClasses;
