import { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FaGoogle, FaImages, FaEye, FaEyeSlash } from "react-icons/fa";
import loginImg from "../assets/img-2.png";
import { AuthContext } from "../context-provider/AuthProvider";
import axios from "axios";

const Register = () => {
  const { signInWithGoogle, userInfo, createNewUser, loading } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
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
  const handleRegister = (userData) => {
    createNewUser(userData.email, userData.password)
      .then(() => {
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
              axios
                .post("https://rhymove-server.vercel.app/users", user)
                .then((res) => {
                  console.log(res.data);
                });
            });
          })
          .catch((err) => {
            setError(err.message);
          });
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
      axios
        .post("https://rhymove-server.vercel.app/users", user)
        .then(({ data }) => {
          console.log(data);
        });
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Sign up - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="relative pt-10">
        <div className="min-h-screen px-4 mx-auto bg-transparent lg:w-1200 lg:px-0">
          <div className="items-center lg:flex justify-evenly gap-x-10">
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="relative z-20 bg-white border rounded-lg shadow-md card-body font-inter border-priColor shadow-priColor lg:w-1/2"
            >
              <div className="text-center">
                <h4 className="text-3xl font-bold">Sign up</h4>
              </div>
              <div className="flex flex-col gap-4">
                {/* ================ Name =========== */}
                <div>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="contact-input"
                  />
                  {errors.name && (
                    <span className="text-xs font-semibold text-red-400">
                      This field is required
                    </span>
                  )}
                </div>
                {/* ================= Email =========== */}
                <div>
                  <input
                    type="email"
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
                {/* ============== Password ============== */}
                <div>
                  <input
                    type={showPass ? "text" : "password"}
                    className="contact-input"
                    placeholder="Password"
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
                    <p className="text-xs font-semibold text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                {/* ======== Confirm Password =========== */}
                <div>
                  <input
                    type={showPass ? "text" : "password"}
                    className="contact-input"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === password.current ||
                        "The passwords do not match",
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className="text-xs font-semibold text-red-400">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
                {/* ============ Add Image =========== */}
                <div className="relative">
                  <input
                    {...register("image", { required: true })}
                    type="file"
                    id="file"
                    className="w-[0.0001px]"
                  />
                  <label
                    htmlFor="file"
                    className="absolute top-0 left-0 flex items-center gap-2 p-4 border-2 rounded-lg contact-input"
                  >
                    <FaImages />
                    <span>Add profile picture.</span>
                  </label>
                  {error && (
                    <span className="mt-2 text-xs font-semibold text-red-400">
                      {error}
                    </span>
                  )}
                </div>
              </div>
              {/* ======== Submit btn ============== */}
              <div className="mt-20 form-control">
                <input
                  disabled={!watch("confirmPassword")}
                  type="submit"
                  value={
                    loading ? "Please Wait" : error ? "Sign up" : "Sign up"
                  }
                  className="contact-btn"
                />
              </div>
              {/* ========== Navigator and Google sign in ========= */}
              <div className="text-xs text-primaryColor">
                <p className="font-semibold">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-bold underline text-priColor"
                  >
                    Login now
                  </Link>
                </p>
                <div
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center gap-2 py-2 mx-auto mt-6 text-xs font-semibold bg-white border cursor-pointer select-none text-priColor border-priColor lg:w-4/6 rounded-2xl"
                >
                  <span>Or register with google</span>
                  <FaGoogle className="cursor-pointer" />
                </div>
              </div>
              {/* -------- Password Show/Hide btn ---------- */}
              <span className="absolute text-lg cursor-pointer bottom-40 right-8">
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
            <figure className="hidden w-1/2 lg:block">
              <img src={loginImg} alt="" className="w-4/6 ms-auto" />
            </figure>
          </div>
        </div>
        <div className="absolute hidden lg:block w-20 h-[400px] bg-priColor left-0 bottom-52 blur-[90px] rotate-45"></div>
        <div className="absolute hidden lg:block w-20 h-[400px] bg-purple-700 right-0 bottom-10 blur-[120px] "></div>
      </section>
    </>
  );
};

export default Register;
