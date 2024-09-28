import { Router } from "express";
import { createBusinessHandler, getBusinessByIdHandler } from "./controller";

const router = Router();

router.get("/:id", getBusinessByIdHandler);
router.post("/", createBusinessHandler);

export default router;
