const mongoose = require("mongoose");



//schema+models
const productSchema = new mongoose.Schema({
    name: String,
    image:String,
    countInStock:{
        type:Number,
        required:true
    }
});

exports.Product = mongoose.model("products", productSchema);
