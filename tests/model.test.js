import { connection, syncronize } from "../src/models/ModelSyncronization.js";
// import connection from "../src/db/config/connection.js"

describe('model test', () => {
    beforeEach(async() => {
       await syncronize();
    });
    it('should can insert user',async () => {
        try {
            await connection.authenticate();
        }catch(err) {
            console.log(err.message);
        }
    });
});