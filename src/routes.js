import{ Router,json } from 'express';
import Produtocontroller from './controllers/Produtocontroller.js';
const routes = new Router()

routes.use(json())

routes.get('/produtos', Produtocontroller.getProdutos)
routes.get('/produto/:id', Produtocontroller.getProduto)
routes.post('/produto/add', Produtocontroller.addProduto)
routes.put('/produto/update', Produtocontroller.updateProduto)


export default routes