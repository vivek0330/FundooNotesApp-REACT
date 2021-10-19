// eslint-disable-next-line
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import react from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const Login = () => {
  const paperStyle = {
    padding: 10,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };
  const buttonStyle = {
    margin: "15px 0px",
  };
  const typoStyle = {
    margin: "10px 0px",
  };
  const tfStyle = {
    margin: "10px 0px",
  };
  const txtStyle = {
    color: "blue",
    fontSize: 28,
  };
  const txtStyle2 = {
    color: "red",
  };
  const txtStyle3 = {
    color: "orange",
  };
  const gdStyle = {};
  return (
    <Grid style={gdStyle}>
      <Paper elevation={8} style={paperStyle}>
        <Grid align="center">
          <h2>
            <span style={txtStyle}>F</span>
            <span style={txtStyle2}>u</span>
            <span style={txtStyle}>n</span>
            <span style={txtStyle3}>d</span>
            <span style={txtStyle}>o</span>
            <span style={txtStyle2}> N</span>
            <span style={txtStyle3}>o</span>
            <span style={txtStyle}>t</span>
            <span style={txtStyle2}>e</span>
          </h2>
          <h2>Sign In</h2>
        </Grid>
        <Grid style={tfStyle}>
          <TextField
            label="Email and phone"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          required
        />

        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={buttonStyle}
          fullWidth
        >
          Sign in
        </Button>
        <Typography style={typoStyle}>
          <Link href="#">Forgot password</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?
          <Link href="#">
            <span> Sign up </span>
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
