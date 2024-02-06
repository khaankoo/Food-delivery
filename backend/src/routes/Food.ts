import express from "express";
import { newFood } from "../controllers/Food";

const food = express.Router()

food.route('/food').post(newFood)

export { food }