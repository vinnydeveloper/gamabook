import { Request, Response } from "express";
import bcriptjs from 'bcryptjs'
import "dotenv/config"

import JWT from 'jsonwebtoken'

import db from "../../database";


const authController = {
  async register(req: Request, res: Response){
    const { email, senha } = req.body;

    const hashSenha = bcriptjs.hashSync(senha)

    const newUsuario = await db.usuarios.create({
      data: {
        email,
        senha: hashSenha,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    })

    return res.json(newUsuario)
  },

  async login(req: Request, res: Response){
    const { email, senha } = req.body;

    const user = await db.usuarios.findFirst({where:{ email }})

    if(!user) return res.status(404).json("Usuário não existente")

    if(!bcriptjs.compareSync(senha, user.senha)) 
      return res.status(401).json("Usuário ou senha inválidos")

    const token = JWT.sign({
      id: user.id,
      email: user.email
    }, process.env.APP_TOKEN!)

    return res.json(token)
  }
}

export default authController