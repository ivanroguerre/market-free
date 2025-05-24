import { ApiError } from "@/services/api";
import type { Product } from "@/services/api";

export class PlatziFakeStoreClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const data = await response.json();
    if (!response.ok) {
      throw new ApiError(
        response.status,
        data,
        data.message || "Ocurrió un error al hacer la petición a la API"
      );
    }
    return data;
  }

  async searchProductsByName(
    title: string,
    offset: number = 0,
    limit: number = 4
  ): Promise<Product[]> {
    const response = await fetch(
      `${this.baseUrl}/api/v1/products?title=${title}&offset=${offset}&limit=${limit}`
    );
    return this.handleResponse<Product[]>(response);
  }

  async searchProductsByCategory(
    categoryId: number,
    offset: number = 0,
    limit: number = 4
  ): Promise<Product[]> {
    const response = await fetch(
      `${this.baseUrl}/api/v1/products?categoryId=${categoryId}&offset=${offset}&limit=${limit}`
    );
    return this.handleResponse<Product[]>(response);
  }

  async searchProductsById(id: string): Promise<Product> {
    const response = await fetch(`${this.baseUrl}/api/v1/products/${id}`);
    return this.handleResponse<Product>(response);
  }
}
