import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { userCreateSchema } from "../../db/schemas/users";
import { loginSchema } from "../../db/schemas/auth";
import { getUserByEmail } from "../users/services";
import { register } from "./services";

export const registerUserHandler = async (req: Request, res: Response) => {
  try {
    const bodyValidation = userCreateSchema.safeParse(req.body);

    if (!bodyValidation.success) {
      return res.status(400).send({
        message: "Bad Request",
        error: bodyValidation.error,
      });
    }

    const userExists = await getUserByEmail(bodyValidation.data.email);
    if (userExists) {
      return res.status(409).send({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(bodyValidation.data.password, 10);

    const user = await register({
      ...bodyValidation.data,
      password: hashedPassword,
    });

    return res.status(201).send({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export const loginUserHandler = async (req: Request, res: Response) => {
  try {
    const bodyValidattion = loginSchema.safeParse(req.body);
    if (!bodyValidattion.success) {
      return res.status(400).send({
        message: "Bad Request",
        error: bodyValidattion.error,
      });
    }

    const user = await getUserByEmail(bodyValidattion.data.email);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(
      bodyValidattion.data.password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    const SECRET = process.env.SECRET;
    const SESSION_EXPIRES_IN = process.env.SESSION_EXPIRES_IN;
    if (!SECRET) {
      // TODO: Handler better errors
      console.log("Can't find SECRET in .env file");
      return res.status(500).send({ message: "Internal Server Error" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      SECRET, // TODO: add to env variables
      {
        expiresIn: SESSION_EXPIRES_IN || "1h",
      }
    );

    return res.status(200).send({ token });
  } catch (error) {
    console.log({ error });
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
