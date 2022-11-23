import mongoose from "mongoose";

const TiketShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    ticstatus: {
        type: String,
        required: true
    },
    createdDate: {
        type: String,
        required: true
    },
    updatedDate: {
        type: String,
        required: false
    },
    completedDate: {
        type: String,
        required: false
    },
    numberOfTime: {
        type: Number,
        required: true
    },
    timeline: {
        type: [String],
        required: true
    },
    projectName: {
        type: String,
        required: false
    },
    asigneeName: {
        type: String,
        required: true
    },
    reporterName: {
        type: String,
        required: true
    },
    ticketUuid: {
        type: String,
        required: true
    }
})

export const TicketModel = mongoose.model("TickerModel", TiketShema);

