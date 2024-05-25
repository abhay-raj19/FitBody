import User from '../models/user-model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import Admin from '../models/admin-model.js';
import otpGenerator from 'otp-generator';
import OTP from '../models/otp-model.js';
import mailSender from '../utils/mailSender.js';
import { otpTemplate } from '../utils/emailTemplates.js';
export const registerUser = async (req, res) => {

  try {
    const { name, age, email, contact, password, confirmPasssword, panNumber, otp } = req.body;

    if (!name || !email || !age || !contact || !password || !confirmPasssword || !panNumber || !otp) {
      return res.status(400).json({ message: "Please Enter all the Feilds", success: false });
    }

    if (password !== confirmPasssword) {
      return res.status(400).json({ message: "Confirm password do not match.", success: false });
    }

    const userExists = await User.findOne({ email });
    const adminExists = await Admin.findOne({ email })
    if (userExists || adminExists) {
      return res.status(400).json({ message: "account already exists", success: false });
    }

    const recentOtp = await OTP.findOne({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    //validate recent otp
    if (recentOtp.length === 0) {
      return res.status(400).json({
        success: false,
        message: "OTP Not Found!",
      });
    }
    if (otp !== recentOtp.otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }
    const user = await User.create({
      name,
      email,
      password,
      age,
      contact,
      panNumber
    });


    if (user) {
      return res.status(201).json({ message: "Account created successfully.", success: true });
    }
    else {
      return res.status(500).json({ message: "internal server error", success: false });
    }
  }
  catch (err) {
    return res.status(500).json({ message: "internal server error", success: false, err });
  }
}

export const authUser = async (req, res) => {

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {

      const tokenData = {
        userId: user._id
      };

      const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
      if (!token) {
        return res.status(500).json({ message: "internal server error", success: false })
      }
      return res.status(200).json({
        token: token,
        message: "Logged in successful",
        success: true
      });
    }
    else {
      return res.status(401).json({ message: "Invalid Email or Password", success: false });
    }
  }
  catch (err) {
    return res.status(500).json({ message: "internal server error", success: false, err });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { email, current_password, new_password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: "No user found!", success: false });
    }
    const isPasswordMatch = await bcrypt.compare(current_password, user.password);
    if (!isPasswordMatch)
      return res.status(400).json({
        message: "Current password is incorrect.",
        success: false
      })
    user.password = new_password
    await user.save()
    return res.status(200).json({ message: "password changed successfully.", success: true })
  }
  catch (err) {
    return res.status(500).json({ message: "internal server error", err, success: false })
  }
}

export const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email })
    const admin = await Admin.findOne({ email })
    if (user || admin) {
      return res.status(401).json({
        success: false,
        message: "Email already registered.",
      });
    }
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log("OTP: ", otp);
    let result = await OTP.find({ otp })

    while (result) {
      //It means otp isn't unique.So, keep generating OTP
      let otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      result = await OTP.findOne({ otp: otp });
    }
    const otpsent = await OTP.create({
      email,
      otp
    })
    if (!otpsent) {
      return res.status(500).json({ message: "internal server error", success: false, err });
    }

    await mailSender(email, "verification email from FitBody", otpTemplate(otp))

    return res.status(200).json({
      success: true,
      message: "OTP Sent Successfully",
      otp,
    })
  }
  catch (err) {
    return res.status(500).json({ message: "internal server error", success: false, err });
  }
}