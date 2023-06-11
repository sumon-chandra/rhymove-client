import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "./../../../components/sections/SectionTitle";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [paymentHistories, setPaymentHistories] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`/payment-history?email=${user?.email}`)
      .then(({ data }) => {
        console.log(data);
        setPaymentHistories(data);
      });
  }, []);
  return (
    <>
      <Helmet>
        <title>My Payment History - Rhymove Dance Studio & School</title>
      </Helmet>
      <section className="section lg:pb-32 pb-6">
        <SectionTitle value="My Payment History!" />
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra lg:border-4 border-2">
              <thead>
                <tr className="lg:text-lg font-bold text-black py-2 bg-gray-200">
                  <th></th>
                  <th>Class Name</th>
                  <th>Price</th>
                  <th>Enrolled Date</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistories?.map((payment, index) => (
                  <tr
                    key={payment?._id}
                    className="font-semibold py-2 lg:text-lg"
                  >
                    <th>{index + 1}</th>
                    <td>{payment?.paidItemName}</td>
                    <td>${payment?.price}</td>
                    <td>{payment?.createdAt.slice(0, 10)}</td>
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

export default PaymentHistory;
