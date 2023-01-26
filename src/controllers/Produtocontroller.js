
import { json } from 'sequelize'
import database from '../database/db.js'
import Produto from '../models/ProdutosModels.js'

class Produtocontroller{

    constructor(){
        database.sync()
    }

    async addProduto(req, res){

        const{nome,preco } = req.body

        await Produto.create({
            nome:nome,
            preco:preco
        })

        return res.json({
            mensagem:'produto criado com sucesso!',
            data:{
                nome:nome,
                preco:preco
            }
        })
    }



    async getProdutos(req, res){ //buscando todos os produtos no banco
        const produtos = await Produto.findAll()
        
        return res.json(produtos)
        
    }

    async getProduto(req, res){//buscando produto pelo id
        const {id} = req.params
        const produto = await Produto.findByPk(id)
           
        
        return res.json(produto)
    }

    async updateProduto(req, res){//atualizando
        const {id,preco} = req.body

          const produp = await Produto.update({
                preco:preco
           },{
            where:{
                id:id
            }
           })
        
        return res.json(produp)
    }

}
export default new Produtocontroller()