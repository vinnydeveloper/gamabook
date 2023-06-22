import express from 'express'
import livrosRoutes from './modules/livros/routes.js'
import categoriasRoutes from './modules/categorias/routes.js'
import requestLog from './middlewares/requestLog.js'
import { ValidationError } from 'express-validation'
const app = express()

app.use(express.json())

app.use(requestLog)
app.use(livrosRoutes)
app.use(categoriasRoutes)

app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  return res.status(500).json(err)
})

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))

export default app
