import Plan from "../models/plan-model.js"


export const addPlan = async (req, res) => {
    try {
        const { name, description, duration, price } = req.body
        if (!name || !description || !duration || !price) {
            return res.status(400).json({ message: "please enter all the fields.", success: false })
        }
        const plan = await Plan.create({
            name,
            description,
            duration,
            price
        })
        if (!plan) {
            return res.status(500).json({ message: "internal server error", success: false })
        }
        return res.status(201).json({ message: "plan added successfully.", success: true })
    }
    catch (err) {
        return res.status(500).json({ message: "internal server error", success: false, err })
    }
}

export const getAllPlans = async (req, res) => {
    try {
        const plans = await Plan.find()
        if (!plans) 
        {
             return res.status(500).json({message:"internal server error",success:false}) 
        }
        return res.status(200).json({plans,success:true,})
    }
    catch (err) {
        return res.status(500).json({ message: "internal server error", success: false, err })
    }
}

export const getPlanDetails=async(req,res)=>{
    try{
    const {id}=req.params
    const plan=await Plan.findById(id).select("-password")
    if(!plan)
        {
            return res.status(500).json({ message: "internal server error", err, success: false })
        }
        return res.status(200).json({ plan_details:plan,success: true })
    }
    catch(err)
    {
        return res.status(500).json({ message: "internal server error", success: false, err })
    }
}

export const deletePlan=async(req,res)=>{
    try{
     const {id}=req.params;
     const plan=await Plan.findByIdAndDelete(id)
     if(!plan)
        {
            return res.status(500).json({ message: "internal server error", err, success: false })
        }
        return res.status(200).json({ message:"plan deleted successfully.",success: true })
    }
    catch(err)
    {
        return res.status(500).json({ message: "internal server error", success: false, err })
    }
}

export const getPlanUsers=async(req,res)=>{
   try
   {
     const {id}=req.params;
     const plan = await Plan.findById(id).populate('users');
     if (!plan) {
        return res.status(404).json({ message: "Plan not found." });
      }
      const users=plan.users
      return res.status(200).json({users})
   }
   catch(err)
   {
    return res.status(500).json({ message: "internal server error", success: false, err })
   } 
}

