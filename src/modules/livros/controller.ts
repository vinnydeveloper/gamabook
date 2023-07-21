import { Request, Response } from 'express'
import xlxs from 'xlsx'
import path from 'path'
import db from '../../database/index'

const livrosController = {

  async create(req: Request, res: Response) {

    const { titulo, ano_lancamento, autor, categoria_id } = req.body
    const { file } = req


    if (!file || !file.originalname) {
      return res.status(400).json("A foto é obrigátoria")
    }

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
          },
          fotos: {
            create: {
              url: file?.originalname,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
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
  async listAll(req: Request, res: Response) {
    console.log(req.user)
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

  listarUm(req: Request, res: Response) {

  },

  async bulkCreate(req: Request, res: Response) {
    const { file } = req
    if (!file || !file.originalname) {
      return res.status(400).json("A planilha é obrigátoria")
    }
    const arquivo = xlxs.readFile(path.resolve('public', file?.filename))

    const dados = xlxs.utils.sheet_to_json(arquivo.Sheets[arquivo.SheetNames[0]])


    const dadosMap = dados.map((livro: any) => ({
      titulo: livro.nome_livro,
      ano_lancamento: new Date(livro.ano).toISOString(),
      autor: livro.autor,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }))

    const newLivros = await db.livros.createMany({ data: dadosMap })

    return res.json(newLivros)
  }
}

export default livrosController