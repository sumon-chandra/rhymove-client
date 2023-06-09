import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sections/SectionTitle";
import { FaTrash, FaUserShield } from "react-icons/fa";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/users").then(({ data }) => {
      //   console.log(data);
      setUsers(data);
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Manage All Users - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="section">
        <SectionTitle value="Manage All Users!" />
        <div className="w-full">
          <div className="uppercase font-cinzel lg:text-2xl text-xs font-bold p-3">
            <h4>
              Total User: {users.length < 9 ? `0${users.length}` : users.length}
            </h4>
          </div>
          <table className="table overflow-x-auto table-zebra w-full">
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
                // <AllUsersTable user={user} index={index} key={user._id} />
                <tr key={user._id} className="font-bold">
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <select name="make-role" id="role" className="px-4 py-2">
                      <option value="">Set Role</option>
                      <option value="instructor">Instructor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
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
      </section>
    </>
  );
};

export default ManageUser;
