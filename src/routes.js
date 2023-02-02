import{ Router,json } from 'express';
import Produtocontroller from './controllers/Produtocontroller.js';
import Usercontroller from './controllers/Usercontroller.js';
import Sessioncotroller from './controllers/Sessioncotroller.js';

import authmiddlewares from "./middlewares/authmiddlewares.js";
const routes = new Router()

routes.use(json())

routes.post('/user/create', Usercontroller.addUser)
routes.post('/user/login', Sessioncotroller.createsession)

routes.use(authmiddlewares)

routes.get('/produtos', Produtocontroller.getProdutos)
routes.get('/produto/:id', Produtocontroller.getProduto)
routes.post('/produto/add', Produtocontroller.addProduto)
routes.put('/produto/update', Produtocontroller.updateProduto)
routes.delete('/produto/delete/:id', Produtocontroller.deleteProduto)


export default routes