const express = require("express");
const {
  getAllCoffeeShops,
  coffeeShopProducts,
} = require("../controller/coffeeShop/coffeeShop");

const router = express.Router();

router.route("/").get(getAllCoffeeShops);
router.route("/:id/products").get(coffeeShopProducts);

module.exports = router;
