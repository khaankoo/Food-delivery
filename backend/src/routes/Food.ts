import express from "express";
import { getAllFood, newFood } from "../controllers/Food";

const food = express.Router()

food.route('/food').post(newFood)
food.route('/getfood').get(getAllFood)

export { food }