import express from 'express';
import categoriaController from './controller.js'
import createValidation from './validations/create.js'
import getIdValidation from './validations/getId.js'

const routes = express.Router()

routes.post('/categorias', createValidation, categoriaController.create)
routes.get('/categorias', categoriaController.listAll)
routes.get('/categorias/:id', getIdValidation, categoriaController.listOne)
routes.put('/categorias/:id', categoriaController.update)
routes.delete('/categorias/:id', categoriaController.delete)

export default routes