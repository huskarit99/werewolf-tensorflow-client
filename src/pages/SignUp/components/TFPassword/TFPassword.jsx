import React, { forwardRef } from "react";
import { Grid, TextField } from "@material-ui/core";

const TFPassword = forwardRef((props, passwordRef) => {
  const TFPassword = () => {
    return (
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          type="password"
          margin="normal"
          label="Password"
          variant="outlined"
          inputRef={passwordRef}
        />
      </Grid>
    );
  };
  return <TFPassword />;
});

export default TFPassword;
