import { InjectDbStorage } from "./decorators/InjectDbStorage";
import { DataStore } from "./data/DataStore";

export class DataHelper {
    @InjectDbStorage
    public static dataStore: DataStore;
}
