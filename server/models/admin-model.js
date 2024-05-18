import mongoose from "mongoose";

const adminSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact: {
        type: String, 
        unique: true,
        required: true,
        validate: {
          validator: function (value) {
            // Check if the value has exactly 10 digits
            return /^\d{10}$/.test(value);
          },
        },
      },
    password:{
        type:String,
        required:true,
    },
    
},{timeStamps:true});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;