import express from "express"
import { getCategory, newCategory } from "../controllers/Category"

const category = express()

category.route("/").post(newCategory)
category.route("/").get(getCategory)

export { category }