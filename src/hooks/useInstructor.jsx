import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useInstructor = () => {
  const { user, loading } = useAuth();
  const instructor = JSON.parse(sessionStorage.getItem("isInstructor"));
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem("JWT");
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email, token],
    enabled: !loading && !!user?.email && !!localStorage.getItem("JWT"),
    queryFn: async () => {
      if (!user || !token) {
        return false;
      }
      if (instructor) {
        console.log("Hello");
        return true;
      }
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      sessionStorage.setItem("isInstructor", res.data.instructor);
      return res.data.instructor;
    },
  });
  return [isInstructor || false, isInstructorLoading || false];
};

export default useInstructor;
