const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");

/// USING MIDDLEWARES ///
// ------------------------------
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/// USING ROUTES ///
// ------------------------------
app.use("/api/v1", userRoute);
app.use("/api/v1", postRoute);
// ------------------------------

module.exports = app;
