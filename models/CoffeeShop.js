const mongoose = require("mongoose");

const { Schema } = mongoose;

const CoffeeShopSchema = new Schema({
  name: { type: String, required: true },
  averageRating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },
  paymentMethods: { type: [String] },
  amenities: {
    freeWifi: { type: Boolean, default: false },
    parkingAvailable: { type: Boolean, default: false },
    wheelchairAccessible: { type: Boolean, default: false },
  },
  openingHours: {
    open: { type: String, required: true },
    close: { type: String, required: true },
  },
  specialtyCoffees: { type: [String] },
  foodOptions: { type: [String] },
  bannerImage: { type: String },
  thumbnail: { type: String },
});

module.exports = mongoose.model("CoffeeShop", CoffeeShopSchema);
