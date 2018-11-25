import {createConnection, getManager, getConnection, Index, Connection} from "typeorm";
import {Users} from "../../entity/Users";
import { DataStore } from '../DataStore';
import {BigNumber} from 'bignumber.js';

let connection: Connection

async function keepConnected() {
    if(!connection || !connection.isConnected){
        try {
            if(connection)
                await connection.close()
            connection = await createConnection()
        } catch(err) {
           console.error('DATABASE ERROR: ', err)
        }
    }
}

const eighteenNum = new BigNumber(1000000000000000000);
export class MysqlDataStore implements DataStore{
   
    async getUser(id: number) { 
        await keepConnected()
        const userData = await getManager()
                .createQueryBuilder(Users, "users")
                .where("users.id = :id", { id })
                .getOne();
                console.info('\n User: ', userData)
        return userData;
    }

    async currentDate() {
        const today = new Date();
        const sDate = today.getFullYear() + "-" + this.d2(today.getMonth()+1) + "-" + this.d2(today.getDate()) + " " + this.d2(today.getHours()) + ":" + this.d2(today.getMinutes()) + ":" + this.d2(today.getSeconds());
        return sDate;
    }
    d2(n) {
        if(n<9) return "0"+n;
        return n;
    }
}