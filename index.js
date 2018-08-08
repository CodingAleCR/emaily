const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/google-keys");

const app = express();

// clientID  168727507555-nsmt6cssabd7q0kc7on43g7mh73eu3hc.apps.googleusercontent.com
// clientSecret R3aUgJxKJS2iOsdM_HO3CXqE
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleSecret,
      callbackURL: "/auth/google/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
