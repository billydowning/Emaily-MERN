// keys.js figure out which set of creds to return

if (process.env.NODE_ENV === "production") {
  // we're in production - return the prod set of keys
  module.exports = require("./prod");
} else {
  // we are in development - return the dev keys
  module.exports = require("./dev");
}
