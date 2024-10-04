import { Router } from "express";
import { createBusinessHandler, getBusinessByIdHandler } from "./controller";
import { authenticateToken } from "../../middleware/authorization";

const router = Router();

router.get("/:id", authenticateToken, getBusinessByIdHandler);
router.post("/", authenticateToken, createBusinessHandler);

export default router;
