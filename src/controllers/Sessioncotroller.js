import  jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/Usermodel.js";
import auth from "../config/auth.js";

class Sessioncotroller{
    async createsession(req,res){
        const {email,senha} = req.body


        const user = await User.findOne({were: {email}})

        if(!user){
            res.json("Usuario não cadastrado")
        }

        const checksenha = await bcrypt.compare(toString(senha),user.senha_hash)

        if (!checksenha) {
            res.json("usuario ou senha incorretos.")
        }

        const {id,nome}=user

        return res.json({
            user:{
                id,
                nome
            },
            token:jwt.sign({id},auth.secret)
        })
    }
}

export default new Sessioncotroller()