require("dotenv/config");

const express = require("express");
const app = express();
const api = process.env.API_URL;
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

//enablee cors
app.use(cors());
app.options('*',cors());

//middlewares
app.use(express.json());
app.use(morgan("tiny"));



//routes
const productsRoute=require("./routers/products");
const categoriesRoutes = require("./routers/categories");
const usersRoutes = require("./routers/users");
const ordersRoutes = require("./routers/orders");


app.use(`${api}/products`,productsRoute);
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);



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
