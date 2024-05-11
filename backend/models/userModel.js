const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userModel = mongoose.Schema({
    userName: { type: String },
    password: { type: "String", required: true },
    age: { type: Number },
    email: { type: "String", unique: true, required: true },
    contact: {
      type: String, // Assuming your contact number is stored as a string
      unique: true,
      required: true,
      validate: {
        validator: function (value) {
          // Check if the value has exactly 10 digits
          return /^\d{10}$/.test(value);
        },
      },
    },
  });

  userModel.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  userModel.pre("save", async function (next) {
    if (!this.isModified) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  
  const Users = mongoose.model("User", userModel);
  
  module.exports = Users;