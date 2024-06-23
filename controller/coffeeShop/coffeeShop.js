const CoffeeShop = require("../../models/CoffeeShop");
const CoffeeShopProduct = require("../../models/CoffeeShopProducts");

exports.getAllCoffeeShops = async (req, res) => {
  try {
    const { rating, openNow, paymentMethods, search, sortBy } = req.query;
    // console.log("🚀 ~ getAllCoffeeShops ~ bestRating:", bestRating)
    console.log("🚀 ~ getAllCoffeeShops ~ req.query:", req.query);

    const query = {};

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    let sortByParams = {};
    if (sortBy === "bestRating") {
      sortByParams = { averageRating: -1 };
    } else if (sortBy === "") {
    }
    console.log("🚀 ~ getAllCoffeeShops ~ sortBy:", sortByParams);

    const coffeeShops = await CoffeeShop.find(query).sort(sortByParams);
    return res.json(coffeeShops);
  } catch (err) {
    console.log("err", err);
  }
};

exports.coffeeShopProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await CoffeeShopProduct.findById(
      "6676522a5e4a67bb29359662"
    );
    return res.json(products);
  } catch (err) {
    console.log("err", err);
  }
};


