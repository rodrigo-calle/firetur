import { Router } from "express";
import { createPlaceHandler, getPlacesHandler } from "./controller";

const router = Router();

router.get("/", getPlacesHandler);
router.post("/", createPlaceHandler);


export default router;
