import { Users } from "../entity/Users";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export const version = '0.1.0'
export const dbType: string = 'mysql'; // 'mongodb'
export const smtpConfig = {
                            host: 'smtp.mailgun.org', //'smtp.gmail.com',
                            port: 465,
                            secure: true, // true for 465, false for other ports
                            auth: {
                                user: 'postmaster@fundyourselfnow.com', // 'sathya@syllogic.in', // generated ethereal user
                                pass: '5e0bd9f486a8de1dcd41dec652ed0292', //'ganapathi20122012' // generated ethereal password
                            }
                        };

export const mysql: () => MysqlConnectionOptions = () => ({
	name: Math.random().toString(36).substring(7),
	type: "mysql",
	host: "katalyse-io.crnqqlilk5rh.ap-southeast-1.rds.amazonaws.com",
	port: 3306,
	username: "root",
	password: "6^1|471ks=+L+-K==c%84C22:86HMGVK",
	database: "katalyse_io",
	synchronize: false,
	logging: false,
	entities: [
		Users
	]
})