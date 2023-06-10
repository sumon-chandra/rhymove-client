import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const admin = JSON.parse(sessionStorage.getItem("isAdmin"));
  console.log(admin);
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem("JWT");
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email, token],
    enabled: !loading && !!user?.email && !!localStorage.getItem("JWT"),
    queryFn: async () => {
      if (!user || !token) {
        return false;
      }
      if (admin) {
        console.log("Hello");
        return true;
      }
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      sessionStorage.setItem("isAdmin", res.data.admin);
      return res.data.admin;
    },
  });
  return [isAdmin || false, isAdminLoading || false];
};

export default useAdmin;
