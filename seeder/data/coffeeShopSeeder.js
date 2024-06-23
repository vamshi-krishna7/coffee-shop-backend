const fs = require("fs");
const mongoose = require("mongoose");

// Load environment variables
require("dotenv").config({ path: ".env" });

// load model
const CoffeeShop = require("../../models/CoffeeShop");

// connectDB
const connectDb = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB connected: ${connect.connection.host}`);
};

connectDb();

// read JSON files
const coffeShops = JSON.parse(
  fs.readFileSync(`${__dirname}/coffee-shops.json`, "utf-8")
);

// import data to DB

const importData = async () => {
  try {
    await CoffeeShop.collection.insertMany(coffeShops);
    console.log("Data imported");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// delete data to DB
const deleteData = async () => {
  try {
    const deleted = await CoffeeShop.collection.deleteMany();
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
