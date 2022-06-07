const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");



//schema+models
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    richDescription:{
        type: String,
        default: "",
       

    },
    image:{
        type:String,
        default:''


    },
    images:[{
        type:String
    }],
    brand:{
        type:String,
        default:''

    },
    price:{
        type:Number,
        default:0

    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true

    },
    countInStock:{
        type:Number,
        required:true,
        min:0,
        max:255

    }
});

exports.Product = mongoose.model("products", productSchema);
