const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google", "/create-checkout-session", "/webhook"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
