const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const bodyParser = require("body-parser");
const endpointSecret = keys.stripeWebHookKey;

module.exports = (app) => {
  app.post("/create-checkout-session", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Add Credits To Your Account",
            },
            unit_amount: 500,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/success",
    });

    res.json({ id: session.id });
  });

  app.post(
    "/webhook",
    bodyParser.raw({ type: "application/json" }),
    (request, response) => {
      const payload = request.body;
      const sig = request.headers["stripe-signature"];

      let event;

      try {
        event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
      } catch (err) {
        return response.status(400).send(`Webhook Error: ${err.message}`);
      }
      // Handle the checkout.session.completed event
      if (event.type === "checkout.session.completed") {
        const credits = event.data.object.amount_total;
        console.log(credits);
      }

      response.status(200);
    }
  );
};
