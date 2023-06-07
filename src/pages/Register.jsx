import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FaGoogle } from "react-icons/fa";
import loginImg from "../assets/signup_bg.svg";
import { AuthContext } from "../context-provider/AuthProvider";
const Register = () => {
  const { loginUser, signInWithGoogle, loadJWT } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // !! Handle Sign in
  const handleRegister = (data) => {
    // loginUser(data.email, data.password).then((res) => {
    //   loadJWT(res.user);
    //   reset();
    //   navigate(from);
    // });
  };

  // !! Login with Google
  const handleGoogleLogin = () => {
    // signInWithGoogle().then((result) => {
    //   const loggedUser = result.user;
    //   const user = { name: loggedUser.displayName, email: loggedUser.email };
    // });
  };

  return (
    <>
      <section className="lg:pt-20 pt-10">
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
                  required
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
                  required
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
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign in"
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
                  className="bg-slate-200 font-semibold lg:text-xl select-none cursor-pointer flex justify-center items-center gap-2 mt-6 w-4/6 rounded-2xl py-1 mx-auto"
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
