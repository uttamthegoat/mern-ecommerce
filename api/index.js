const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const CustomError = require("./errors/CustomError");
const GlobalErrorHandler = require("./middleware/globalErrorHandler");

const port = process.env.PORT;

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

connectDB();
// mount middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// mount routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/search", require("./routes/searchRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
// app.use("/api/wishlist", require("./routes/wishlistRoutes"));
app.get("/", (req, res) => {
  res.send("Welcome to BuyBox server!");
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

app.listen(port, () => {
  console.log("Server running on port 5001");
});
