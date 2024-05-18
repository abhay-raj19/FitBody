import jwt from 'jsonwebtoken'
const isAdminAuthenticated = async(req,res,next) => {
  try {
    const token=req.header('Authorization');
    if(!token){
        return res.status(401).json({message:"admin not authenticated.",success:false})
    };
    const jwtToken=token.replace("Bearer","").trim();
    const decode = await jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
    if(!decode){
        return res.status(401).json({message:"Invalid token",success:false});
    };
    req.id = decode.adminId;
    next();
  } 
  catch (error) {
    return res.status(500).json({ message: "internal server error", error, success: false })  
  }
};
export default isAdminAuthenticated