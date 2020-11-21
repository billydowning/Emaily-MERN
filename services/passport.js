const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        //means we already have a record with the given ID
        return done(null, existingUser);
      }
      // don't have a user record, make a new one
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);

// can install FB, Github, Twitter Oauth strategies here similar to above.
// must also define authRoutes for each additional strategy as well.
