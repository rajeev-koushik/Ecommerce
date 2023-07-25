import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Home } from "./Home";

describe("Home page", () => {
  test("Slider rendering", () => {
    render(<Home />);
    const slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
  });
});
