/*import { logAwsAccesskeyID, logAwsSecretAccesskey, logAwsRegion } from "../configs/config";

class Logger {
    private readonly lawgs = require('lawgs');
    private logger;

    constructor(logName: string) {
        this.lawgs.config({
            aws: {
                accessKeyId: logAwsAccesskeyID, 
                secretAccessKey: logAwsSecretAccesskey, 
                region: logAwsRegion
            }
        });
        this.logger = this.lawgs.getOrCreate(logName);
        this.logger.config({
            showDebugLogs: true,
            uploadMaxTimer: 30000, 
            uploadBatchSize: 120
        });
    }

    public log(messageType: 'message' | 'error' | 'debug', logBody: object) {
        switch(messageType) {
            case 'error':
                console.info('\x1b[31m%s\x1b[0m', messageType, new Date().toISOString().replace(/:/g, '.').replace(/-/g, ''), logBody);
                break;
            default:
                console.info('\x1b[32m%s\x1b[0m', messageType, new Date().toISOString().replace(/:/g, '.').replace(/-/g, ''), logBody);
        }
        
        this.logger.log(messageType, logBody);
    }

}

export default Logger*/

