import React from "react";
import SignUp from "./SignUp";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should give correct title when signup page rendered", () => {
  const { getByTestId } = render(<SignUp />);
  const titleForSignup = getByTestId("titleForSignup");
  expect(titleForSignup).toHaveTextContent("Fundo Note");
});

it("should check correct title when wrong title is given", () => {
  const { getByTestId } = render(<SignUp />);
  const titleForSignup = getByTestId("titleForSignup");
  expect(titleForSignup).not.toHaveTextContent("FundoNote");
});

it("should give correct header when signup page rendered", () => {
  const { getByTestId } = render(<SignUp />);
  const header = getByTestId("headerForSignup");
  expect(header).toHaveTextContent("Sign Up");
});

it("should check correct header when wrong header is given", () => {
  const { getByTestId } = render(<SignUp />);
  const header = getByTestId("headerForSignup");
  expect(header).not.toHaveTextContent("sign In");
});

it("should give correct caption when signup page rendered", () => {
  const { getByTestId } = render(<SignUp />);
  const caption = getByTestId("capionForSignup");
  expect(caption).toHaveTextContent(
    "Please fill this form to create an account !"
  );
});

it("should check correct caption when wrong caption is given", () => {
  const { getByTestId } = render(<SignUp />);
  const caption = getByTestId("capionForSignup");
  expect(caption).not.toHaveTextContent("sign In");
});

it("givenTestIdElement_WhenRenderedLogin_ShouldContainHeaderWithExpectedInputElements", () => {
  const { getByTestId } = render(<SignUp />);
  const Form = getByTestId("formForSignUp");
  expect(Form).toBeInTheDocument();
});

it("givenTestIdElement_WhenRenderedsignup_shouldFirstNameInTheDocument", () => {
  const { getByTestId } = render(<SignUp />);
  const FirstName = getByTestId("FirstNameSignUp");
  expect(FirstName).toBeInTheDocument();
});

it("givenTestIdElement_WhenRenderedsignup_shouldLastNameInTheDocument", () => {
  const { getByTestId } = render(<SignUp />);
  const LastName = getByTestId("LastNameSignUp");
  expect(LastName).toBeInTheDocument();
});

it("givenTestIdElement_WhenRenderedsignup_shouldPasswordInTheDocument", () => {
  const { getByTestId } = render(<SignUp />);
  const Password = getByTestId("PasswordSignUp");
  expect(Password).toBeInTheDocument();
});

it("givenTestIdElement_WhenRenderedsignup_shouldconfirmPasswordInTheDocument", () => {
  const { getByTestId } = render(<SignUp />);
  const confirmPassword = getByTestId("confirmPasswordSignUp");
  expect(confirmPassword).toBeInTheDocument();
});

it("givenTestIdElement_WhenRenderedsignup_shouldPhoneNumberInTheDocument", () => {
  const { getByTestId } = render(<SignUp />);
  const PhoneNumber = getByTestId("PhoneNumberSignUp");
  expect(PhoneNumber).toBeInTheDocument();
});

it("givenTestIdElement_WhenRenderedsignup_shouldEmailInTheDocument", () => {
  const { getByTestId } = render(<SignUp />);
  const Email = getByTestId("EmailSignUp");
  expect(Email).toBeInTheDocument();
});
