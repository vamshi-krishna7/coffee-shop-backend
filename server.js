const express = require("express");
require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const http = require("http");

const app = express();

// lood routes

const coffeeShop = require("./routes/coffeeShop");
const connectDb = require("./db");

const server = http.createServer(app);

// connect to Db
connectDb();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// enable cors
app.use(
  cors({
    origin: "*",
  })
);

// routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Coffee Shop API" });
});
app.use("/api/v1/coffee-shop", coffeeShop);

const port = process.env.PORT || 5500;

server.listen(port, () => {
  console.log(`app running on port ${port}`);
});
