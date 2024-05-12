import { instance } from "../index.js"

export const checkout=async (req,res)=>{
    try{
    const options = {
        amount: Number(req.body.amount*100),  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      }
      const order = await instance.orders.create(options)

      console.log("order created ",order)
      res.status(200).json({
        success:true,
        order,
      })
    }
    catch(error){
        console.error("Error creating order:", error);
        res.status(500).json({ success: false, error: error.message });
    }
}


export const paymentVerification=async (req,res)=>{
  console.log(req.body)
    res.status(200).json({
      success:true,
    })
}