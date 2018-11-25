export interface DataStore {
    getUser(id: number): Promise<any>;
}