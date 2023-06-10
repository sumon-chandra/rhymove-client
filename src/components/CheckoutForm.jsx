import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useAxiosSecure from "./../hooks/useAxiosSecure";
import { useEffect } from "react";
import useAuth from "./../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price, selectedItemToPay }) => {
  // console.log("Selected Item to pay :", selectedItemToPay);
  const { item, refetch } = selectedItemToPay;
  const [cardError, setCartError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((response) => {
        setClientSecret(response.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe && !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCartError(error.message);
    } else {
      setCartError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCartError(confirmError.message);
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId("Payment successful!");
      const paymentInfo = {
        transactionId: paymentIntent.id,
        useName: user?.displayName,
        useEmail: user?.email,
        price,
        paidItemId: item._id,
        selectedClassId: item.selectedClassId,
        paidItemName: item.name,
        createdAt: new Date(),
      };
      axiosSecure.post("/payment", paymentInfo).then(({ data }) => {
        event.target.reset();
        setDisableBtn(true);
        if (
          data.updatedResult.modifiedCount > 0 &&
          data.insertResult.insertedId
        ) {
          refetch();
          navigate("/dashboard/my-selected-classes");
        }
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <CardElement
          className="card-element bg-slate-200 rounded-lg shadow-lg p-4"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {cardError && <p className="text-red-500 font-bold">{cardError}</p>}
        <div className="text-center">
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing || disableBtn}
            className="pay-btn btn btn-sm mt-10 w-1/2 lg:px-10 px-5 bg-priColor hover:bg-secColor border-0"
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && (
        <p className="text-red-500 text-center text-xs pt-6 font-semibold">
          Error:- {cardError}
        </p>
      )}
      {transactionId && (
        <p className="text-green-500 text-center text-xs pt-6 font-semibold">
          {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
