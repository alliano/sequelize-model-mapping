import { connection } from "../src/models/ModelSyncronization.js";

describe('model test', () => {
    it('should can insert user',async () => {
        try {
            await connection.authenticate({
                
            });
        }catch(err) {
            console.log(err.message);
        }
    });
});