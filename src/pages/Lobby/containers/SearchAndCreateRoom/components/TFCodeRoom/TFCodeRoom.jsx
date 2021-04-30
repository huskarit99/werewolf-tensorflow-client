import React, { forwardRef } from "react";
import { Search } from "@material-ui/icons";
import { TextField, InputAdornment } from "@material-ui/core";

import useStyles from "./style";

const TFCodeRoom = forwardRef((props, coderoomRef) => {
  const classes = useStyles();

  const TFCodeRoom = () => {
    return (
      <React.Fragment>
        <TextField
          size="small"
          required
          fullWidth
          margin="normal"
          variant="outlined"
          inputRef={coderoomRef}
          className={classes.textField}
          placeholder="coderoom"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search
                  style={{ color: "#3f51b5", backgroundColor: "#00000000" }}
                />
              </InputAdornment>
            ),
          }}
        />
      </React.Fragment>
    );
  };
  return <TFCodeRoom />;
});

export default TFCodeRoom;
