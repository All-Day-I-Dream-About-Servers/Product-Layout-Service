const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/products')
  .get(controller.get)
  // .post(controller.post)

router
  .route('/products/:sku')
//   .put(controller.put)
//   .delete(controller.delete)

module.exports = router