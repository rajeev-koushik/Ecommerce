import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Shop } from "./Shop";

describe("List Component", () => {
  test("Products rendering", () => {
    render(<Shop />);
    const products = screen.getByTestId("products");
    expect(products).toBeInTheDocument();
  });
});
