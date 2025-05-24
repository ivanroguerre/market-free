import type { Product } from "@/services/api";

export class PlatziFakeStoreClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async searchProductsByName(
    title: string,
    offset: number = 0,
    limit: number = 4
  ): Promise<Product[]> {
    const response = await fetch(
      `${this.baseUrl}/api/v1/products?title=${title}&offset=${offset}&limit=${limit}`
    );
    const data = await response.json();
    return data;
  }

  async searchProductsByCategory(
    categoryId: number,
    offset: number = 0,
    limit: number = 4
  ): Promise<Product[]> {
    const response = await fetch(
      `${this.baseUrl}/api/v1/products?categoryId=${categoryId}&offset=${offset}&limit=${limit}`
    );
    const data = await response.json();
    return data;
  }

  async searchProductsById(id: string): Promise<Product> {
    const response = await fetch(`${this.baseUrl}/api/v1/products/${id}`);
    const data = await response.json();
    return data;
  }
}
