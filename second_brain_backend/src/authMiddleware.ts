import { NextFunction,Request,Response } from "express";
import jwt from "jsonwebtoken";
export const JWT_SECRET = "ABCDEF";


export const authMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    let token = req.headers.token;
    try{
        const decode = jwt.verify(token as string,JWT_SECRET) as jwt.JwtPayload
        req.userId = decode.userId;
        next()
    }catch(e){
        res.status(400).json({
            msg:"Auth token not provided"
        })
}
    
    
}