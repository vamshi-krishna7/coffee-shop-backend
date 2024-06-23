const CoffeeShopProduct = require("../../models/CoffeeShopProduct");

const coffeeShopProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await CoffeeShopProduct.findbyId('6676522a5e4a67bb29359662');
    return res.json(products);
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = coffeeShopProducts;
