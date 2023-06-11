import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sections/SectionTitle";
import ClassCard from "../../../components/cards/ClassCard";
import PaymentModal from "../../../components/PaymentModal";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
const SelectedClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [selectedItemToPay, setSelectedItemToPay] = useState({});
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["selected-class"],
    enabled: !!user?.email,
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/selected-class?email=${user?.email}`
      );
      return response.data;
    },
  });
  const filteredClasses = classes.filter((item) => item?.status !== "paid");
  return (
    <>
      <Helmet>
        <title>My Selected Class - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="section lg:pb-32 pb-10">
        <SectionTitle value="My Selected Classes!" />
        <div className="lg:grid grid-cols-3 gap-x-10 gap-y-20">
          {filteredClasses?.map((item) => (
            <ClassCard
              item={item}
              key={item._id}
              isSelected={true}
              setSelectedItemToPay={setSelectedItemToPay}
              refetch={refetch}
            />
          ))}
        </div>
      </section>
      {/* !!!!!!!!!!!!!!!!! ******** Modal *********** !!!!!!!!!!!!!! */}
      <PaymentModal selectedItemToPay={selectedItemToPay} />
    </>
  );
};

export default SelectedClasses;
