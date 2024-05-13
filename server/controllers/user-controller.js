import Plan from '../models/plan-model.js';
import User from '../models/user-model.js';

export const userDetails = async (req, res) => {
    const userID = req.params.id;
    try {
        const user = await Student.findById(userID).select('-password')
        if (!user) {
            return res.status(500).json({ message: "internal server error", err, success: false })
        }
        return res.status(200).json({ userDetails: user, success: true })
    }
    catch (err) {
        return res.status(500).json({ message: "internal server error", err, success: false })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const user = await User.find()
        if (!user) {
            return res.status(500).json({ message: "internal server error", err, success: false })
        }
        return res.status(200).json({ user })
    }
    catch (err) {
        return res.status(500).json({ message: "internal server error", err, success: false })
    }
}

export const addUserToPlan = async (req, res) => {
    const planID = req.params.id;
    const userID = req.id;
    
    try {
        const user = await User.findById(userID);
        const plan = await Plan.findById(planID);

        if (!user || !plan) {
            return res.status(404).json({ message: "user or plan not found." });
        }

        const startDate = new Date();
        const endDate = new Date();
        endDate.setMonth(startDate.getMonth() + plan.duration);

        plan.startDate = startDate;
        plan.endDate = endDate;

        plan.users.push(userID);
        user.plan = planID;

        await Promise.all([plan.save(), user.save()]);

        return res.status(200).json({ message: "User added to plan successfully.", success: true });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error.",success:false});
    }
};

