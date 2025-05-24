import { Router } from "express";
import {
  searchProductsByName,
  searchProductsByCategory,
  searchProductsById,
} from "@/controllers/items";

const router = Router();

// Search products by name
router.get("/", searchProductsByName); // GET /api/items?q=:query&offset=:offset&limit=:limit

// Search products by category
router.get("/category", searchProductsByCategory); // GET /api/items/category?categoryId=:id&offset=:offset&limit=:limit

// Get product by ID
router.get("/:id", searchProductsById); // GET /api/items/:id

export default router;
