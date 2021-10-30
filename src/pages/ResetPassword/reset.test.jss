import React from "react";
import ResetPassword from "./resetPassword";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should give correct header when reset page rendered", () => {
  const { getByTestId } = render(<ResetPassword />);
  const header = getByTestId("resetPassword");
  expect(header).toHaveTextContent("Reset Password");
});

it("should check correct header when wrong header is given", () => {
  const { getByTestId } = render(<ResetPassword />);
  const header = getByTestId("resetPassword");
  expect(header).not.toHaveTextContent("ResetPassword");
});

it("form-tobeinthedocument", () => {
  const { getByTestId } = render(<ResetPassword />);
  const form = getByTestId("form");
  expect(form).toBeInTheDocument();
});

it("password-tobeinthedocument", () => {
  const { getByTestId } = render(<ResetPassword />);
  const password = getByTestId("password");
  expect(password).toBeInTheDocument();
});
