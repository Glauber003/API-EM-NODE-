import  jwt from "jsonwebtoken";

import auth from "../config/auth";

export default async(req,res,next)=>{
    const authHeader = req.Headers.authorizantion

    if (!authHeader) {
        res.json("usuario não audtenticado")
    }

    const[,token] = authHeader.splint(' ')

    try {
     const decoded = jwt.verify(token,auth)
    } catch (error) {
        
    }
}