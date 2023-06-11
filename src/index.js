import express from 'express'

const app = express()

app.get("/livros", (req, res) => {
  //devolver uma lista de livros

  console.log(req.query)

  if (req.query.categoria === 'acao') {
    return res.json(["livro de acao"])
  }

  const livros = ["livro 1", "livro 2"]

  res.json(livros)
})

app.get('/livros/:id', (req, res) => {

  res.json({ id: req.params.id, nome: "livro tal", categoria: "acao" })
})



app.listen(3000, () => console.log("Servidor rodando na porta 3000"))

export default app
