import IConteudoAudio from "./IConteudoAudio";
import ILivros from "./ILivro";

export default class AudioLivro implements ILivros, IConteudoAudio {
  titulo: string;
  ano_lancamento: number;
  autor: string;
  categoria_id: number;
  fileOriginalname: string;
  duracao: number;
  formatoAudio: string;

  constructor(titulo: string, ano_lancamento: number, autor: string, categoria_id: number, fileOriginalname: string, duracao: number, formatoAudio: string) {

    this.titulo = titulo
    this.ano_lancamento = ano_lancamento
    this.autor = autor
    this.categoria_id = categoria_id
    this.fileOriginalname = fileOriginalname
    this.duracao = duracao
    this.formatoAudio = formatoAudio

  }

}