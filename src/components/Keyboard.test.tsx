import React from "react";
import { render, screen } from "@testing-library/react";
import { Keyboard } from "./Keyboard";

test("renders ENTER button", () => {
  render(<Keyboard />);
  const enterElement = screen.getByText(/ENTER/i);
  expect(enterElement).toBeInTheDocument();
});
