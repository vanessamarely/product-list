import { render, screen } from "@testing-library/react";
import { Header } from "./";

describe("Header", () => {
  it("renders appropriately", () => {
    render(<Header />);
    expect(screen.getByText(/Product-List/i)).toBeInTheDocument();
  });
});
