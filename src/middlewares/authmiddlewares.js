import  jwt from "jsonwebtoken";

import auth from "../config/auth.js";

export default async(req,res,next)=>{
    const authHeader = req.headers.authorization

    if (!authHeader) {
       return res.json("usuario não audtenticado")
    }

    const[, token] = authHeader.split(' ')

    try {
     const decoded = jwt.verify(token,auth.secret)
     req.userid= decoded.id
     return next()
    } catch (error) {
       res.json('erro na autenticação') 
    }
}