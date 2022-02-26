const db = require('../models')

// this is our model
const Review = db.reviews

const addReview = async (req,res) =>{
    const data = {
        rating: req.body.rating,
        description: req.body.description
    }

    const review = await Review.create(data);
    res.status(200).send(review);
}

const getAllReview = async (req,res) => {
    let reviews = await Review.findAll({})
    res.status(200).send(reviews);
}

module.exports = {
    addReview,
    getAllReview,
}