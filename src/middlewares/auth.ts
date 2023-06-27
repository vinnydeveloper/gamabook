import { NextFunction, Request, Response } from "express";
import "dotenv/config"

import JWT from 'jsonwebtoken'

export default function auth(req: Request, res: Response, next: NextFunction){
  const { authorization } = req.headers

  if(!authorization){
    return res.status(401).json("Token não informado")
  }

  const token = authorization.split(" ")

  if(token[0] !== 'Bearer' || token.length < 2){
    return res.status(401).json("Token com formato errado")
  }

  try {
    const payload = JWT.verify(token[1], process.env.APP_TOKEN!)

    if(!payload) {
      return res.status(401).json("Token invalido")
    }
  
     Object.assign(req, {
      user: payload
     })
  
    next()
  } catch (error) {
    return res.status(401).json("Token invalido")
  }

}