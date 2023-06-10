const mongoose = require("mongoose");

// TODO: Change database according to assignment.
const CONNNECTION_STRING = "mongodb://127.0.0.1:27017/booking-uni";

module.exports = async (app) => {
  try {
    await mongoose.connect(CONNNECTION_STRING);
    console.log("DB connection established");
  } catch (error) {
    console.log(`DB connection error: ${error.message}`);
    process.exit(1);
  }
};
