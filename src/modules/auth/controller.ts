import { Request, Response } from "express";
import bcriptjs from 'bcryptjs'
import "dotenv/config"

import JWT from 'jsonwebtoken'

import db from "../../database";
import HASH_SALT from "../../constants/hashSalt";
import logger from "../../infra/logger";
import createTimestamp from "../../helpers/createTimestamp";


const authController = {
  async register(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;

      const timestamp = createTimestamp()
      const hashSenha = bcriptjs.hashSync(senha, HASH_SALT.VALUE)

      const existsEmail = await db.usuarios.count({ where: { email } })

      if (existsEmail) {
        return res.status(400).json("this email exists")
      }

      const newUsuario = await db.usuarios.create({
        data: {
          email,
          senha: hashSenha,
          ...timestamp
        }
      })

      return res.status(201).json(newUsuario)
    } catch (error) {
      return res.status(500).json(error)
    }

  },

  async login(req: Request, res: Response) {

    try {

      const { email, senha } = req.body;
      logger.info("Inicio da autenticação do email: " + email)

      const user = await db.usuarios.findFirst({ where: { email } })

      if (!user) return res.status(404).json("Usuário não existente")

      if (!bcriptjs.compareSync(senha, user.senha))
        return res.status(401).json("Usuário ou senha inválidos")

      const token = JWT.sign({
        id: user.id,
        email: user.email
      }, process.env.APP_TOKEN!)

      logger.info("Finalizando autenticação com sucesso: " + email)
      return res.json(token)
    }
    catch (error) {
      logger.error("Erro na autenticação")

      return res.status(500).json("Erro na autenticação")
    }
  }
}

export default authController