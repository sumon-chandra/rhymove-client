import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sections/SectionTitle";

const ManageClasses = () => {
  return (
    <>
      <Helmet>
        <title>Manage Classes - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="section">
        <SectionTitle value="Manage All Classes!" />
        <h3>Manage all classes</h3>
      </section>
    </>
  );
};

export default ManageClasses;
