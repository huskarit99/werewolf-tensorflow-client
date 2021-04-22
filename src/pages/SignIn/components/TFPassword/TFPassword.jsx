import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";

const TFPassword = forwardRef((props, passwordRef) => {
  const TFPassword = () => {
    return (
      <TextField
        required
        fullWidth
        type="password"
        margin="normal"
        label="Password"
        variant="outlined"
        inputRef={passwordRef}
      />
    );
  };
  return <TFPassword />;
});

export default TFPassword;
