require("dotenv/config");

const express = require("express");
const app = express();
const api = process.env.API_URL;
const morgan = require("morgan");
const mongoose = require("mongoose");

//middlewares
app.use(express.json());
app.use(morgan("tiny"));

//schema+models
const productSchema = new mongoose.Schema({
    name: String,
    image:String,
    countInStock:{
        type:Number,
        required:true
    }
});

const Product = mongoose.model("products", productSchema);

//initial route
app.get(`${api}/products`,async (req, res) => {
  const productList =await Product.find();

  if(!productList){
      res.status(500).json({success:false
    })
  }

  res.send(productList);
});

//

app.post(`${api}/products`, (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    });
    product.save().then((createdProduct=>{
        res.status(201).json(createdProduct);


    })).catch((err)=>{
        res.status(500).json({
        error:err,
        success:false
    })
})

  
    
  });

  //db connection
mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:'eshop'
}).then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err); 
});

app.listen(3000, () => {
  console.log('server is running on port http://localhost:3000' + api);
});
