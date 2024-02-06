import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    name: String,
    Image: String,
    ingeredient: String,
    price: {
        type: Number,
        required: true
    },
    Discount: {
        type: Number,
        default: 0
    }
})

const FoodModel = mongoose.model('food', FoodSchema)

export { FoodModel }