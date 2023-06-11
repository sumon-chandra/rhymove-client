import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import loginImg from "../assets/login_bg.svg";
import { AuthContext } from "../context-provider/AuthProvider";
import axios from "axios";
const Login = () => {
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
  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then((res) => {
        // loadJWT(res.user);
        reset();
        navigate(from);
      })
      .catch((err) => {
        // TODO: Handle the error when password is invalid
        console.log(err.message);
      });
  };

  // !! Login with Google
  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      const loggedUser = result.user;
      const user = { name: loggedUser.displayName, email: loggedUser.email };
      axios.post("http://localhost:5000/users", user).then(() => {
        navigate(from);
      });
    });
  };

  return (
    <>
      <Helmet>
        <title>Login - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="lg:pt-20 pt-10">
        <div className="lg:w-1200 mx-auto px-4 lg:px-0 min-h-screen bg-transparent">
          <div className="lg:flex justify-evenly items-center gap-x-10">
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="card-body font-inter bg-white"
            >
              <div className="text-center">
                <h4 className="text-3xl font-bold">Login</h4>
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
                  {...register("password", { required: true })}
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-400 text-xs font-semibold mt-2">
                    This field is required
                  </span>
                )}
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover font-semibold"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-sm lg:btn-md bg-priColor hover:bg-secColor normal-case border-0 text-white lg:text-xl shadow-lg"
                />
              </div>
              <div className="text-xs text-primaryColor">
                <p className="font-semibold">
                  New here?{" "}
                  <Link to="/register" className="font-bold underline">
                    Create a new account
                  </Link>
                </p>
                <div
                  onClick={handleGoogleLogin}
                  className="bg-slate-200 text-sm font-semibold select-none cursor-pointer flex justify-center items-center gap-2 mt-6 lg:w-4/6 rounded-2xl py-1 mx-auto"
                >
                  <span>Or login with google</span>
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

export default Login;
