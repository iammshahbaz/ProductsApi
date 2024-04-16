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

productRoutes.get("/products",async(req,res)=>{
    try {
        const products = await ProductModel.find(req.query)
        res.send({"products":products})
    } catch (error) {
        res.send({"error":error})
    }
})

productRoutes.get("/products/:id",async(req,res)=>{
    let productId = req.params.id;
    try {
        const product = await ProductModel.findOne({_id:productId})
        res.send({"product":product})
    } catch (error) {
        res.send({"error":error})
    }
})

module.exports={
    productRoutes
}