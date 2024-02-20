import { Request, Response } from "express";
import { CategoryModel } from "../models/Category";

export const newCategory = async (req: Request, res: Response) => {
    try {
        await CategoryModel.create(req.body)
        return res.status(201).send({ success: true })
    } catch (error) {
        console.log(error);
    }
}

export const getCategory = async (req: Request, res: Response) => {
    try {
        const table = await CategoryModel.find(req.body)
        return res.status(200).send({ success: true, table })
    } catch (error) {
        console.log(error);
    }
}