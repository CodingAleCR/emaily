const express = require("express");
const mongoose = require("mongoose");
const mongoKeys = require("./config/mongodb-keys");
require("./services/passport");

mongoose.connect(mongoKeys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
