const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    mongoose
      .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to Mongo succesfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (err) {
    console.log("Error while connecting to database");
  }
};

module.exports = connectDB;
