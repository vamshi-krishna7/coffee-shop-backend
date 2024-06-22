const express = require("express");
const getAllCoffeeShops = require("../controlller/coffeeShop");

const router = express.Router();

router.get("/", getAllCoffeeShops);

// router.get("/:id", getCoffeeShop);

module.exports = router;
