import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading)
    return (
      <div className="w-screen min-h-screen text-4xl flex items-center justify-center">
        Loading...
      </div>
    );
  return user ? (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-white to-blue-100 pt-16">
        <Outlet />
      </section>
      <Footer />
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default Dashboard;
