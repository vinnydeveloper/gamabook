const livrosModel = {
  select() {
    return ["livro 1", "livro 2"]
  },

  selectOne(id:string) {
    return { id: id, nome: "livro tal", categoria: "acao" }
  }
}

export default livrosModel