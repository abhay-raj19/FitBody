import mongoose from 'mongoose';

const subscriberSchema = mongoose.Schema({
    email:{
        type:String,
        require:true
    }
},{ timeStamps : true });

const Subscriber = mongoose.model('Subscriber', subscriberSchema);
export default Subscriber;