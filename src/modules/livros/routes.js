import express from 'express';
import livrosController from './controller.js'

const routes = express.Router()

routes.get("/livros", livrosController.lista)

routes.get('/livros/:id', livrosController.listarUm)

export default routes