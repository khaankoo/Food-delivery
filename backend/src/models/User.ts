import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    useremail: {
        type: String,
        unique: true
    },
    password: String,
    avatarImage: Buffer,
    address: String,
    role: {
        type: String,
        enum: ["Админ", "Хэрэглэгч"]
    }
})

const UserModel = mongoose.model('User', UserSchema)

export { UserModel }