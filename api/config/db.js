import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Mongo succesfully");
  } catch (err) {
    console.log("Error while connecting to database");
  }
};

export default connectDB;
