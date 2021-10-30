// eslint-disable-next-line
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import React from "react";
import "./login.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import Title from "../../component/title/title";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../Services/user";

const Login = () => {
  const initialValues = {
    Email: "",
    Password: "",
  };

  const history = useHistory();

  const onSubmits = (values, props) => {
    console.log(values);
    const data = {
      email: values.Email,
      password: values.Password,
    };
    login(data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        // localStorage.getItem("token");
        setTimeout(() => {
          history.push("/dashboard");
        }, 5000);
        toast.success("login successfully ✔", {
          position: "top-center",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validationSchema = Yup.object().shape({
    Email: Yup.string()
      .email("Please Enter valid Email !!")
      .required("Email is required !!"),
    Password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Router>
      <Grid className="display-center">
        <Paper elevation={8} className="paperStyle">
          <Grid align="center">
            <Title />
            <h2 data-testid="signIn">Sign In</h2>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmits}
          >
            {(props) => (
              <Form data-testid="form">
                <Field
                  as={TextField}
                  data-testid="email"
                  label="Email"
                  name="Email"
                  variant="outlined"
                  fullWidth
                  className="tfStyle"
                  helperText={<ErrorMessage name="Email" />}
                />
                <Field
                  as={TextField}
                  label="Password"
                  data-testid="password"
                  name="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  helperText={<ErrorMessage name="Password" />}
                />

                <Button
                  data-testid="submit"
                  type="submit"
                  color="primary"
                  variant="contained"
                  className="buttonStyle"
                  fullWidth
                  disabled={props.isSubmitting}
                >
                  {props.isSubmitting ? "Loading" : "Sign in"}
                </Button>
              </Form>
            )}
          </Formik>

          <Typography className="typoStyle">
            <Link to="/forgot">Forgot password</Link>
          </Typography>
          <Typography>
            Create a new account ?
            <Link to="/SignUp">
              <span> Create account </span>
            </Link>
          </Typography>
        </Paper>
        <ToastContainer />
      </Grid>
    </Router>
  );
};

export default Login;
