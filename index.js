const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

// clientID  168727507555-nsmt6cssabd7q0kc7on43g7mh73eu3hc.apps.googleusercontent.com
// clientSecret R3aUgJxKJS2iOsdM_HO3CXqE
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
