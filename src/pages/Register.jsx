import { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FaGoogle, FaImages } from "react-icons/fa";
import loginImg from "../assets/signup_bg.svg";
import { AuthContext } from "../context-provider/AuthProvider";
import axios from "axios";
const Register = () => {
  const { signInWithGoogle, userInfo, createNewUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // !! Handle Register
  const api_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
  const img_hosing_url = `https://api.imgbb.com/1/upload?key=${api_key}`;
  // TODO: Handle error when user is already exist
  const handleRegister = (userData) => {
    createNewUser(userData.email, userData.password).then(() => {
      const formData = new FormData();
      formData.append("image", userData.image[0]);
      fetch(img_hosing_url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then(({ data }) => {
          const photoURL = data.display_url;
          userInfo(userData.name, photoURL).then(() => {
            const user = { name: userData.name, email: userData.email };
            axios.post("http://localhost:5000/users", user).then(() => {});
          });
        })
        .catch((err) => {
          setError(err.message);
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
      axios.post("http://localhost:5000/users", user).then(({ data }) => {
        console.log(data);
      });
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
                  className="input input-bordered"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/,
                      message: "Password must match the specified pattern",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-400 text-xs font-semibold mt-2">
                    {errors.password.message}
                  </p>
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
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-xs font-semibold mt-2">
                    {errors.confirmPassword.message}
                  </p>
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
                  disabled={!watch("confirmPassword")}
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
