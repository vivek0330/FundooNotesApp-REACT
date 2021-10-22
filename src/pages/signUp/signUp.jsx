import React from "react";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./sinUp.scss";
import * as Yup from "yup";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormHelperText } from "@material-ui/core";

const SignUp = () => {
  const initialValuesSignUp = {
    FirstName: "",
    LastName: "",
    Email: "",
    Gender: "",
    PhoneNumber: "",
    Password: "",
    ConfirmPassword: "",
    termAndCondition: false,
  };

  const onSubmitSignUP = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  const validationSchemaSignUp = Yup.object().shape({
    FirstName: Yup.string()
      .min(3, "first Name is too short minimum 3 Char is required")
      .required("Required"),
    LastName: Yup.string()
      .min(3, "lasrst Name is too short minimum 3 Char is required")
      .required("Required"),
    Email: Yup.string()
      .email("Please Enter valid Email !!")
      .required("Email is required !!"),
    Gender: Yup.string()
      .oneOf(["male", "female"], "Required")
      .required("Required"),
    PhoneNumber: Yup.number()
      .typeError("Enter valid phone Number")
      .required("Required"),
    Password: Yup.string()
      .min(8, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("Password")], "Password doesn't matched")
      .required("Required"),
    termAndCondition: Yup.string().oneOf(["true"], "Accept terms & condition"),
  });

  return (
    <Grid className="display-center">
      <Paper elevation={20} className="paperStyleSignUP">
        <Grid container spacing={2}>
          <Grid item sm={6} md={6}>
            <Grid>
              <h2 data-testid="titleForSignup">
                <span className="txtStyle">F</span>
                <span className="txtStyle2">u</span>
                <span className="txtStyle">n</span>
                <span className="txtStyle3">d</span>
                <span className="txtStyle">o</span>
                <span className="txtStyle2"> N</span>
                <span className="txtStyle3">o</span>
                <span className="txtStyle">t</span>
                <span className="txtStyle2">e</span>
              </h2>
              <h2 className="headerStyle" data-testid="headerForSignup">
                Create your Fundo Account
              </h2>
            </Grid>
            <Formik
              initialValues={initialValuesSignUp}
              validationSchema={validationSchemaSignUp}
              onSubmit={onSubmitSignUP}
            >
              {(props) => (
                <Form data-testid="formForSignUp">
                  <Grid container spacing={2}>
                    <Grid item sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        label="First Name"
                        name="FirstName"
                        data-testid="FirstNameSignUp"
                        variant="outlined"
                        className="bottomMargin"
                        helperText={<ErrorMessage name="FirstName" />}
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        label="Last Name"
                        name="LastName"
                        data-testid="LastNameSignUp"
                        variant="outlined"
                        className="bottomMargin"
                        helperText={<ErrorMessage name="LastName" />}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={0}>
                    <Grid item sm={12}>
                      <Field
                        as={TextField}
                        fullWidth
                        label="Email"
                        name="Email"
                        data-testid="EmailSignUp"
                        variant="outlined"
                        className="bottomMargin"
                        helperText={<ErrorMessage name="Email" />}
                      />
                      <Grid className="setText">
                        You can use letters, numbers &amp; periods
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        variant="outlined"
                        label="Password"
                        name="Password"
                        data-testid="PasswordSignUp"
                        type="password"
                        helperText={<ErrorMessage name="Password" />}
                        className="bottomMargin"
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        variant="outlined"
                        label="confirm Password"
                        name="confirmPassword"
                        data-testid="confirmPasswordSignUp"
                        type="password"
                        helperText={<ErrorMessage name="confirmPassword" />}
                        className="bottomMargin"
                      />
                    </Grid>
                    <Grid className="setText1">
                      Use 8 or more characters with a mix of letters, numbers &
                      symbols
                    </Grid>
                  </Grid>
                  <Grid container spacing={0}>
                    <Grid item sm={12}>
                      <FormControlLabel
                        control={
                          <Field as={Checkbox} name="termAndCondition" />
                        }
                        label="I accept the terms and condition."
                      />
                      <FormHelperText>
                        <ErrorMessage name="termAndCondition" />
                      </FormHelperText>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
          <Grid item sm={6} md={6}>
            <img
              className="IMG"
              src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
              alt=""
            />
            <p className="imgContain">Quick Notes, To-do List, Reminders</p>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SignUp;
