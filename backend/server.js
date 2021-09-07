import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import config from './config.js';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app= express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/users",userRoute);
app.use("/api/products",productRoute);

// app.get("/api/products/:id",(req,res) =>{
//     const productId = req.params.id;
//     const product =data.products.find(x=>x._id === productId);
//     if (product){
//         res.send(product);
//     }else{
//         res.status(404).send({msg:"product Not found"});
//     }
    
// })

// app.get("/api/products",(req,res) =>{
//     res.send(data.products);
// })

app.get('/',(req,res) =>{
    res.send("Server is ready !");
})





app.listen(5000,()=>{console.log('server started at http://localhost:5000 ')});