import { fireEvent, render, screen, act } from "@testing-library/react";
import { SearchItemsHeader } from "@/components/layout/search-items-header/search-items-header";
import { useRouter, useSearchParams } from "next/navigation";
import type { Mock } from "jest-mock";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("SearchItemsHeader", () => {
  const mockRouter = {
    push: jest.fn(),
  };

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    (useRouter as Mock).mockReturnValue(mockRouter);
    (useSearchParams as Mock).mockReturnValue(new URLSearchParams());
  });

  it("renders the logo and search input", () => {
    render(<SearchItemsHeader />);

    // Check if logo is rendered
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();

    // Check if search input is rendered
    const searchInput = screen.getByRole("searchbox", {
      name: "Buscar productos",
    });
    expect(searchInput).toBeInTheDocument();
  });

  it("updates search term when typing", () => {
    render(<SearchItemsHeader />);

    const searchInput = screen.getByRole("searchbox", {
      name: "Buscar productos",
    });
    fireEvent.change(searchInput, { target: { value: "test search" } });

    expect(searchInput).toHaveValue("test search");
  });

  it("submits search form and navigates to search results", () => {
    render(<SearchItemsHeader />);

    const searchInput = screen.getByRole("searchbox", {
      name: "Buscar productos",
    });
    const searchForm = searchInput.closest("form");

    fireEvent.change(searchInput, { target: { value: "test search" } });
    fireEvent.submit(searchForm!);

    expect(mockRouter.push).toHaveBeenCalledWith("/items?q=test%20search");
  });

  it("initializes search term from URL params", () => {
    (useSearchParams as Mock).mockReturnValue(
      new URLSearchParams("?q=initial+search")
    );

    render(<SearchItemsHeader />);

    const searchInput = screen.getByRole("searchbox", {
      name: "Buscar productos",
    });
    expect(searchInput).toHaveValue("initial search");
  });

  it("trims whitespace from search term before submission", () => {
    render(<SearchItemsHeader />);

    const searchInput = screen.getByRole("searchbox", {
      name: "Buscar productos",
    });
    const searchForm = searchInput.closest("form");

    fireEvent.change(searchInput, { target: { value: "  test search  " } });
    fireEvent.submit(searchForm!);

    expect(mockRouter.push).toHaveBeenCalledWith("/items?q=test%20search");
  });

  it("changes placeholder text based on window width", () => {
    const { rerender } = render(<SearchItemsHeader />);
    const searchInput = screen.getByRole("searchbox", {
      name: "Buscar productos",
    });

    // Initial render should have desktop placeholder
    expect(searchInput).toHaveAttribute(
      "placeholder",
      "Buscar productos, marcas y más..."
    );

    // Simulate mobile viewport
    act(() => {
      window.innerWidth = 767;
      window.dispatchEvent(new Event("resize"));
    });

    // Rerender to apply changes
    rerender(<SearchItemsHeader />);

    // Should now have mobile placeholder
    expect(searchInput).toHaveAttribute("placeholder", "Buscar...");

    // Simulate desktop viewport
    act(() => {
      window.innerWidth = 768;
      window.dispatchEvent(new Event("resize"));
    });

    // Rerender to apply changes
    rerender(<SearchItemsHeader />);

    // Should be back to desktop placeholder
    expect(searchInput).toHaveAttribute(
      "placeholder",
      "Buscar productos, marcas y más..."
    );
  });
});
