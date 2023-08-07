import { useQuery } from "@tanstack/react-query";
import PropagateLoader from "react-spinners/PropagateLoader";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sections/SectionTitle";
import { FaTrash, FaUserShield } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import EmptyFile from "../../../components/sections/EmptyFile";
import useAuth from "../../../hooks/useAuth";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    enabled: !!localStorage.getItem("JWT"),
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: `Do you really want to make ${user.name} as an Admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FFA500",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`https://rhymove-server.vercel.app/users/admin/${user.email}`)
          .then(({ data }) => {
            if (data.modifiedCount) {
              Swal.fire("Great!", `${user.name} is new Instructor!`, "success");
              refetch();
            }
          });
      }
    });
  };
  const handleMakeInstructor = (user) => {
    Swal.fire({
      title: `Do you really want to make ${user.name} as an Instructor?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FFA500",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `https://rhymove-server.vercel.app/users/instructor/${user.email}`
          )
          .then(({ data }) => {
            if (data.modifiedCount) {
              Swal.fire("Great!", `${user.name} is new Instructor!`, "success");
              refetch();
            }
          });
      }
    });
  };
  const handleDelete = (user) => {
    Swal.fire({
      title: `Do your really want to delete ${user.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FFA500",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://rhymove-server.vercel.app/users/${user._id}`)
          .then(({ data }) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>Manage All Users - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="section lg:pb-36">
        <SectionTitle value="Manage All Users!" />
        {users?.length === 0 ? (
          <EmptyFile />
        ) : isLoading ? (
          <PropagateLoader color="#FFA500" size={30} />
        ) : (
          <div className="w-full">
            <div className="p-3 text-xs font-bold uppercase font-cinzel lg:text-2xl">
              <h4>
                Total User:{" "}
                {users.length < 9 ? `0${users.length}` : users.length}
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full text-xs border table-zebra table-pin-rows table-pin-cols lg:text-lg">
                <thead>
                  <tr>
                    <th className="lg:text-xl">#</th>
                    <th className="lg:text-xl">Name</th>
                    <th className="lg:text-xl">Email</th>
                    <th className="lg:text-xl">Rule</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user, index) => (
                    <tr key={user._id} className="font-bold">
                      <th>{index + 1}</th>
                      <td>{user.name}</td>
                      <td className="text-sm">{user.email}</td>
                      <td>
                        {user?.rule === "admin" ? (
                          <span className="text-sm">Admin</span>
                        ) : (
                          <div className="flex gap-2 ">
                            <button
                              disabled={user?.rule === "instructor"}
                              title="Make Instructor"
                              onClick={() => handleMakeInstructor(user)}
                              className="text-white primary-icon bg-slate-400 disabled:opacity-40"
                            >
                              <GiTeacher />
                            </button>

                            <button
                              title="Make Admin"
                              onClick={() => handleMakeAdmin(user)}
                              className="text-white primary-icon bg-priColor"
                            >
                              <FaUserShield />
                            </button>
                          </div>
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(user)}
                          title="Delete User"
                          className="text-white bg-red-500 primary-icon"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ManageUser;
