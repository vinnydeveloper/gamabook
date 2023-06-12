import express from 'express';
import categoriaController from './controller.js'

const routes = express.Router()

routes.post('/categorias', categoriaController.create)
routes.get('/categorias', categoriaController.listAll)
routes.get('/categorias/:id', categoriaController.listOne)
routes.put('/categorias/:id', categoriaController.update)
routes.delete('/categorias/:id', categoriaController.delete)

export default routes