import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import logo from "../assets/logo.png";
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
    <li>
      <NavLink className="nav-item" to="/instructors">
        Instructors
      </NavLink>
    </li>
  </>
);
const Navbar = () => {
  return (
    <div className="navbar p-0 px-4 fixed glass">
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
        <div className="lg:text-2xl text-lg ms-4 flex items-center font-K2D cursor-pointer select-none">
          <img src={logo} className="w-10" alt="" />
          <span className="font-black">Rhymove</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 nav gap-4">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn-sm pt-1 rounded-lg  bg-priColor hover:bg-secColor font-bold font-K2D normal-case"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
