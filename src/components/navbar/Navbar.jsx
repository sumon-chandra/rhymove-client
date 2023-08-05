import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { useEffect, useState } from "react";

const Navbar = () => {
  // ! Navbar animation - When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
  const [previousScrollPos, setPreviousScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScrolling = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(previousScrollPos > currentScrollPos);
    setPreviousScrollPos(currentScrollPos);
  };

  const { user, logoutUser } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
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
      {user && (
        <li className="dropdown ">
          <label tabIndex={10} className="nav-item">
            Dashboard
          </label>
          <ul
            tabIndex={10}
            className="lg:dropdown-content nav menu p-4 shadow bg-[#dbeafec3] rounded-box w-44 space-y-2"
          >
            {isAdmin ? (
              <>
                <li>
                  <NavLink className="nav-item" to="/dashboard/manage-users">
                    Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-item" to="/dashboard/manage-classes">
                    Manage Classes
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink className="nav-item" to="/dashboard/add-new-class">
                    Add New Class
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-item" to="/dashboard/my-classes">
                    My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    className="nav-item"
                    to="/dashboard/my-selected-classes"
                  >
                    Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-item"
                    to="/dashboard/my-enrolled-classes"
                  >
                    Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-item" to="/dashboard/payment-history">
                    Payment History
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </li>
      )}
      <li>
        <NavLink className="nav-item" to="/instructors">
          Instructors
        </NavLink>
      </li>
    </>
  );
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser().then(() => {
      navigate("/login");
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
    return () => window.addEventListener("scroll", handleScrolling);
  }, [previousScrollPos, visible]);

  return (
    <nav
      className={`fixed w-full my-glass z-50 transition-all ${
        visible ? "top-0 duration-300" : "-top-full duration-300"
      }`}
    >
      <div className={`lg:w-1200 mx-auto navbar`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="mt-12 text-2xl rounded-lg glass lg:hidden"
            >
              <MdMenu />
            </label>
            <ul
              tabIndex={0}
              className="gap-4 p-4 mt-3 shadow menu menu-sm glass dropdown-content bg-base-100 rounded-box w-52 nav"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex items-center text-lg cursor-pointer select-none lg:text-2xl lg:ms-0 ms-4 font-K2D">
            <img src={logo} className="w-10" alt="" />
            <div className="font-black">
              <span>Rhymove</span> <p className="text-xs">Dance School</p>
            </div>
          </div>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="gap-4 px-1 menu menu-horizontal nav">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="font-bold normal-case rounded-lg btn-sm bg-priColor hover:bg-secColor font-K2D"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="pt-1 font-bold normal-case rounded-lg btn-sm bg-priColor hover:bg-secColor font-K2D"
            >
              Login
            </Link>
          )}
          {user && (
            <button className="rounded-full btn btn-ghost">
              <img
                src={user.photoURL}
                className="object-cover w-10 h-10 rounded-full"
                alt="user photo"
              />{" "}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
