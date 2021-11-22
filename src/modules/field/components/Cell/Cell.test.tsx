import React from "react";
import { render, screen } from "@testing-library/react";
import { Cell } from "./index";

describe("Cell", () => {
  it("active", () => {
    render(<Cell id={1} isActive={true} />);
    expect(screen.getByTestId("cell-1")).toBeInTheDocument();
  });
});
