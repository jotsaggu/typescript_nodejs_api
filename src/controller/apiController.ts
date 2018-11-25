import { DataHelper } from '../DataHelper'

export class ApiController {
    public getuser = async (req: any, res: any) => {
        const userId = req.params.id
        console.info('úser_id: ', req.params.id)
        const data = await DataHelper.dataStore.getUser(userId)
        res.send({'user':  data})
    }
}
