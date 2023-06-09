import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sections/SectionTitle";
import ClassCard from "../../../components/cards/ClassCard";
const SelectedClasses = () => {
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["selected-class"],
    queryFn: async () => {
      const response = await axios("http://localhost:5000/selected-class");
      return response.data;
    },
  });
  return (
    <>
      <Helmet>
        <title>My Selected Class - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="section lg:pb-32 pb-10">
        <SectionTitle value="My Selected Classes!" />
        <div className="lg:grid grid-cols-3 gap-x-10 gap-y-20">
          {classes?.map((item) => (
            <ClassCard
              item={item}
              key={item._id}
              isSelected={true}
              refetch={refetch}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default SelectedClasses;
