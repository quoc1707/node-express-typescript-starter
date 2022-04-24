import { join } from 'path'
import BaseController from '../config/controller'

class WelcomeController extends BaseController {
    public getBasePath() {
        this.response.send('Welcome to node-express-typescript-starter server.')
    }
    public getView() {
        this.response.render('index.html')
    }
}

export default WelcomeController
