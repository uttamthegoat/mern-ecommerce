import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import CustomError from "./errors/CustomError";
import GlobalErrorHandler from "./middleware/globalErrorHandler";
const productRoutes = require('./routes/products');

connectDB();
dotenv.config();
const app = express();

const corsOptions = {
  // origin: "http://localhost:5173",
  // credentials: true,
};

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
