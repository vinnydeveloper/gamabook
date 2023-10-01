import ITranslateService from "./ITranslateService";
import Livro from "./Livro";

export default class TranslateLivro extends Livro {

  trasnlateService: ITranslateService

  constructor(titulo: string, ano_lancamento: number, autor: string, categoria_id: number, fileOriginalname: string, trasnlateService: ITranslateService) {

    super(titulo, ano_lancamento, autor, categoria_id, fileOriginalname, 10, 'lorem')


    this.trasnlateService = trasnlateService

  }

  async setLivroTranslatedEN() {
    const tituloEN = await this.trasnlateService.translate(this.titulo, { to: 'pt-BR', from: 'en' })

    this.titulo = tituloEN
  }

}