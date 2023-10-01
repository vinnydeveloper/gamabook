import IConteudoTexto from "./IConteudoTexto"
import ILivros from "./ILivro"

export default class Livro implements ILivros, IConteudoTexto {

  titulo: string
  ano_lancamento: number
  autor: string
  categoria_id: number
  fileOriginalname: string
  pagina: number
  conteudo: string

  constructor(titulo: string, ano_lancamento: number, autor: string, categoria_id: number, fileOriginalname: string, pagina: number, conteudo: string) {

    this.titulo = titulo
    this.ano_lancamento = ano_lancamento
    this.autor = autor
    this.categoria_id = categoria_id
    this.fileOriginalname = fileOriginalname
    this.pagina = pagina
    this.conteudo = conteudo

  }

}