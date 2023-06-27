import { Joi, validate } from "express-validation";

export default validate({
  body: Joi.object({
    nome: Joi.string().required()
  })
})