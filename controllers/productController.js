const { reviews } = require('../models');
const db = require('../models');

// create our main model

const Product = db.products;


// main work

const addProduct = async (req,res) =>{
        let info = {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        }
    
        const product = await Product.create(info);
        res.status(200).send(product);
        console.log(product);
    
}


//get all products

const getAllProducts = async (req,res) => {
    let products = await Product.findAll({})
    res.status(200).send(products)
}

//get single product 

const getOneProduct = async (req, res) => {
    let id = req.params.id;
    let product = await Product.findOne({where: { id:id }})
    res.status(200).send(product);

}

// update product 

const updateProduct = async (req,res) => {
    let id = req.params.id
    let product = await Product.update(req.body, {where: { id:id }})
    res.status(200).send(product);
}

//delet product by id

const deletProduct = async (req,res) => {
    let id = req.params.id;
    await Product.destroy({where: { id:id }});
    res.status(200).send("product is deletes sucessfully");
}

// get published product

const getPublishedProduct = async (req,res) => {
    const products = await Product.findAll({where: { published:true }})
    res.status(200).send(products);
}


// realational product and review

const getProductReview = async (req, res) => {
    const data = await Product.findAll({
        include: [{
            model:reviews,
            as:'review'
        }],
        where: {id:2}
    })
    res.status(200).send(data);
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deletProduct,
    getPublishedProduct,
    getProductReview,
}