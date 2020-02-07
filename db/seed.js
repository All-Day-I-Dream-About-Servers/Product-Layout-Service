const Products = require('./');
var mongoose = require('mongoose');
var sampleData = require('./sample.json')

const insertMockData = function() {
  Products.create(sampleData)
  .then(() => {
    console.log('seeded');
  })
  .catch((err) => {
    console.error(err);
  });
};

insertMockData()
// Data for skus 1, 2, 12, 30, 96 have array of images. 