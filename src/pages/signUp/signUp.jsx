import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core";
import AddCircleOutLineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./sinUp.scss";
import Checkbox from "@material-ui/core/Checkbox";
const SignUp = () => {
  const paperStyle = { padding: "30px 20px", width: 380, margin: "20px auto" };

  const btstyle = { margin: "12px 0" };
  const marginTop = { marginTop: 10 };
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
        <form>
          <TextField fullWidth label="First Name" variant="outlined" />
          <TextField fullWidth label="Last Name" variant="outlined" />
          <TextField fullWidth label="Email" variant="outlined" />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth label="Phone Number" variant="outlined" />
          <TextField fullWidth variant="outlined" label="Password" />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and condition."
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={btstyle}
            fullWidth
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
