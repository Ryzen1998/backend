require("dotenv/config");

const express = require("express");
const app = express();
const api = process.env.API_URL;
const morgan = require("morgan");
const mongoose = require("mongoose");
const productsRouter=require("./routers/products");

//middlewares
app.use(express.json());
app.use(morgan("tiny"));




app.use(`${api}/products`,productsRouter);



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
