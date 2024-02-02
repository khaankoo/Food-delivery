import { Request, Response } from "express";
import { UserModel } from "../models/User";
import bcrypt from "bcrypt";

type signUpType = {
  username: string;
  password: string;
  useremail: string;
  address: string;
};

type logInType = {
    email: string;
    password: string;
}

export const signUp = async (req: Request, res: Response) => {
  const { username, password, useremail, address }: Required<signUpType> = req.body;

  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, async function (err, hash) {
    try {
      const result = await UserModel.create({ username, password: hash, useremail, address });
      console.log(result);
      return res.status(201).send({ success: true });
    } catch (error) {
      console.log(error, 'error')
      return res.status(400).send({
        success: false,
        error: {
          msg: "Already existing username",
          code: error,
        },
      });
      // throw new Error(JSON.stringify(error))
    }
  });
};

export const logIn = async (req: Request, res: Response) => {
  try {
    const { useremail, password } : { useremail: string, password: string } = req.body;

    const user: logInType | null = await UserModel.findOne({ useremail });

    if (!user) {
      return res.status(400).send({ success: false, msg: "User not found"})
    }

    bcrypt.compare( password, user.password, async function (err, result) {
      if (!result) {
        return res.send({
          success: false,
          msg: "UserEmail or Password incorrect"
        })
      } else {
        return res.send({ success: true })
      }
    })
  } catch (error) {
    console.log("error");
  }
}