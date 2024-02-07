import express from "express";
import { newOrder } from "../controllers/Order";

const order = express.Router();

order.route('/').post(newOrder);

export { order }