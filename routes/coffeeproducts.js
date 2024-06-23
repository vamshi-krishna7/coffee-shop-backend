const express = require("express");
const coffeeShopProducts = require("../controller/coffeeShop/coffeeShopProduct");

const router = express.Router();

router.get("/:id", coffeeShopProducts);

module.exports = router;
