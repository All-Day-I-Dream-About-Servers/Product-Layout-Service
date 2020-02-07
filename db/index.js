var mongoose = require('mongoose');
var productSchema = require('./schema.js');
var mongoUri = 'mongodb://localhost/samples5';
// var mongoUri = 'mongodb://localhost/AdidasProducts';
mongoose.Promise = global.Promise;

var db = mongoose.connect(mongoUri)
  .then(()=>console.log(`connected to mongoooooose DB`))
  .catch(err => console.log(err));

var Products = mongoose.model('Products', productSchema);

module.exports = Products;