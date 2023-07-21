import express from 'express';
import livrosController from './controller'
import auth from '../../middlewares/auth'
import upload from '../../middlewares/upload';
const routes = express.Router()


routes.post('/livros', upload.single('foto'), livrosController.create)
routes.post('/livros/bulk', upload.single('planilha'), livrosController.bulkCreate)
routes.get("/livros", livrosController.listAll)

routes.get('/livros/:id', livrosController.listarUm)

export default routes