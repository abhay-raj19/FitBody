// Using ES6 imports
// This was mentioned in package.json line:6

import express from 'express';
import mongoose from 'mongoose';
import { config } from "dotenv";
import cors from 'cors';
import Razorpay from "razorpay";

// Importing the Router Files
import welcomeRouter from './routes/welcomeRoute.js';
import AuthRoute from './routes/auth.js';
import paymentRoute from './routes/paymentRoute.js';

config({path:"./config/config.env"})

// Iniliazing Express Server
const server = express();
const port = process.env.PORT; // Port Number

console.log(port)

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});

server.use(express.json());
server.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }));
    
server.use(express.urlencoded({extended:true})) 
// Redirecting the routes to the router files 

server.use('/', welcomeRouter);
server.use("/api/auth", AuthRoute);
server.use("/api",paymentRoute)


// Response Handler Middleware Which will send response to the client in the form of JSON Object 

server.use((obj, req, res, next) => {
    const statuscode = obj.status || 500;
    const message = obj.message || "Something went wrong";
    return res.status(statuscode).json({
        success: [200,201,204].some(a=> a === obj.status)? true : false,
        status: statuscode,
        message: message,
        stack: obj.stack,
        data: obj.data? obj.data : false
    });
});

// Database connection Function 
const ConnetMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/fitbody');
        console.log('DB connected !');
    } catch (error) { 
       console.error('Error: ', error);
        console.log('DB connection failed');
    }
}

server.get("/api/getkey",(req,res)=>
    res.status(200).json({key:process.env.RAZORPAY_API_KEY})
)

// Server Listening

server.listen(port, function check (error) {
    ConnetMongoDB();
    if (error) {
        console.error('Error: ', error);
    }
    else {
        console.log(`Server is running on port: ${port}`);
        
    }
});