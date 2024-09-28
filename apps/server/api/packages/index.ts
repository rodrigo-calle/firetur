import { Router } from "express";
import { createPackageHandler, getPackageByIdHandler } from "./controller";

const router = Router();

router.get("/:id", getPackageByIdHandler);
router.post("/", createPackageHandler);
export default router;
