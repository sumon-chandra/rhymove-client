import { Helmet } from "react-helmet-async";
import notFoundImg from "../assets/404.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Rhymove Dance Studio & School</title>
      </Helmet>
      <div className="text-center space-y-4 lg:mt-20 mt-8">
        <div>
          <img src={notFoundImg} alt="" className="lg:w-1/2 mx-auto" />
        </div>
        <Link
          to="/"
          className="btn btn-sm lg:btn-md bg-priColor hover:bg-secColor normal-case border-0 text-white lg:text-xl shadow-lg"
        >
          Go to homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
