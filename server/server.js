import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to db')
}).catch(err => {
    console.log(err.message);
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/keys/paypal',(req,res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
});

app.use('/api/seed', seedRouter);
app.use('/api/products',productRouter);
app.use('/api/user',userRouter);
app.use('/api/orders',orderRouter);

// app.get('/api/products', (req, res) => {
//     res.send(data.products);
// });
// app.get('/api/products/slug/:slug', (req, res) => {
//     const product = data.products.find(x => x.slug == req.params.slug);
//     if(product){
//         res.send(product);
//     }else{
//         res.status(404).send({message: 'Product Not Found'})
//     }
// });

// app.get('/api/products/:id', (req, res) => {
//     const product = data.products.find(x => x._id == req.params._id);
//     if(product){
//         res.send(product);
//     }else{
//         res.status(404).send({message: 'Product Not Found'})
//     }
// });

const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, '/client/build')));
app.get('*', (req,res) => 
    res.sendFile(path.join(_dirname, '/client/build/index.html'))
);

app.use((err,req,res,next) => {
    res.status(500).send({message: err.message});
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});