import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import PropagateLoader from "react-spinners/PropagateLoader";
import SectionTitle from "../../../components/sections/SectionTitle";
import ClassCard from "../../../components/cards/ClassCard";
import PaymentModal from "../../../components/PaymentModal";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import EmptyFile from "../../../components/sections/EmptyFile";
const SelectedClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [selectedItemToPay, setSelectedItemToPay] = useState({});
  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["selected-class"],
    enabled: !!user?.email,
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/selected-class?email=${user?.email}`
      );
      return response.data;
    },
  });
  // TODO: The filter method should be applied from server
  const filteredClasses = classes.filter((item) => item?.status !== "paid");
  return (
    <>
      <Helmet>
        <title>My Selected Class - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="pb-10 section lg:pb-32">
        <SectionTitle value="My Selected Classes!" />
        {filteredClasses.length === 0 ? (
          <EmptyFile />
        ) : isLoading ? (
          <PropagateLoader color="#FFA500" size={30} />
        ) : (
          <div className="grid-cols-3 lg:grid gap-x-10 gap-y-20">
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
        )}
      </section>
      {/* !!!!!!!!!!!!!!!!! ******** Modal *********** !!!!!!!!!!!!!! */}
      <PaymentModal selectedItemToPay={selectedItemToPay} />
    </>
  );
};

export default SelectedClasses;
