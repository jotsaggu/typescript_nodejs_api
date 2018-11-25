import { DataStore } from '../DataStore';

export class MongodbDataStore implements DataStore{
    public async getProjectContracts(batch: Array<string>): Promise<Array<{}>> {
            return ['1','2'];
    }

    // public async checkDbTransaction(transaction: any, event: any, LoanId: number, eventName: string): Promise<{} | boolean> { 
    //     return false;
    // }

    public async getUser(id: number): Promise<{}> {
        return {status: false};
    }
}