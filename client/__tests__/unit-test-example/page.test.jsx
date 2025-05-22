import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UnitTestExampleHomePage from "@/app/unit-test-example/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<UnitTestExampleHomePage />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
