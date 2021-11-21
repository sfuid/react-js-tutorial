import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Field } from "./index";

describe("Field", () => {
  it("render", () => {
    render(<Field size={1000} />);
    const cell = screen.getByTestId("cell-500");
    expect(cell).toBeInTheDocument();
  });

  it("cell onclick handler", () => {
    render(<Field size={1000} />);
    const cell = screen.getByTestId("cell-500");
    fireEvent.click(cell);
    expect(cell).toHaveTextContent("*");
  });
});
