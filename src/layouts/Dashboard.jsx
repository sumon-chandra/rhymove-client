import { Navigate, Outlet, useLocation } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import useAuth from "../hooks/useAuth";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading)
    return (
      <div className="flex items-center justify-center w-screen min-h-screen text-4xl">
        <PropagateLoader color="#FFA500" size={30} />
      </div>
    );
  return user ? (
    <>
      <Navbar />
      <section className="py-16 bg-gradient-to-r from-white to-blue-100">
        <Outlet />
      </section>
      <Footer />
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default Dashboard;
