import { DataTypes } from "sequelize"
import bcrypt from "bcrypt.js"

import database from '../database/db.js'

const User = database.define('Users',{
   nome:{
    type:DataTypes.STRING,
    allowNull:false
   },

   email:{
    type:DataTypes.STRING,
    allowNull:false
   },

   senha:{
    type:DataTypes.VIRTUAL
   },

   senha_hash:{
    type:DataTypes.STRING
   },

},{

})

User.beforeCreate(async (user) => {
    if(user.senha){
        user.senha_hash = await bcrypt.hash(toString (user.senha,8) )
    }
  });

export default User