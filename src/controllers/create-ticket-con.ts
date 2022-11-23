import { TicketModel } from "../models/ticket";
import { v4 as uuidv4 } from 'uuid';

export const createTicket = async (
    name:string, description:string|undefined, ticstatus:string,
    createdDate:string, updatedDate:string|undefined,
    completedDate:string|undefined, numberOfTime:number,
    timeline:string[], projectName:string|undefined, asigneeName:string
    , reporterName:string
) => {
   try{ 
    const ticketUuid = uuidv4()
    const one = new TicketModel({   name: name, ticstatus: ticstatus, createdDate:createdDate, 
                                        updatedDate: updatedDate, completedDate: completedDate, 
                                        numberOfTime: numberOfTime, timeline: timeline, 
                                        asigneeName: asigneeName, reporterName: reporterName, 
                                        description: description, projectName: projectName,ticketUuid:ticketUuid});
    one.save();
    return {message:"success",ticketname:name,id:ticketUuid};
    }
    catch(error){
        console.log(error);
        return {message:"error",ticketname:name};
    }
}