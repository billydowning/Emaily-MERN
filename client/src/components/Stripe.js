import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { connect } from "react-redux";
import * as actions from "../actions";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function Stripe() {
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    console.log(result);

    if (result.error) {
      return "error message";
    }
  };
  return (
    <button role="link" onClick={handleClick} className="ui red button">
      Add Credits
    </button>
  );
}

export default connect(null, actions)(Stripe);
