import React from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="Add credits to your account"
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="ui red button">Add credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
