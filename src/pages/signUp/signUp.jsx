import React from "react";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import "./sinUp.scss";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useHistory } from "react-router-dom";
import Title from "../title";
import { register } from "../../Services/user";

const SignUp = () => {
  const history = useHistory();

  const initialValuesSignUp = {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  };

  const onSubmitSignUP = (values, props) => {
    console.log(values);
    // if (values && !values.FirstName && !values.LastName) return;
    const userDetails = {
      firstName: values.FirstName,
      lastName: values.LastName,
      email: values.Email,
      password: values.Password,
    };
    register(userDetails)
      .then((res) => {
        alert("Data is submitted");
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });

    // setTimeout(() => {
    //   props.resetForm();
    //   props.setSubmitting(false);
    // }, 2000);
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
    Password: Yup.string()
      .min(8, "Password must be at least 6 characters")
      .required("Password is required"),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref("Password")], "Password doesn't matched")
      .required("Confirm password should match password"),
  });

  return (
    <Grid className="display-center">
      <Paper elevation={20} className="paperStyleSignUP">
        <Grid container spacing={2}>
          <Grid item sm={6} md={6}>
            <Grid>
              <Title />
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
                        label="Confirm Password"
                        name="ConfirmPassword"
                        data-testid="confirmPasswordSignUp"
                        type="password"
                        helperText={<ErrorMessage name="ConfirmPassword" />}
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
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Sign Up
                      </Button>
                      <Typography className="marginTop">
                        Already have an account ?{" "}
                        <Link to="/login"> Login</Link>
                      </Typography>
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
