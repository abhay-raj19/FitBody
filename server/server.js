import {app} from "./app.js"
import Razorpay from "razorpay"
import dotenv from 'dotenv/config';
const { config } = dotenv;

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});


app.listen(process.env.PORT,()=>console.log(`server is running on ${process.env.PORT}`))