import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const user = null;

const Navbar = () => {
  const classes = useStyles();

  return (
    // using material-ui to styles the AppBar, import it from styles.js
    <AppBar className={classes.appbar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Welcome to React
        </Typography>
      </div>

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography
              className={classes.userName}
              variant="h6"
              align="center"
            >
              {user.result.name}
            </Typography>
            <Button className={classes.logout} color="Secondary">
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
