import React, { forwardRef } from "react";
import { Grid, TextField } from "@material-ui/core";

const TFUsername = forwardRef((props, usernameRef) => {
  const TFUsername = () => {
    return (
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          margin="normal"
          label="Username"
          variant="outlined"
          inputRef={usernameRef}
        />
      </Grid>
    );
  };
  return <TFUsername />;
});

export default TFUsername;
