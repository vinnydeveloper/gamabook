import express from 'express'
import livrosRoutes from './modules/livros/routes.js'
import categoriasRoutes from './modules/categorias/routes.js'

const app = express()

app.use(express.json())

app.use(livrosRoutes)
app.use(categoriasRoutes)

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))

export default app
