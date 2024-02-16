"use client";

import PaymentForm from "@/components/PaymentForm/PaymentForm";
import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Ok9lrEY22nYxVOYlm15fQyCzQ8jcGVhW0oaqnupsFn7N93z3zM1qxuQ7AT448e9nu1QcGCvvXpgmqVsIgDpY5UD00ggBmo9zE"
);
console.log(process.env.NEXT_STRIPE_PK);

const PaymentConfig = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default PaymentConfig;
