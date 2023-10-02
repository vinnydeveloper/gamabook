import 'dotenv/config'
import supertest from 'supertest'
import app from '../../'

export const mockServer = supertest(app)