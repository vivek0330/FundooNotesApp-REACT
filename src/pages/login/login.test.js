import React from "react";
import Login from "./login";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("header render with correct text", () => {
  const { getByTestId } = render(<Login />);
  const headerEl = getByTestId("header");
  expect(headerEl.textContent).toBe("Fundo Note");
});
