import placeRouter from "./api/places/index";
import { Express } from "express";

export const routes = (app: Express) => {
  app.use("/api/v1/places", placeRouter);
};
