import express from "express";
import { logIn, signUp } from "../controllers/User";

const user = express.Router();

user.route("/signUp").post(signUp);
user.route("/logIn").post(logIn)

export { user }