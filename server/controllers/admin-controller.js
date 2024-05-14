import Admin from '../models/admin-model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/user-model.js';

export const registerAdmin = async (req, res) => {

    try {
        const { name, email, contact, password, confirmPassword } = req.body;

        if (!name || !email || !contact || !password || !confirmPassword) {
            return res.status(400).json({ message: "Please Enter all the Feilds", success: false });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Confirm password do not match.", success: false });
        }

        const adminExists = await Admin.findOne({ email });
        const userExists=await User.findOne({email})
        

        if (adminExists || userExists) {
            return res.status(400).json({ message: "account already exists", success: false });
        }

        const hash_pass = await bcrypt.hash(password, 10)
        const admin = await Admin.create({
            name,
            email,
            password: hash_pass,
            contact,
        });


        if (admin) {
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

export const adminLogin = async (req, res) => {

    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(400).json({ message: "Invalid email or password.", success: false })
        }
        const isMatch = await bcrypt.compare(password, admin.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password.", success: false })
        }
        
        const tokenData={
            adminId:admin._id
        }
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
    catch (err) {
        return res.status(500).json({ message: "internal server error", success: false, err });
    }
};

export const changePassword = async (req, res) => {
    try {
        const { email, current_password, new_password } = req.body;
        const admin = await Admin.findOne({ email })
        if (!admin) {
            return res.status(400).json({ message: "No user found!", success: false });
        }
        const isPasswordMatch = await bcrypt.compare(current_password, admin.password);
        if (!isPasswordMatch)
            return res.status(400).json({
                message: "Current password is incorrect.",
                success: false
            })
        admin.password = new_password
        await admin.save()
        return res.status(200).json({ message: "password changed successfully.", success: true })
    }
    catch (err) {
        return res.status(500).json({ message: "internal server error", err, success: false })
    }
}
