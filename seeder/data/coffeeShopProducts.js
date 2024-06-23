const fs = require("fs");
const mongoose = require("mongoose");

// Load environment variables
require("dotenv").config({ path: ".env" });

// load model
const CoffeeShopProducts = require("../../models/CoffeeShopProduct");

// connectDB
const connectDb = async () => {
  const connect = await mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log(`MongoDB connected: ${connect.connection.host}`);
};

connectDb();

// read JSON files
const coffeShopsProducts = JSON.parse(
  fs.readFileSync(`${__dirname}/coffee-shop-products.json`, "utf-8")
);

// import data to DB

const importData = async () => {
  try {
    await CoffeeShopProducts.collection.insertMany(coffeShopsProducts);
    console.log("Data imported");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// delete data to DB
const deleteData = async () => {
  try {
    const deleted = await CoffeeShopProducts.collection.deleteMany();
    console.log("Data deleted");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
}

if (process.argv[2] === "-d") {
  deleteData();
}
