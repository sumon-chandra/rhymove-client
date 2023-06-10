import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import SectionTitle from "./../../../components/sections/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaImages } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddNewClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const api_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
  const img_hosing_url = `https://api.imgbb.com/1/upload?key=${api_key}`;
  const handleAddClass = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosing_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((item) => {
        const imgUrl = item.data.display_url;
        const classInfo = {
          instructorName: user?.displayName,
          instructorEmail: user?.email,
          name: data.name,
          image: imgUrl,
          availableSeats: parseFloat(data.availableSeat),
          enrolledStudents: 0,
          price: parseFloat(data.price),
          status: "pending",
        };
        console.log("ClassInfo: ", classInfo);
        axiosSecure.post("/classes", classInfo).then(({ data }) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item Added Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/my-classes");
          }
        });
      });
  };
  return (
    <>
      <Helmet>
        <title>Add New Class - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="section">
        <SectionTitle value="Add A New Class!" />
        <form
          onSubmit={handleSubmit(handleAddClass)}
          className="card-body font-inter mt-8 lg:mx-32 lg:p-8 rounded-lg bg-white"
        >
          <div className="lg:grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Class Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Class Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-400 text-xs font-semibold mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">
                  Class Price
                </span>
              </label>
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="Class Price"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-400 text-xs font-semibold mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">
                  Available Seat
                </span>
              </label>
              <input
                type="number"
                {...register("availableSeat", {
                  required: true,
                })}
                placeholder="Available Seat"
                className="input input-bordered"
              />
              {errors.price && (
                <span className="text-red-400 text-xs font-semibold mt-2">
                  This field is required.
                </span>
              )}
            </div>
            <div className="form-control">
              <input
                {...register("image", { required: true })}
                type="file"
                id="file"
                className="w-[0.0001px]"
              />
              <label
                htmlFor="file"
                className="border-2 rounded-lg p-4 flex items-center gap-2"
              >
                <FaImages />
                <span>Add Class Image.</span>
              </label>
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Add Class"
              className="btn lg:w-4/12 mx-auto w-full btn-sm lg:btn-md hover:bg-secColor bg-priColor normal-case border-0 text-white lg:text-xl shadow-lg"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default AddNewClass;
