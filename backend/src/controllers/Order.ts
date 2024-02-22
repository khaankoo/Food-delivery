import { OrderModel } from "../models/Order";
import { Request, Response } from "express";

const createOrder = async (req: Request, res: Response) => {
    try {
        const table = await OrderModel.create(req.body)
        console.log(table);
        
        return res.status(201).send({ success: true, table})
    } catch (error) {
        console.log(error);
    }
}


export { createOrder }