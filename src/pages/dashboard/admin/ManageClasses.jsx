import React, { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sections/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import EmptyFile from "../../../components/sections/EmptyFile";

const ManageClassCard = ({ item, setClickedItem, refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const handleApproval = (selectedItem) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FFA500",
      cancelButtonColor: "#d33",
      confirmButtonText: "Approve",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/class-approved/${selectedItem?._id}`)
          .then(({ data }) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire("Approved", "", "success");
            }
          });
      }
    });
  };
  const handleDenied = (selectedItem) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FFA500",
      cancelButtonColor: "#d33",
      confirmButtonText: "Deny",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/class-denied/${selectedItem?._id}`)
          .then(({ data }) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire("Denied", "", "success");
            }
          });
      }
    });
  };
  return (
    <div
      className={
        item?.availableSeats === 0
          ? "border-2 border-red-500 bg-[#fa00002b] card rounded-none hover:shadow-2xl shadow-xl font-semibold lg:mt-0 mt-4"
          : `card border-0 rounded-none hover:shadow-2xl shadow-xl font-semibold lg:mt-0 mt-4`
      }
    >
      <figure>
        <img src={item?.image} alt="" className="object-cover w-full h-60" />
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
        <div className="flex items-center justify-between gap-4 pt-6">
          <button
            onClick={() => handleApproval(item)}
            disabled={item?.status === "denied" || item?.status === "approved"}
            className="text-white normal-case bg-green-600 border-0 rounded-none btn btn-sm hover:bg-green-500"
          >
            Approve
          </button>
          <button
            onClick={() => handleDenied(item)}
            disabled={item?.status === "denied" || item?.status === "approved"}
            className="text-white normal-case bg-red-600 border-0 rounded-none btn btn-sm hover:bg-red-500"
          >
            Deny
          </button>
          <label
            htmlFor="feedbackModal"
            onClick={() => setClickedItem(item)}
            className="text-white normal-case border-0 rounded-none btn btn-sm bg-priColor hover:bg-secColor"
          >
            Feedback
          </label>
        </div>
      </div>
    </div>
  );
};

const ManageClasses = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [clickedItem, setClickedItem] = useState({});
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
  const handleSubmitFeedback = ({ feedback }) => {
    const feedbackInfo = {
      feedback,
      feedbackWriter: user?.displayName,
    };
    axiosSecure
      .patch(`/class-feedback/${clickedItem?._id}`, feedbackInfo)
      .then(({ data }) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your feedback has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };
  return (
    <>
      <Helmet>
        <title>Manage Classes - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="section lg:pb-32 pb-7">
        <SectionTitle value="Manage All Classes!" />
        {classes?.length === 0 ? (
          <EmptyFile />
        ) : isLoading ? (
          <PropagateLoader color="#FFA500" size={30} />
        ) : (
          <div className="grid-cols-3 lg:grid gap-x-10 gap-y-20">
            {classes.map((item) => (
              <ManageClassCard
                key={item?._id}
                item={item}
                refetch={refetch}
                setClickedItem={setClickedItem}
              />
            ))}
          </div>
        )}
      </section>

      {/* *************** Feedback modal ********* */}
      <input type="checkbox" id="feedbackModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="py-2 text-lg font-bold text-center">
            {clickedItem?.name}!
          </h3>
          <form onSubmit={handleSubmit(handleSubmitFeedback)}>
            <textarea
              placeholder="Write your feedback"
              {...register("feedback", { required: true })}
              className="w-full textarea textarea-bordered textarea-sm"
            />
            <input
              type="submit"
              value="Submit"
              className="mt-4 text-white normal-case btn btn-sm bg-priColor hover:bg-secColor"
            />
          </form>
          <div className="modal-action">
            <label
              htmlFor="feedbackModal"
              className="w-8 h-8 rounded-full btn btn-sm btn-neutral"
            >
              X
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageClasses;
