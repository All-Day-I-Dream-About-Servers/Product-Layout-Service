var mongoose = require('mongoose');

// var productSchema= mongoose.Schema ({
// 	name: String,
// 	price: Number,
// 	colors: [String],
// 	sizes : [String],
// 	images: [String]
// });

const productSchema = mongoose.Schema({
  sku: {type: Number, index: true, unique: true},
  name: String,
  color: [String],
  categories: [String],
  price: Number,
  size: [String],
  sale: Number,
  review: Number,
  colorImages : [String],
  images: [String]
});

module.exports = productSchema;
