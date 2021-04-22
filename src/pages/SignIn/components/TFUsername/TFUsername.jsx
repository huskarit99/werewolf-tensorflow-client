import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";

const TFUsername = forwardRef((props, usernameRef) => {
  const TFUsername = () => {
    return (
      <TextField
        required
        fullWidth
        margin="normal"
        label="Username"
        variant="outlined"
        inputRef={usernameRef}
      />
    );
  };
  return <TFUsername />;
});

export default TFUsername;
