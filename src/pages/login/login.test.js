import React from "react";
import Login from "./login";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should give correct header when login page rendered", () => {
  const { getByTestId } = render(<Login />);
  const header = getByTestId("signIn");
  expect(header).toHaveTextContent("Sign In");
});

it("should give wrong header then get error occured", () => {
  const { getByTestId } = render(<Login />);
  const header = getByTestId("signIn");
  expect(header).not.toHaveTextContent("SignIn");
});

it("givenTestIdElement_WhenRenderedLogin_ShouldContainHeaderWithExpectedInputElements", () => {
  const { getByTestId } = render(<Login />);
  const Form = getByTestId("form");
  expect(Form).toBeInTheDocument();
});

it("givenTestIdElement_WhenRenderedLogin_shouldEmailInTheDocument", () => {
  const { getByTestId } = render(<Login />);
  const email = getByTestId("email");
  expect(email).toBeInTheDocument();
});

it("givenTestIdElement_WhenRenderedLogin_shouldSubmitInTheDocument", () => {
  const { getByTestId } = render(<Login />);
  const submit = getByTestId("submit");
  expect(submit).toBeInTheDocument();
});

it("givenTestIdElement_WhenRenderedLogin_shouldSubmittoBeDisabled", () => {
  const { getByTestId } = render(<Login />);
  const submit = getByTestId("submit");
  expect(submit).not.toBeDisabled();
});

it("givenTestIdElement_WhenRenderedLogin_shouldPasswordInTheDocument", () => {
  const { getByTestId } = render(<Login />);
  const password = getByTestId("password");
  expect(password).toBeInTheDocument();
});

it("givenTestIdElement_WhenRenderedLogin_shouldPasswordtoHaveErrorMessage", () => {
  const { getByTestId } = render(<Login />);
  const password = getByTestId("password");
  expect(password).not.toHaveErrorMessage();
});
