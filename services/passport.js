const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/google-keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, don) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    }
  )
);
