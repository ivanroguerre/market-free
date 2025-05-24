import { MarketFreeClient } from "@/services";
import { ApiError } from "@/services";
import {
  expect,
  jest,
  describe,
  it,
  beforeEach,
  afterEach,
} from "@jest/globals";

describe("MarketFreeClient", () => {
  const baseUrl = "http://test-api.com";
  let client: MarketFreeClient;
  let mockFetch: jest.Mock<typeof fetch>;

  beforeEach(() => {
    mockFetch = jest.fn() as jest.Mock<typeof fetch>;
    global.fetch = mockFetch;
    client = new MarketFreeClient(baseUrl);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("searchProductsByName", () => {
    const mockItems = [
      { id: "1", title: "Test Item 1" },
      { id: "2", title: "Test Item 2" },
    ];

    it("should fetch products by name successfully", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockItems),
      } as Response);

      const result = await client.searchProductsByName("test", 0, 4);

      expect(mockFetch).toHaveBeenCalledWith(
        `${baseUrl}/api/items?q=test&offset=0&limit=4`
      );
      expect(result).toEqual(mockItems);
    });
  });

  describe("searchProductsByCategory", () => {
    const mockItems = [
      { id: "1", title: "Category Item 1" },
      { id: "2", title: "Category Item 2" },
    ];

    it("should fetch products by category successfully", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockItems),
      } as Response);

      const result = await client.searchProductsByCategory("cat123", 0, 4);

      expect(mockFetch).toHaveBeenCalledWith(
        `${baseUrl}/api/items/category?categoryId=cat123&offset=0&limit=4`
      );
      expect(result).toEqual(mockItems);
    });
  });

  describe("getProductById", () => {
    const mockItemDetail = {
      id: "123",
      title: "Test Product",
      price: 100,
      description: "Test Description",
    };

    it("should fetch product details successfully", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockItemDetail),
      } as Response);

      const result = await client.getProductById("123");

      expect(mockFetch).toHaveBeenCalledWith(`${baseUrl}/api/items/123`);
      expect(result).toEqual(mockItemDetail);
    });
  });

  describe("error handling", () => {
    it("should handle API errors", async () => {
      const errorResponse = {
        message: "API Error",
        status: 500,
      };

      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: () => Promise.resolve(errorResponse),
      } as Response);

      await expect(client.searchProductsByName("test")).rejects.toThrow(
        ApiError
      );
    });

    it("should handle API errors without message", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: () => Promise.resolve({}),
      } as Response);

      await expect(client.searchProductsByName("test")).rejects.toThrow(
        ApiError
      );
    });
  });
});
