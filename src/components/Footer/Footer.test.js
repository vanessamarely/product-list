import { render, screen } from "@testing-library/react";
import { Footer } from "./";

describe("Footer", () => {
  it("renders appropriately", () => {
    render(<Footer />);
    expect(screen.getByText(/2022/i)).toBeInTheDocument();
  });
});
