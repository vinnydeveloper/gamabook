import livrosModel from './model.js'

const livrosController = {
  lista(req, res) {
    //devolver uma lista de livros

    const livros = livrosModel.select()

    res.json(livros)
  },

  listarUm(req, res) {
    const livro = livrosModel.selectOne(req.params.id)
    res.json(livro)
  }
}

export default livrosController