import { Router } from 'express'
import WelcomeController from '../controllers/welcome'

interface IRouter {
    path: string
    view: string
}

const router = Router()
const predefined: IRouter[] = [
    {
        path: '',
        view: 'index.html',
    },
]

predefined.forEach(({ path, view }) => {
    router.get(`/${path}`, (req, res) =>
        new WelcomeController(req, res).getView(view)
    )
})

export default router
