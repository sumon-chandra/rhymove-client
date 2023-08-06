import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import loginImg from "../assets/img-1.png";
import { AuthContext } from "../context-provider/AuthProvider";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { loginUser, signInWithGoogle, loading } = useContext(AuthContext);
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
        setError(err.message);
      });
  };

  // !! Login with Google
  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      const loggedUser = result.user;
      const user = { name: loggedUser.displayName, email: loggedUser.email };
      axios.post("https://rhymove-server.vercel.app/users", user).then(() => {
        navigate(from);
      });
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Login - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="relative pt-20">
        <div className="min-h-screen px-4 mx-auto bg-transparent lg:w-1200 lg:px-0">
          <div className="items-center lg:flex justify-evenly gap-x-10">
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="relative z-20 bg-white border rounded-lg shadow-md lg:w-1/2 card-body font-inter border-priColor shadow-priColor"
            >
              <div className="text-center">
                <h4 className="pb-6 text-3xl font-bold">Login</h4>
              </div>
              <div className="flex flex-col gap-4">
                {/* ========== Email ============== */}
                <div>
                  <input
                    type="email"
                    required
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="contact-input"
                  />
                  {errors.name && (
                    <span className="text-xs font-semibold text-red-400">
                      This field is required
                    </span>
                  )}
                </div>
                {/* ================= Password ================== */}
                <div>
                  <input
                    type={showPass ? "text" : "password"}
                    {...register("password", { required: true })}
                    placeholder="Password"
                    className="contact-input"
                  />
                  {errors.name && (
                    <span className="text-xs font-semibold text-red-400">
                      This field is required
                    </span>
                  )}
                  <label className="label">
                    <a
                      href="#"
                      className="font-semibold label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                {error && (
                  <span className="text-xs font-semibold text-red-400">
                    {error}
                  </span>
                )}
              </div>
              {/* ============ Submit btn =========== */}
              <div className="mt-6 form-control">
                <input
                  type="submit"
                  value={loading ? "Please Wait" : error ? "Login" : "Login"}
                  className="contact-btn"
                />
              </div>
              {/* ======= Navigator and Google sign in ================== */}
              <div className="text-xs text-primaryColor">
                <p className="font-semibold">
                  New here?{" "}
                  <Link
                    to="/register"
                    className="font-bold underline text-priColor"
                  >
                    Create a new account
                  </Link>
                </p>
                <div
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center gap-2 py-2 mx-auto mt-6 text-xs font-semibold bg-white border cursor-pointer select-none text-priColor border-priColor lg:w-4/6 rounded-2xl"
                >
                  <span>Or login with google</span>
                  <FaGoogle className="cursor-pointer" />
                </div>
              </div>
              {/* -------- Password Show/Hide btn ---------- */}
              <span className="absolute text-lg cursor-pointer bottom-44 right-8">
                {showPass ? (
                  <button
                    onClick={() => setShowPass(false)}
                    className="text-xs my-btn"
                  >
                    Hide Password
                  </button>
                ) : (
                  <button
                    onClick={() => setShowPass(true)}
                    className="text-xs my-btn"
                  >
                    Show Password
                  </button>
                )}
              </span>
            </form>
            <figure className="w-1/2">
              <img
                src={loginImg}
                alt=""
                className="hidden w-3/4 bg-transparent ms-auto lg:block"
              />
            </figure>
          </div>
        </div>
        <div className="hidden lg:block absolute w-20 h-[400px] bg-priColor left-0 bottom-52 blur-[90px] rotate-45"></div>
      </section>
    </>
  );
};

export default Login;
