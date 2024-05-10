
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { CreateSuccess } from '../utils/success.js';
import { CreateError } from "../utils/error.js";

export const register  = async (req, res, next) => {
    //return next(CreateError(500,"My custom error!!"));
    try {
        // check if the role exists
        const salt = await bcrypt.genSalt(10); // generate salt for hashing the password
        const hashedPassword = await bcrypt.hash(req.body.password, salt); // hash the password
        const newUser = new User({ // create a new user 
        email: req.body.email,//
        password: hashedPassword,
        name: req.body.name
    });
    await newUser.save(); // save the user to the database
    return next(CreateSuccess(200, "User registered Successfully ", newUser));
    } catch (error) {
        console.log(error.message)
        return next(CreateError(500, error.message));
    }
}


