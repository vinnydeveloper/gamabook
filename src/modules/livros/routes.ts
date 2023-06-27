import express from 'express';
import livrosController from './controller'
import auth from '../../middlewares/auth'
const routes = express.Router()


routes.post('/livros', livrosController.create)
routes.get("/livros", auth, livrosController.listAll)

routes.get('/livros/:id', livrosController.listarUm)

export default routes