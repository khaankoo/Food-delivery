import mongoose from "mongoose";

export const connectDataBase = async () => {
    try {
        const MONGODB = "mongodb+srv://khangerel:khangerelapi123@delivery.qbz9ro4.mongodb.net/?retryWrites=true&w=majority";
        await mongoose.connect(MONGODB);
        console.log("DataBase connection successfull");
    } catch (error) {
        throw new Error("error")
    }
}