import { Router } from "express";
import { createPackageHandler, getPackageByIdHandler } from "./controller";
import { authenticateToken } from "../../middleware/authorization";
const router = Router();

router.get("/:id", authenticateToken, getPackageByIdHandler);
router.post("/", createPackageHandler);
export default router;
