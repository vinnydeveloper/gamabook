import { Request, Response } from 'express'
import db from '../../database/index'

const categoriaController = {
  async create(req: Request, res: Response) {
    const { nome } = req.body
    try {
      if (!nome) {
        return res.status(400).json("O atributo nome é obrigátorio")
      }

      // insert no banco
      const novaCacategoria = await db.categoria.create({
        data: { nome, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
      })

      return res.json(novaCacategoria)
    } catch (error) {
      console.error(error)
      return res.status(500).json("Aconteceu um erro no servidor")
    }
  },

  async listAll(req: Request, res: Response) {
    try {
      //select no banco
      const categorias = await db.categoria.findMany()
      return res.json(categorias)
    } catch (error) {
      console.error(error)
      return res.status(500).json("Aconteceu um erro no servidor")
    }
  },

  async listOne(req: Request, res: Response) {
    try {
      //select no banco
      const categoria = await db.categoria.findUnique({ where: { id: Number(req.params.id) } })
      return res.json(categoria)
    } catch (error) {
      console.error(error)
      return res.status(500).json("Aconteceu um erro no servidor")
    }
  },
  async update(req: Request, res: Response) {

    const { id } = req.params
    const { nome } = req.body

    try {

      const updatedCategoria = await db.categoria.update({
        where: {
          id: Number(id)
        },
        data: {
          nome
        }
      })

      return res.json(updatedCategoria)

    } catch (error) {
      console.error(error)
      return res.status(500).json("Aconteceu um erro no servidor")
    }
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params

    try {

      await db.categoria.delete({
        where: {
          id: Number(id)
        }
      })

      res.sendStatus(204)
    } catch (error) {
      console.error(error)
      return res.status(500).json("Aconteceu um erro no servidor")
    }
  }
}

export default categoriaController