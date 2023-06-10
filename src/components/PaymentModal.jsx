import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

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
                <CheckoutForm
                  price={price}
                  selectedItemToPay={selectedItemToPay}
                />
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
