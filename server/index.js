// Using ES6 imports
// This was mentioned in package.json line:6

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Importing the Router Files
import welcomeRouter from './routes/welcomeRoute.js';
import AuthRoute from './routes/auth.js';

// Iniliazing Express Server
const server = express();
const port = 3000; // Port Number



dotenv.config();
server.use(express.json());
server.use(cors(
    {
        origin: "https:localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }));
    
    
// Redirecting the routes to the router files 

server.use('/', welcomeRouter);
server.use("/api/auth", AuthRoute);


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