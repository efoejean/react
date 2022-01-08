import {
  Avatar,
  Button,
  Container,
  Grid,
  Icon,
  Paper,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"; // npm install @material-ui/icons sepeartely
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import Input from "./Input";
import useStyles from "./styles";

const Auth = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  // use state to store the state of the form
  const [isSignup, setIsSignup] = useState(false);

  // to toggle the password show/hide
  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {};

  const handleChange = (e) => {};

  // to toggle the signup/login
  const switchMode = () => {
    // eslint-disable-next-line no-unused-expressions
    isSignup ? setIsSignup(false) : setIsSignup(true);
    handleShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  type="text"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="firstName"
                  label="First Name"
                  type="text"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              type="email"
              handleChange={handleChange}
            />
            <Input
              password="password"
              label="password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>

          <GoogleLogin
            clientId="1069087155970-jqjqjqjqjqjqjqjqjqjqjqjqjqjqjqj.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Sign in with Google
              </Button>
            )}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Dont have an account? Sing Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
