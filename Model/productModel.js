const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
 name:{type:String},
 price:{type:String},
 rating:{type:String},
 image:{type:String},
 details:{type:String},

},{
    version_key: false
})

const ProductModel = mongoose.model("products",productSchema)

module.exports={
    ProductModel
}