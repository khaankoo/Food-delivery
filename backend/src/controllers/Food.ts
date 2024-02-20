import { FoodModel } from "../models/Food"
import { Request, Response } from "express"
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dtfqcv8qa', 
  api_key: '849869737566728', 
  api_secret: 'L1O13pjTqzFUacO_l2OnZ9-jH2U' 
});

export const newFood = async (req: Request, res: Response) => {
    try {
        const table = await FoodModel.create(req.body)
        cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
            { public_id: "olympic_flag" }, 
            function(error, result) {console.log(result); });
        return res.status(201).send({ success: true, table })
    } catch (error) {
        console.log(error);
    }
}

export const getAllFood = async (req: Request, res: Response) => {
    try {
        const table = await FoodModel.find(req.body)
        return res.status(200).send({ success: true, table })
    } catch (error) {
        console.log(error);
    }
}