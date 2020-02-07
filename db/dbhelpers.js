var Products = require('./');

var helpers = {
  get: () => Products.find({}),
  getOne: (sku) => Products.find({sku})
  // post: (item) => Products.create(item),
  // update: (_id, item) => Products.findOneAndUpdate({_id}, item),
  // delete: (_id) => Products.deleteOne({_id})
};

module.exports = helpers;