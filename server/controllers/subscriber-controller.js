import mongoose from 'mongoose';
import Subscriber from '../models/subscriber-model';

export const addSubscriber = async( req, res ) =>{
    try{
        const { subscriberEmail } = req.body;
        if(!email){
            return res.status(400).json({message:"Enter the field", success:false})
        }
        const newSubscriber = {
            email:subscriberEmail
        }

        const subscriber = await Subscriber.create(newSubscriber);

        return res.status(201).send(subscriber);


    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal server error", error, success:false})
    }
}