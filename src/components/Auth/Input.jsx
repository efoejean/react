import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React from "react";

const Input = (
  name,
  handleChange,
  label,
  autoFocus,
  type,
  handleShowPassword,
  half
) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      label={label}
      type={type}
      InputProps={
        name === "password" && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onSubmit={handleShowPassword}>
                {type === "password" ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }
      }
    />
  </Grid>
);

export default Input;
