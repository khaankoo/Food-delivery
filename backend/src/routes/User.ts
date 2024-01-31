import express from "express";
import { signUp } from "../controllers/User";

const user = express.Router();

user.route("/signUp").post(signUp)

export { user }