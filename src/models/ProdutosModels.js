import { DataTypes } from "sequelize"

import database from '../database/db.js'

const Produto = database.define('Produtos',{
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    preco:{
        type:DataTypes.REAL,
        allowNull:false
    }
},{

})

export default Produto