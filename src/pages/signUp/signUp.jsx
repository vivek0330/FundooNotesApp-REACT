import React from "react";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./sinUp.scss";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignUp = () => {
  const paperStyle = { padding: "30px 20px", width: 380, margin: "20px auto" };
  return (
    <Grid className="display-center">
      <Paper elevation={20} style={paperStyle}>
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
        <Formik>
          {(props) => (
            <form>
              <Field
                as={TextField}
                fullWidth
                label="First Name"
                variant="outlined"
                className="bottomMargin"
              />
              <Field
                as={TextField}
                fullWidth
                label="Last Name"
                variant="outlined"
                className="bottomMargin"
              />
              <Field
                as={TextField}
                fullWidth
                label="Email"
                variant="outlined"
                className="bottomMargin"
              />
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
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
                </RadioGroup>
              </FormControl>
              <Field
                as={TextField}
                fullWidth
                label="Phone Number"
                variant="outlined"
                className="bottomMargin"
              />
              <Field
                as={TextField}
                fullWidth
                variant="outlined"
                label="Password"
                className="bottomMargin"
              />
              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="I accept the terms and condition."
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Sign Up
              </Button>
            </form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUp;
