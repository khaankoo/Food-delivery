import express from "express";
import { getAllFood, newFood } from "../controllers/Food";

const food = express.Router()

food.route('/newfood').post(newFood)
food.route('/getfood').get(getAllFood)

export { food }