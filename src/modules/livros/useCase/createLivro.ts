import IUseCase from "../../../infra/core/IUseCase"
import LivroRepository from "../../../repositories/livro/LivroRepository"
import AudioLivro from "../AudioLivro"
import ILivros from "../ILivro"
import Livro from "../Livro"
import CreatePayload from "./dto/CreatePayload"



export default class CreateLivro implements IUseCase<CreatePayload> {
  livroRepository: LivroRepository

  constructor(livroRepository: LivroRepository) {
    this.livroRepository = livroRepository
  }

  async execute(payload: any) {

    const livro = new Livro(payload.titulo, payload.ano_lancamento, payload.autor, payload.categoria_id, payload.fileOriginalname, payload.pagina, payload.conteudo)


    const newLivro = this.livroRepository.saveLivro(livro)

  }
}