import express from 'express';
import { startDb } from './utils/db';
import { json } from "body-parser";
import { TicketCreateRouter } from './routes/create-ticket';
const app = express();
app.use(json())
app.use(TicketCreateRouter)
startDb();

app.listen(3000,() => {
    console.log("connected to 3000");
})