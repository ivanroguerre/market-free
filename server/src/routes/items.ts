import { Router } from "express";
import { getItems } from "@/controllers/items";

const router = Router();

router.get("/", getItems); // Corresponds to /api/items?q=:query

export default router;
