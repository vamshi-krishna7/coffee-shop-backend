const fs = require("fs");
const mongoose = require("mongoose");

// Load environment variables
require("dotenv").config({ path: '.env' });

// load model
const CoffeeShopProducts = require("../../models/CoffeeShopProducts");

// connectDB
const connectDb = async () => {
  const connect = await mongoose.connect('mongodb+srv://vamshikr777:7XiVWOqFmcKLz1Zk@cluster0.xsgz2bc.mongodb.net/coffeeShopDatabase', {
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000
  });
  console.log(`MongoDB connected: ${connect.connection.host}`);
};

connectDb();

// read JSON files
const coffeShopsProducts = JSON.parse(
  fs.readFileSync(`${__dirname}/coffee-shops.json`, "utf-8")
);

// import data to DB

const importData = async () => {
  try {
    await CoffeeShopProducts.collection.insertMany(coffeShopsProducts);
    console.log('Data imported');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// delete data to DB
const deleteData = async () => {
  try {
    const deleted = await CoffeeShop.collection.deleteMany();
    console.log('Data deleted');
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
