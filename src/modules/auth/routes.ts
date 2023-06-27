import express from 'express';
import authController from './controller'


const routes = express.Router()

routes.post('/registro',  authController.register)
routes.post('/login',  authController.login)


export default routes