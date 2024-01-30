import mongoose from "mongoose";

const Username = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
})