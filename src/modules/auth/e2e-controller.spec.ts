import db from "../../database"
import createTimestamp from "../../helpers/createTimestamp"
import { mockServer } from "../../infra/tests/mockServer"
import { clearDatabase } from "../../infra/tests/scenario"

describe('E2E - Module Auth', () => {

  beforeEach(async () => {
    await clearDatabase()
  })

  describe('Register', () => {

    it("should insert new user", async () => {

      const response = await mockServer.post('/registro').send({
        email: 'vinny@email.com',
        senha: '123'
      })

      expect(response.status).toEqual(201)
      expect(response.body).toBeTruthy()
      expect(response.body.id).not.toBeFalsy()
      expect(response.body.email).toEqual('vinny@email.com')
    })

    it("should not insert duplicated user", async () => {
      const timestamp = createTimestamp()
      await db.usuarios.create({
        data: {
          email: 'vinny@email.com',
          senha: '123',
          ...timestamp
        }
      })

      const response = await mockServer.post('/registro').send({
        email: 'vinny@email.com',
        senha: '123'
      })

      expect(response.status).toEqual(400)
    })


  })
  describe('Login', () => { })
})