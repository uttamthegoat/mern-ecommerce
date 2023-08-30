const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

// router.post('/create', createProduct);
// router.get('/products', getProducts);
// router.put('/products/:id', updateProduct);
// router.delete('/products/:id', deleteProduct);

router.route('/create-product').post(createProduct);
router.route('/get-products').get(createProduct);
router.route('/edit-product').put(createProduct);
router.route('/delete-product').delete(createProduct);

module.exports = router;
