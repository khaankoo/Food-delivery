import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: String,
    foodId: {
        objectId: ObjectId
    }
})

const CategoryModel = mongoose.model('Category', CategorySchema)

export { CategoryModel }