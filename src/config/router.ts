import { Router } from 'express'
import WelcomeController from '../controllers/welcome'

const router = Router()

router
    .get('/', (req, res) => new WelcomeController(req, res).getBasePath())
    .get('/view', (req, res) => new WelcomeController(req, res).getView())

export default router
