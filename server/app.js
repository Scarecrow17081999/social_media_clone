const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");

/// USING MIDDLEWARES ///
// ------------------------------

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
/// USING ROUTES ///
// ------------------------------
app.use("/api/v1", userRoute);
app.use("/api/v1", postRoute);
// ------------------------------

module.exports = app;
