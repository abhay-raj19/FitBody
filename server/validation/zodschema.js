const zod  = require("zod");


const RegisterSchema = zod.object({
    username: zod
      .string({ required_error: "username Is Required" })
      .trim()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(255, { message: "Username can be at most 255 characters" }),
    email: zod
      .string({ required_error: "Email is required" })
      .trim()
      .email({ message: "Invalid Email Address" })
      .min(3, { message: "Email should be at least 3 characters" })
      .max(255, { message: "Email can be at most 255 characters" }),
    password: zod
      .string({ required_error: "Password is required" })
      .trim()
      .min(7, { message: "Password must be at least 7 characters" })
      .max(1024, { message: "Password must be at most 1024 characters" }),
    contacts: zod
    .string({ required_error: "Number is required"})
    .trim()
    .length(10,"Password must be of 10 Numbers ranging from 0-9 ")
  });

  
  module.exports = RegisterSchema ;