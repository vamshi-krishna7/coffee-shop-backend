const express = require("express");
const {
  getAllCoffeeShops,
  coffeeShopProducts,
  createCoffeeProduct,
} = require("../controller/coffeeShop/coffeeShop");

const router = express.Router();

router.route("/").get(getAllCoffeeShops);
router.route("/:id/products").get(coffeeShopProducts);
router.route("/:id/ceate-product").post(createCoffeeProduct)

module.exports = router;
