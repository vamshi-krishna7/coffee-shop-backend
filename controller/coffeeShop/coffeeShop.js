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

    const coffeeShopId = new mongoose.Types.ObjectId(id);

    const shop = await CoffeeShop.findById(coffeeShopId);
    if (!shop) {
      return res.status(404).json({ error: 'Coffee shop not found' });
    }

    const products = await CoffeeShopProduct.find();

    if (!products || products.length === 0) {
      return res.status(404).json({ error: 'No products found for this coffee shop' });
    }

    const data = {
      shop,
      products
    };

    return res.json(data);
  } catch (err) {
    console.log("err", err);
  }
};
