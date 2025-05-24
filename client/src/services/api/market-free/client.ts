import { ApiError, type Item, type ItemDetail } from "@/services";

export class MarketFreeClient {
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
    query: string,
    offset: number = 0,
    limit: number = 4
  ): Promise<Item[]> {
    const response = await fetch(
      `${this.baseUrl}/api/items?q=${encodeURIComponent(
        query
      )}&offset=${offset}&limit=${limit}`
    );
    return this.handleResponse<Item[]>(response);
  }

  async searchProductsByCategory(
    categoryId: string,
    offset: number = 0,
    limit: number = 4
  ): Promise<Item[]> {
    const response = await fetch(
      `${this.baseUrl}/api/items/category?categoryId=${encodeURIComponent(
        categoryId
      )}&offset=${offset}&limit=${limit}`
    );
    return this.handleResponse<Item[]>(response);
  }

  async getProductById(id: string): Promise<ItemDetail> {
    const response = await fetch(
      `${this.baseUrl}/api/items/${encodeURIComponent(id)}`
    );
    return this.handleResponse<ItemDetail>(response);
  }
}
