import { Request, Response } from "express";
import { packageCreateSchema } from "../../db/schemas/packages";
import { createPackage, getPackageById } from "./services";

export const createPackageHandler = async (req: Request, res: Response) => {
  try {
    const bodyValidation = packageCreateSchema.safeParse(req.body);
    if (!bodyValidation.success) {
      return res
        .status(400)
        .send({ message: "Bad Request", error: bodyValidation.error });
    }

    const packageCreated = await createPackage(bodyValidation.data);
    return res.status(201).send({ packageCreated });
  } catch (error) {
    console.log({ error });
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export const getPackageByIdHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const touristicPackage = await getPackageById(Number(id));
    return res.status(200).send({ package: touristicPackage });
  } catch (error) {
    console.log({ error });
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
