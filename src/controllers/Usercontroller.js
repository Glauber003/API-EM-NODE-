import User from "../models/Usermodel.js";

class Usercontroller{
    
    async addUser(req,res){
        const {email} = req.body

        const temusuario = await User.findOne({were : {email}})

        if( temusuario){
            return res.json('usuario ja cadastrado')
        }
        
        const { id, nome } = await User.create(req.body)

        return res.json({
            id,
            nome
        })
    }
}


export default new Usercontroller