import { ApiController } from '../controller/apiController'

const apiController = new ApiController()

export const rountes = (app: any) => {
    app.route('/user/:id')
        .get(apiController.getuser);
}