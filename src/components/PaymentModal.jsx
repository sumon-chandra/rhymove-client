import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_API_KEY);

const PaymentModal = ({ selectedItemToPay }) => {
  const { price, name } = selectedItemToPay;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <input type="checkbox" id="payModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-center text-lg">{name}</h3>
          <div className="lg:px-0 px-4">
            <div className="lg:my-10 my-4"></div>
            <section>
              <Elements stripe={stripePromise}>
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
                  <div className="text-center">
                    <button
                      type="submit"
                      className="pay-btn btn btn-sm mt-10 w-1/2 lg:px-10 px-5 bg-priColor hover:bg-secColor border-0"
                    >
                      Pay
                    </button>
                  </div>
                </form>
              </Elements>
            </section>
          </div>
          <div className="modal-action">
            <label
              htmlFor="payModal"
              className="btn btn-circle btn-ghost absolute top-4 right-4"
            >
              X
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentModal;
