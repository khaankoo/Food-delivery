import { FoodModel } from "../models/Food"
import { Request, Response } from "express"
import {v2 as cloudinary} from 'cloudinary';
const timestamp = new Date().toISOString().replace(/:/g, '-');
const randomString = Math.random().toString(36).substring(7);
const public_id = `food_${timestamp}_${randomString}`;
          
cloudinary.config({ 
  cloud_name: 'dtfqcv8qa', 
  api_key: '849869737566728', 
  api_secret: 'L1O13pjTqzFUacO_l2OnZ9-jH2U' 
});

const newFood = async (req: Request, res: Response) => {
    try {
        const cloudinaryResponse = cloudinary.uploader.upload(req.body.image,
            { 
                folder: 'food',
                public_id: "public_id" 
            });
        const table = await FoodModel.create({
            name: req.body.name,
            ingredient: req.body.ingredient,
            price: req.body.price,
            image: cloudinaryResponse,
            discount: req.body.discount
        })
        return res.status(201).send(table)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getFood = async (req: Request, res: Response) => {
    try {
        const table = await FoodModel.findOne(req.body)
        res.status(200).send({ success: true, table })
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllFood = async (req: Request, res: Response) => {
    try {
        const table = await FoodModel.find(req.body)
        return res.status(200).send({ success: true, table })
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateFood = async (req: Request, res: Response) => {
    const { name } = req.body
    try {
        const updateFood = req.params.id
        const updateOneFood = await FoodModel.findByIdAndUpdate(updateFood, { name: name })
        res.status(200).send({ success: true, updateOneFood }) 
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteFood = async (req: Request, res: Response) => {
    const { name } = req.body
    try {
        const deleteFood = req.params.id
        const deleteOneFood = await FoodModel.findByIdAndUpdate( deleteFood, { name: name })
        res.status(200).send({ success: true, deleteOneFood }) 
    } catch (error) {
        res.status(500).send(error)
    }
}

export { getAllFood, newFood, updateFood, deleteFood, getFood }