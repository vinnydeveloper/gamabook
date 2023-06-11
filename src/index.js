import express from 'express'
import livrosRoutes from './modules/livros/routes.js'

const app = express()

app.use(livrosRoutes)

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))

export default app
