import express, { Request, Response, NextFunction } from 'express'
import 'dotenv/config'
import livrosRoutes from './modules/livros/routes'
import categoriasRoutes from './modules/categorias/routes'

import authRoutes from './modules/auth/routes'

import requestLog from './middlewares/requestLog'
import { ValidationError } from 'express-validation'
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))

app.use(requestLog)
app.use(livrosRoutes)
app.use(categoriasRoutes)
app.use(authRoutes)

app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  return res.status(500).json(err)
})

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))

export default app
