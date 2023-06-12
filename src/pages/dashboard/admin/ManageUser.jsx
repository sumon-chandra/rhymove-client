import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sections/SectionTitle";
import { FaTrash, FaUserShield } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
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
        <div className="w-full">
          <div className="uppercase font-cinzel lg:text-2xl text-xs font-bold p-3">
            <h4>
              Total User: {users.length < 9 ? `0${users.length}` : users.length}
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full border table-pin-rows table-pin-cols lg:text-lg text-xs">
              <thead>
                <tr>
                  <th className="lg:text-xl">#</th>
                  <th className="lg:text-xl">Name</th>
                  <th className="lg:text-xl">Email</th>
                  <th className="lg:text-xl">Rule</th>
                  <th className="lg:text-xl">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => (
                  <tr key={user._id} className="font-bold">
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user?.rule === "admin" ? (
                        "Admin"
                      ) : (
                        <div className="flex gap-2 ">
                          <button
                            disabled={user?.rule === "instructor"}
                            data-tip="Make Instructor"
                            onClick={() => handleMakeInstructor(user)}
                            className="tooltip normal-case text-xl btn btn-ghost bg-priColor btn-xs w-10 h-10 text-white hover:bg-secColor"
                          >
                            <GiTeacher />
                          </button>

                          <button
                            data-tip="Make Admin"
                            onClick={() => handleMakeAdmin(user)}
                            className="tooltip normal-case text-xl btn btn-ghost bg-priColor btn-xs w-10 h-10 text-white hover:bg-secColor"
                          >
                            <FaUserShield />
                          </button>
                        </div>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(user)}
                        className="btn btn-ghost bg-red-600 btn-xs w-10 h-10 text-xl text-white hover:bg-red-500"
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
      </section>
    </>
  );
};

export default ManageUser;
