const mongoose = require("mongoose");

const db = process.env.MONGO_URI;

const databaseConnection = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connection successful");
  } catch (error) {
    console.log("database connection failed", error);
  }
};

module.exports = databaseConnection;
