const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// import dotenv = require("dotenv");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const CustomError = require("./errors/CustomError");
const GlobalErrorHandler = require("./middleware/globalErrorHandler");

const app = express();

const corsOptions = {
  // origin: "http://localhost:5173",
  // credentials: true,
};

connectDB();
// mount middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser);

// mount routes
app.get("/", (req, res) => {
  res.send("Welcome to Ecommerce server");
});

// wrong route
app.all("*", (req, res, next) => {
  try {
    throw new CustomError(404, false, "Route not defined");
  } catch (error) {
    next(error);
  }
});

// global Error Handler
app.use(GlobalErrorHandler);

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
