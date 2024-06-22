const mongoose = require('mongoose');
const { Schema } = mongoose;

const CoffeeShopProductSchema = new Schema({
  coffeeShopId: { type: Schema.Types.ObjectId, ref: 'CoffeeShop', required: true },
  category: { type: String, enum: ['Coffee', 'Drinks', 'Food'], required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
});

module.exports = mongoose.model('CoffeeShopProduct', CoffeeShopProductSchema);
