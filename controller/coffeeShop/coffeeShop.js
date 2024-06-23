const CoffeeShop = require("../../models/CoffeeShop");
const CoffeeShopProduct = require("../../models/CoffeeShopProduct");
const mongoose = require("mongoose");

exports.getAllCoffeeShops = async (req, res) => {
  try {
    const { search, sortBy } = req.query;

    const query = {};

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    let sortByParams = {};
    if (sortBy === "bestRating") {
      sortByParams = { averageRating: -1 };
    } else if (sortBy === "mostPopular") {
      sortByParams = { totalReviews: -1 };
    }

    const coffeeShops = await CoffeeShop.find(query).sort(sortByParams);
    return res.json(coffeeShops);
  } catch (err) {
    console.log("err", err);
  }
};

exports.coffeeShopProducts = async (req, res) => {
  try {
    const { id } = req.params;

    const coffeeShop = await CoffeeShop.findById(id).select([
      "name",
      "description",
    ]);

    if (!coffeeShop) {
      return null; // Handle case where coffee shop not found
    }

    const products = await CoffeeShopProduct.aggregate([
      {
        $match: { coffeeShopId: id },
      },
    ]);

    const data = {
      coffeeShop: coffeeShop.toObject(), // Convert to plain object
      products,
    };

    return res.json(data);
  } catch (err) {
    console.log("err", err);
  }
};

exports.createCoffeeProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const coffeeShopId = new mongoose.Types.ObjectId(id);

    await CoffeeShopProduct.create({
      coffeeShopId: coffeeShopId,
      category: "Coffee",
      name: "cafe latte",
      description: "awesome coffee",
      price: "67",
      imageUrl: "www.google.com",
    });
    return res.json({ data: "asdasdnn" });
  } catch (err) {
    console.log("err", err);
  }
};
