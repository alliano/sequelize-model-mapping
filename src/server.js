import express from "express";
import { connection } from "./models/ModelSyncronization.js";
const app = new express();
const port = 3000;

app.get("/", async(req, resp) => {
    connection.authenticate().then(res => resp.send("Database successfuly connected...")).catch(err => resp.send("Database failed to connect..."));
});
app.listen(port, async() => {
    console.log(`The server running on http://localhost:${port}`);
});