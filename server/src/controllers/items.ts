import { Request, Response } from "express";

import { ApiError, PlatziFakeStoreClient } from "@/services/api";

import {
  getCategoriesFromProducts,
  transformToItem,
  transformToItemDetail,
} from "@/utils";

const client = new PlatziFakeStoreClient(
  process.env.PLATZI_FAKE_STORE_API_URL || "https://api.escuelajs.co"
);

export const searchProductsByName = async (req: Request, res: Response) => {
  try {
    const { q: title, offset, limit } = req.query;
    const products = await client.searchProductsByName(
      title as string,
      Number(offset) || 0,
      Number(limit) || 4
    );
    const categories = getCategoriesFromProducts(products);
    const items = products.map((product) =>
      transformToItem(product, categories)
    );
    res.json(items);
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.status).json(error.body);
    } else {
      res.status(500).json({ error: "Error buscando productos por nombre" });
    }
  }
};

export const searchProductsByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId, offset, limit } = req.query;
    const products = await client.searchProductsByCategory(
      Number(categoryId),
      Number(offset) || 0,
      Number(limit) || 4
    );
    const categories = getCategoriesFromProducts(products);
    const items = products.map((product) =>
      transformToItem(product, categories)
    );
    res.json(items);
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.status).json(error.body);
    } else {
      res.status(500).json({ error: "Error buscando productos por categoría" });
    }
  }
};

export const searchProductsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await client.searchProductsById(id);
    const categories = getCategoriesFromProducts([product]);
    const item = transformToItemDetail(product, categories);
    res.json(item);
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.status).json(error.body);
    } else {
      res.status(500).json({ error: "Error buscando producto por id" });
    }
  }
};
