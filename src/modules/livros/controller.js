import db from '../../database/index.js'

const livrosController = {

  async create(req, res) {
    const { titulo, ano_lancamento, autor, categoria_id } = req.body

    try {
      const newLivro = await db.livros.create({
        data: {
          titulo,
          ano_lancamento: new Date(ano_lancamento).toISOString(),
          autor,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          categorias: {
            connect: {
              id: Number(categoria_id)
            }
          }
        }
      })

      return res.json(newLivro)
    } catch (error) {
      console.error(error)
      return res.status(500).json("Aconteceu um erro no servidor")
    }
  },
  async listAll(req, res) {
    try {
      const livros = await db.livros.findMany({
        include: {
          categorias: true
        }
      })

      return res.json(livros)
    } catch (error) {
      console.error(error)
      return res.status(500).json("Aconteceu um erro no servidor")
    }

  },

  listarUm(req, res) {

  }
}

export default livrosController