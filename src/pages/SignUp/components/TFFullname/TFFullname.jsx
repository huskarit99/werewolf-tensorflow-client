import React, { forwardRef } from "react";
import { Grid, TextField } from "@material-ui/core";

const TFFullname = forwardRef((props, usernameRef) => {
  const TFFullname = () => {
    return (
      <Grid item xs={12}>
        <TextField
          autoFocus
          required
          fullWidth
          margin="normal"
          label="Fullname"
          variant="outlined"
          inputRef={usernameRef}
        />
      </Grid>
    );
  };
  return <TFFullname />;
});

export default TFFullname;
