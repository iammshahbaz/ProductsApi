const express = require("express")
const {ProductModel} = require("../Model/productModel")
const productRoutes = express.Router();

productRoutes.post('/products',async(req,res)=>{
    const {name,price,rating,image,details} = req.body;
    try {
        const product = new ProductModel({
            name,price,rating,image,details
        })
        await product.save();
        res.send({"msg":"New product added successfully"})
    } catch (error) {
       res.send({"error":error}) 
    }

})

module.exports={
    productRoutes
}