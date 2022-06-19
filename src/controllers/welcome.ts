import BaseController from '../config/controller'

class WelcomeController extends BaseController {
    public getView(path: string) {
        this.response.render(path)
    }
}

export default WelcomeController
