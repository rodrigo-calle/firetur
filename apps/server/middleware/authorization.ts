import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .send({ message: "No token provided or incorrect format" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("No authorized");
  }

  const SECRET = process.env.SECRET;

  if (!SECRET) {
    // TODO: Handler better errors
    console.log("Can't find SECRET in .env file");
    return res.status(500).send({ message: "Internal Server Error" });
  }

  jwt.verify(token, SECRET, (err, user) => {
    if (err) {
      return res.status(403).send({ message: "Invalid token" });
    }
    next();
  });
};
