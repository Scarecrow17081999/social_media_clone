const app = require("./app");
const dotenv = require("dotenv");

// CONFIGURING ENVIRONMENT //
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "./config/config.env" });
}

// CONNECTING DATABASE //
const database = require("./config/db");
database();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
