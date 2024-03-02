"use client";

import { useForm } from "react-hook-form";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const { handleSubmit } = useForm();

  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (data) => {
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    if (card === null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-base-100 w-3/5 mx-auto  text-info min-h-5xl my-10 px-5 py-3 rounded-xl shadow-xl">
        <form onSubmit={handleSubmit(handlePayment)}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#87CEEB",
                  "::placeholder": {
                    color: "#f1f1f1",
                  },
                },
                invalid: {
                  color: "#FF0000",
                },
              },
            }}
          />

          <button className="btn btn-primary mt-10">pay</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
