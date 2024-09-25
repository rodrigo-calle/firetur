import { placeCreateSchema } from "../../db/schemas/place";
import { Request, Response } from "express";
import { createPlace, getPlaces } from "./services";

export const getPlacesHandler = async (req: Request, res: Response) => {
  try {
    const places = await getPlaces();
    return res.status(200).send({ places });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
export const createPlaceHandler = async (req: Request, res: Response) => {
  try {
    const bodyValidation = placeCreateSchema.safeParse(req.body);

    if (!bodyValidation.success) {
      return res
        .status(400)
        .send({ message: "Bad Request", error: bodyValidation.error });
    }

    const place = await createPlace(bodyValidation.data);

    return res.status(201).send({ place });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
