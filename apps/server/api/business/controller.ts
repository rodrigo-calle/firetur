import { Request, Response } from "express";
import { businessCreateSchema } from "../../db/schemas/business";
import { createBusiness, getBusinessById } from "./services";

export const createBusinessHandler = async (req: Request, res: Response) => {
  try {
    const bodyValidation = businessCreateSchema.safeParse(req.body);
    if (!bodyValidation.success) {
      return res
        .status(400)
        .send({ message: "Bad Request", error: bodyValidation.error });
    }

    const business = await createBusiness(bodyValidation.data);
    return res.status(201).send({ business });
  } catch (error) {
    console.log({ error });
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export const getBusinessByIdHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const business = await getBusinessById(Number(id));
    return res.status(200).send({ business });
  } catch (error) {
    console.log({ error });
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
