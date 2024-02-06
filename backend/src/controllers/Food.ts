import { FoodModel } from "../models/Food"
import { Request, Response } from "express"

export const newFood = async (req: Request, res: Response) => {
    try {
        await FoodModel.create(req.body)
        return res.status(201).send({ success: true })
    } catch (error) {
        console.log(error);
    }
}
