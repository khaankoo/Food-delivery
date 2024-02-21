import { OrderModel } from "../models/Order";
import { Request, Response } from "express";

export const newOrder = async (req: Request, res: Response) => {
    try {
        await OrderModel.create(req.body)
        return res.status(201).send({ success: true })
    } catch (error) {
        console.log(error);
        res.status(500).send(error)    
    }
}