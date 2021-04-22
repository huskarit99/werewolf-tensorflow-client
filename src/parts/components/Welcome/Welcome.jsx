import React from "react";
import { Typography } from "@material-ui/core";

const Welcome = (props) => {
  return (
    <React.Fragment>
      {props.username !== null ? (
        <Typography variant="h3" style={{ color: "white" }}>
          Welcome back, {props.username}
        </Typography>
      ) : (
        <Typography variant="h3" style={{ color: "white" }}>
          Welcome to The WereWolf
        </Typography>
      )}
    </React.Fragment>
  );
};

export default Welcome;
