import mongoose from "mongoose";
export const startDb = async () => {
    try {
        try {
           await mongoose.connect("mongodb://localhost:27017/idev-auth-1");
        } catch (error) {
           await mongoose.connect(process.env.URI!); 
        }
        console.log("Connected to mongo db !!!");
    } catch (error) {
        console.log(error);
    }
};
startDb()