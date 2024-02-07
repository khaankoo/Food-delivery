import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    userId: ObjectId,
    orderNumber: Number,
    foods: Array,
    totalPrice: {
        type: Number,
        int: Number
    },
    process: String,
    createdDate: Date,
    district: String,
    Khoroo: String,
    Apartment: String
})

const OrderModel = mongoose.model('order', OrderSchema)

export { OrderModel }