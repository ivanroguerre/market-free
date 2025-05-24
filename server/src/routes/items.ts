import { Router } from "express";

import {
  searchProductsByName,
  searchProductsByCategory,
  searchProductsById,
} from "@/controllers/items";

export const itemsRouter = Router();

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Search products by name
 *     description: Search for products using a query string
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: Number of items to skip
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items to return
 *     responses:
 *       200:
 *         description: List of products matching the search query
 */
itemsRouter.get("/", searchProductsByName); // GET /api/items?q=:query&offset=:offset&limit=:limit

/**
 * @swagger
 * /api/items/category:
 *   get:
 *     summary: Search products by category
 *     description: Get products from a specific category
 *     parameters:
 *       - in: query
 *         name: categoryId
 *         schema:
 *           type: string
 *         required: true
 *         description: Category ID
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: Number of items to skip
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items to return
 *     responses:
 *       200:
 *         description: List of products in the specified category
 */
itemsRouter.get("/category", searchProductsByCategory); // GET /api/items/category?categoryId=:id&offset=:offset&limit=:limit

/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Get product by ID
 *     description: Retrieve detailed information about a specific product
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Detailed product information
 *       404:
 *         description: Product not found
 */
itemsRouter.get("/:id", searchProductsById); // GET /api/items/:id
