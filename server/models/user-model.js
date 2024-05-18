import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userModel = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: "String",
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: "String",
    unique: true,
    required: true
  },
  isVerified: {
    type: Boolean,
    default: false
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
  panNumber: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (value) {
        // PAN card number validation
        // Format: ABCDE1234F (5 uppercase letters, 4 digits, 1 uppercase letter)
        return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value);
      },
    },
  },
  plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan',
    default: null
  },
  planStartDate: {
    type: String,
    default: null
  },
  planEndDate: {
    type: String,
    default: null
  },
  blogs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
  }]
}, { timestamps: true });

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

const User = mongoose.model("User", userModel);
export default User;

