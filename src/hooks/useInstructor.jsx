import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useInstructor = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isInstructor = false, isLoading: isInstructorLoading } =
    useQuery({
      queryKey: ["isInstructor", user?.email],
      enabled: !!user?.email && !!localStorage.getItem("JWT"),
      queryFn: async () => {
        const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
        return res.data.instructor;
      },
    });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
