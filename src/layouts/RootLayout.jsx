import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Footer from "../components/Footer";

const RootLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-r from-white to-blue-100 pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
