import placeRouter from "./api/places/index";
import businessRouter from "./api/business/index";
import packageRouter from "./api/packages/index";
import { Express } from "express";

export const routes = (app: Express) => {
  app.use("/api/v1/places", placeRouter);
  app.use("/api/v1/business", businessRouter);
  app.use("/api/v1/packages", packageRouter);
};
