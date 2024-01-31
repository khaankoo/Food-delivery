import { Request, Response } from "express";
import { UserModel } from "../models/User";
import bcrypt from "bcrypt";

type signUpType = {
  username: string;
  password: string;
  useremail: string;
  address: string;
};

// type logInType = {
//     email: string;
//     password: string;
// }

export const signUp = async (req: Request, res: Response) => {
  try {
    const { username, password, useremail, address }: Required<signUpType> =
      req.body;

    const saltRound = 10;
    const hash = bcrypt.hash(password, saltRound, async function (err, hash) {
      return hash;
    });

    const result = await UserModel.create({
      username,
      password: hash,
      useremail,
      address,
    });
    console.log(result);
    return res.status(201).send({ success: true });
  } catch (error: any) {
    if ((error.code = 11000)) {
      return res.status(400).send({
        success: false,
        error: "already existing username",
        code: error.code
      });
    }
    return res.status(400).send({ success: false, error: "invalid request" });
  }
};