const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbUrl = process.env.DB_URI || "";
const connectMongoDb = async () => {
  try {
    await mongoose.connect(dbUrl).then((data) => {
      console.log(`Database connected with ${data.connection.host}`);
    });
  } catch (err) {
    console.log(`Database connection error: ${err}`);
    setTimeout(connectMongoDb, 5000);
  }
};

module.exports = connectMongoDb;
