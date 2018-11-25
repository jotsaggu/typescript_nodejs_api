import { DataStore } from '../data/DataStore';
import { MysqlDataStore } from '../data/mysql/MysqlDataStore';
import { MongodbDataStore } from '../data/mongodb/MongodbDataStore';
import { dbType } from '../configs/config';

export function InjectDbStorage(object: any, propertyName: string) {

    const store: DataStore = (dbType === "mongodb") ? new MongodbDataStore() : new MysqlDataStore();
    const getter = (): DataStore => {
        return store;
    };
    Object.defineProperty(object, propertyName, {
        get: getter
    });
}