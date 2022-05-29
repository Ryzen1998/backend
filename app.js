require('dotenv/config');


const express = require('express');

const app = express();
const api = process.env.API_URL;
 

//initial route
app.get(api+'/',(req,res)=>{
    res.send('Hello World');
});

app.listen(3000,()=>{
   
    console.log('server is running on port http://localhost:3000'+api);
});