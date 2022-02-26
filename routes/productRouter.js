const productController = require('../controllers/productController');

const router = require('express').Router();

router.post('/addproduct', productController.addProduct);
router.get('/allProduct', productController.getAllProducts);
router.get('/published', productController.getAllProducts);
router.get('/productreviews', productController.getProductReview);
router.get('/:id', productController.getOneProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id',productController.deletProduct);

module.exports = router