import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FaGoogle, FaImages } from "react-icons/fa";
import loginImg from "../assets/signup_bg.svg";
import { AuthContext } from "../context-provider/AuthProvider";
const Register = () => {
  const { signInWithGoogle, userInfo, createNewUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // !! Handle Register
  const api_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
  const img_hosing_url = `https://api.imgbb.com/1/upload?key=${api_key}`;
  const handleRegister = (data) => {
    console.log(data);
    setError("");
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
    }
    createNewUser(data.email, data.password).then(() => {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      fetch(img_hosing_url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then(({ data }) => {
          const photoURL = data.display_url;
          userInfo(data.name, photoURL).then(() => {});
        })
        .catch((err) => {
          console.log(err);
        });
      reset();
      navigate(from);
    });
  };

  // !! Login with Google
  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      const loggedUser = result.user;
      const user = { name: loggedUser.displayName, email: loggedUser.email };
    });
  };

  return (
    <>
      <section className=" pt-10">
        <div className="lg:w-1200 mx-auto px-4 lg:px-0 min-h-screen bg-transparent">
          <div className="lg:flex justify-evenly items-center gap-x-10">
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="card-body font-inter bg-white"
            >
              <div className="text-center">
                <h4 className="text-3xl font-bold">Register</h4>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Name"
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
                  <span className="label-text font-bold text-xl">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
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
                  <span className="label-text font-bold text-xl">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/,
                  })}
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-400 text-xs font-semibold mt-2">
                    This field is required.
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-400 text-xs font-semibold mt-2">
                    Password must contain at least 6 character and one uppercase
                    letter and one special character.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                  })}
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
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
                  <span>Add profile picture.</span>
                </label>
              </div>
              {error && (
                <span className="text-red-400 text-xs font-semibold mt-2">
                  {error}
                </span>
              )}
              <div className="form-control mt-6">
                <input
                  disabled={error}
                  type="submit"
                  value="Register"
                  className="btn btn-sm lg:btn-md bg-priColor hover:bg-secColor normal-case border-0 text-white lg:text-xl shadow-lg"
                />
              </div>
              <div className="text-xs text-primaryColor">
                <p className="font-semibold">
                  Already have an account?{" "}
                  <Link to="/login" className="font-bold underline">
                    Login now
                  </Link>
                </p>
                <div
                  onClick={handleGoogleLogin}
                  className="bg-slate-200 font-semibold text-sm select-none cursor-pointer flex justify-center items-center gap-2 mt-6 w-4/6 rounded-2xl py-1 mx-auto"
                >
                  <span>Or register with google</span>
                  <FaGoogle className="cursor-pointer" />
                </div>
              </div>
            </form>
            <img
              src={loginImg}
              alt=""
              className="w-1/2 hidden lg:block bg-transparent"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
