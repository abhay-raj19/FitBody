/* This is a sample model file for the user schema. 
This file will be used to create a user schema and export it to the server file. */

import mongoose from 'mongoose'

const UserSchema = mongoose.Schema(
    { 
        email: {
            type:String,
            required: true,
            unique: true
        },
        password: {
            type:String,
            required: true
        },
        
        name: {
            type: String,
            required: false,
            default: ""
        },

    },
    {
        timestamps: true  // To store creared or modifiesd time of the record
    }
);
export default mongoose.model('User', UserSchema); // Exporting the model