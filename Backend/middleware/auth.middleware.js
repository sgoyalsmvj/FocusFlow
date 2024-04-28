import Creator from "../models/creator.models";
import Student from "../models/student.models";

import jwt from "jsonwebtoken";

export const isAuthenticated =async (req,res,next)=>{
    try{
        const {token}=req.cookies;
        if(!token){
         return res.status(410).json({
            messaage:"please login first"
         })
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.creator=await Creator.findById(decoded._id);
        req.student= await Student.findById(decoded._id);

        next();
    }
    catch(error){
        {
                return res.status(500).json({
                message:error.messaage, 
            })
        }
    }
}