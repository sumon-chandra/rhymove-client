import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import SectionTitle from "./../../../components/sections/SectionTitle";
import EmptyFile from "./../../../components/sections/EmptyFile";
import { FaTrash } from "react-icons/fa";

const EnrolledStudents = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();

  const { data: students = [] } = useQuery({
    queryKey: ["students"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/my-classes/${id}/enrolled-students?email=${user.email}`
      );
      return res.data;
    },
  });
  console.log(students);
  const handleDelete = (student) => {
    console.log("Handle Delete");
  };

  return (
    <section className="section">
      <SectionTitle value="Enrolled Students!" />
      {students?.length === 0 ? (
        <EmptyFile />
      ) : (
        <div className="w-full">
          <div className="uppercase font-cinzel lg:text-2xl text-xs font-bold p-3">
            <h4>
              Total enrolled Student:{" "}
              {students.length < 9 ? `0${students.length}` : students.length}
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full border table-pin-rows table-pin-cols lg:text-lg text-xs">
              <thead>
                <tr>
                  <th className="lg:text-xl">#</th>
                  <th className="lg:text-xl">Name</th>
                  <th className="lg:text-xl">Email</th>
                  <th className="lg:text-xl">Action</th>
                </tr>
              </thead>
              <tbody>
                {students?.map((student, index) => (
                  <tr key={student._id} className="font-bold">
                    <th>{index + 1}</th>
                    <td>{student.userName}</td>
                    <td>{student.userEmail}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(student)}
                        className="btn btn-sm normal-case bg-red-600 text-white hover:bg-red-500"
                      >
                        Kick out
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
  );
};

export default EnrolledStudents;
