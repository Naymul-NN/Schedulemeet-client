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
    <div>
      <form onSubmit={handleSubmit(handlePayment)}>
        <CardElement
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
      </form>
    </div>
  );
};

export default PaymentForm;
