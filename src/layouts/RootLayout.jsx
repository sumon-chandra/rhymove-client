import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-r from-white to-blue-100 py-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
