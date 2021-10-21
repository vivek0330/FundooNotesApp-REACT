import React from "react";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
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
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("Password")], "Password doesn't matched")
      .required("Required"),
    termAndCondition: Yup.string().oneOf(["true"], "Accept terms & condition"),
  });

  return (
    <Grid className="display-center">
      <Paper elevation={20} className="paperStyleSignUP">
        <Grid align="center">
          <h2 className="headerMargin">
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
          <h2 className="headerStyle">Sign Up</h2>
          <Typography
            className="margin-topBottom"
            variant="caption"
            gutterBottom
          >
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValuesSignUp}
          validationSchema={validationSchemaSignUp}
          onSubmit={onSubmitSignUP}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                label="First Name"
                name="FirstName"
                variant="outlined"
                className="bottomMargin"
                helperText={<ErrorMessage name="FirstName" />}
              />
              <Field
                as={TextField}
                fullWidth
                label="Last Name"
                name="LastName"
                variant="outlined"
                className="bottomMargin"
                helperText={<ErrorMessage name="LastName" />}
              />
              <Field
                as={TextField}
                fullWidth
                label="Email"
                name="Email"
                variant="outlined"
                className="bottomMargin"
                helperText={<ErrorMessage name="Email" />}
              />
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <Field
                  as={RadioGroup}
                  aria-label="gender"
                  name="Gender"
                  defaultValue="female"
                  style={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </Field>
              </FormControl>
              <Field
                as={TextField}
                fullWidth
                label="Phone Number"
                name="PhoneNumber"
                variant="outlined"
                className="bottomMargin"
                helperText={<ErrorMessage name="PhoneNumber" />}
              />
              <Field
                as={TextField}
                fullWidth
                variant="outlined"
                label="Password"
                name="Password"
                type="password"
                helperText={<ErrorMessage name="Password" />}
                className="bottomMargin"
              />

              <Field
                as={TextField}
                fullWidth
                variant="outlined"
                label="confirm Password"
                name="confirmPassword"
                type="password"
                helperText={<ErrorMessage name="confirmPassword" />}
                className="bottomMargin"
              />
              <FormControlLabel
                control={<Field as={Checkbox} name="termAndCondition" />}
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
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUp;
