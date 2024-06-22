const CoffeeShop = require("../../models/CoffeeShop");

const getAllCoffeeShops = async (req, res) => {
  try {
    const { rating, openNow, paymentMethods } = req.query;
    console.log("🚀 ~ getAllCoffeeShops ~ req.query:", req.query);

    const filter = {};

    if (rating) {
      filter.averageRating = { $gte: rating };
    }

    if (openNow) {
      const now = new Date();
      const currentHour = `${now.getHours()}:${now.getMinutes()}`;
      filter["openingHours.open"] = { $lte: currentHour };
      filter["openingHours.close"] = { $gte: currentHour };
    }

    if (paymentMethods) {
      filter.paymentMethods = { $in: paymentMethods.split(",") };
    }

    const coffeeShops = await CoffeeShop.find(filter);
    return res.json(coffeeShops);
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = getAllCoffeeShops;
