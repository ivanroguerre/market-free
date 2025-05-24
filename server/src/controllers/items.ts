import { Request, Response } from "express";

import { PlatziFakeStoreClient } from "@/services/api/platzi-fake-store";

const client = new PlatziFakeStoreClient(
  process.env.PLATZI_FAKE_STORE_API_URL || "https://api.escuelajs.co"
);

export const searchProductsByName = async (req: Request, res: Response) => {
  try {
    const { q: title, offset, limit } = req.query;
    const items = await client.searchProductsByName(
      title as string,
      Number(offset) || 0,
      Number(limit) || 4
    );
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Error buscando productos por nombre" });
  }
};

export const searchProductsByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId, offset, limit } = req.query;
    const items = await client.searchProductsByCategory(
      Number(categoryId),
      Number(offset) || 0,
      Number(limit) || 4
    );
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Error buscando productos por categoría" });
  }
};

export const searchProductsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await client.searchProductsById(id);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Error buscando producto por id" });
  }
};
