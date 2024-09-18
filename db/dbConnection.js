const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to the db ...");
  } catch (e) {
    console.log(e);
  }
};

module.exports = dbConnection;
