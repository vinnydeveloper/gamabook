import { PrismaClient } from "@prisma/client";

import ILivros from "../../modules/livros/ILivro";


export default class LivroRepository {

  db: PrismaClient

  constructor(db: PrismaClient) {
    this.db = db
  }


  async saveLivro(livro: ILivros) {

    try {
      const newLivro = await this.db.livros.create({
        data: {
          titulo: livro.titulo,
          ano_lancamento: new Date(livro.ano_lancamento).toISOString(),
          autor: livro.autor,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          categorias: {
            connect: {
              id: Number(livro.categoria_id)
            }
          },
          fotos: {
            create: {
              url: livro.fileOriginalname,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            }
          }

        }
      })

      return newLivro

    } catch (error) {
      throw new Error("Livro não salvo no banco");
    }

  }

}