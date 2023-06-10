import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/sections/SectionTitle";

const EnrolledClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: enrolledClass = [], isLoading } = useQuery({
    queryKey: ["enrolledClass"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/enrolled-classes?email=${user?.email}`
      );
      return res.data;
    },
  });
  console.log(enrolledClass);
  return (
    <>
      <Helmet>
        <title>Enrolled Classes - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="section">
        <SectionTitle value="My Enrolled Classes!" />
        <div>
          {enrolledClass.map((item) => (
            <div key={item._id}>
              <p>Name: {item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default EnrolledClasses;
