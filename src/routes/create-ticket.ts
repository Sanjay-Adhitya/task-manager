import express, { Request, Response } from "express";
import { createTicket } from "../controllers/create-ticket-con";
const router = express.Router();

router.post("/api/ticket", async (req: Request, res: Response) => {
    try {
        const { name, description, ticstatus,
             asigneeName, reporterName } = req.body;
        const createdDate = String(new Date().getTime())
        const timeline = [createdDate]
        const responceAfterSaving = await createTicket(name, description, ticstatus,
                                                createdDate, undefined,
                                                undefined, 0,
                                                timeline, undefined, 
                                                asigneeName
                                                ,reporterName);
        res.send({message:responceAfterSaving.message,id:responceAfterSaving.id});
    } catch (error) {
        console.log(error);
    }
})

export {router as TicketCreateRouter};