const reviewController = require('../controllers/reviewController');

const router = require('express').Router();

router.post('/addreview', reviewController.addReview);
router.get('/allreview', reviewController.getAllReview);

module.exports = router
