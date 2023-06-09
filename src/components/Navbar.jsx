import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import logo from "../assets/logo.png";
import useAuth from "../hooks/useAuth";
const navOptions = (
  <>
    <li>
      <NavLink className="nav-item" to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink className="nav-item" to="/classes">
        Classes
      </NavLink>
    </li>
    <li className="dropdown dropdown-hover">
      <label tabIndex={0} className="nav-item">
        Dashboard
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content nav menu p-4 shadow bg-[#ffffffc1] rounded-box w-44 space-y-2"
      >
        {/* <li>
          <NavLink className="nav-item" to="/dashboard/my-selected-classes">
            My Selected Classes
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/dashboard/my-enrolled-classes">
            My Enrolled Classes
          </NavLink>
        </li> */}
        <li>
          <NavLink className="nav-item" to="/dashboard/manage-users">
            Manage Users
          </NavLink>
        </li>
      </ul>
    </li>
    <li>
      <NavLink className="nav-item" to="/instructors">
        Instructors
      </NavLink>
    </li>
  </>
);
const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser().then(() => {
      navigate("/login");
    });
  };
  return (
    <div className="navbar p-0 px-4 fixed glass z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="mt-12 text-2xl bg-gray-700 rounded-lg lg:hidden"
          >
            <MdMenu />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm glass dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52 nav gap-4"
          >
            {navOptions}
          </ul>
        </div>
        <div className="lg:text-2xl text-lg lg:ms-0 ms-4 flex items-center font-K2D cursor-pointer select-none">
          <img src={logo} className="w-10" alt="" />
          <div className="font-black">
            <span>Rhymove</span> <p className="text-xs">Dance School</p>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 nav gap-4">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {" "}
            <button
              onClick={handleLogout}
              className="btn-sm rounded-lg  bg-priColor hover:bg-secColor font-bold font-K2D normal-case"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="btn-sm pt-1 rounded-lg  bg-priColor hover:bg-secColor font-bold font-K2D normal-case"
          >
            Login
          </Link>
        )}
        {user && (
          <button className="btn btn-ghost rounded-full">
            <img
              src={user.photoURL}
              className="w-10 h-10 rounded-full object-cover"
              alt="user photo"
            />{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
