import express from 'express';
import livrosController from './controller.js'

const routes = express.Router()


routes.post('/livros', livrosController.create)
routes.get("/livros", livrosController.listAll)

routes.get('/livros/:id', livrosController.listarUm)

export default routes