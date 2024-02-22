import express from "express";
import { createOrder } from "../controllers/Order";

const order = express.Router();

order.route('/').post(createOrder);

export { order }