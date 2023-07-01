import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/sections/SectionTitle";
import EmptyFile from "../../../components/sections/EmptyFile";

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
  return (
    <>
      <Helmet>
        <title>Enrolled Classes - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="section">
        <SectionTitle value="My Enrolled Classes!" />
        {enrolledClass?.length === 0 ? (
          <EmptyFile />
        ) : (
          <div className="lg:grid grid-cols-2 gap-20 lg:pb-32 pb-6 font-inter font-semibold">
            {enrolledClass.map((item) => (
              <div
                key={item._id}
                className="glass rounded-3xl lg:flex flex-row shadow-2xl p-4 lg:mt-0 mt-5"
              >
                <figure className="lg:w-[40%]">
                  <img
                    src={item?.image}
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </figure>
                <div className="card-body lg:w-[60%] lg:space-y-6">
                  <h3 className="card-title">{item?.paidItemName}</h3>
                  <button className="btn w-full bg-priColor hover:bg-secColor normal-case text-lg font-bold text-white">
                    Continue class
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default EnrolledClasses;
