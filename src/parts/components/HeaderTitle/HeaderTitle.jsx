import React from "react";
import { Typography } from "@material-ui/core";

const HeaderTitle = (props) => {
  return (
    <React.Fragment>
      {props.path === "/" ? (
        props.username !== null ? (
          <Typography
            variant="h3"
            style={{ color: "white", textTransform: "uppercase" }}
          >
            Welcome back, {props.username}
          </Typography>
        ) : (
          <Typography
            variant="h3"
            style={{ color: "white", textTransform: "uppercase" }}
          >
            Welcome to The WereWolf
          </Typography>
        )
      ) : (
        props.path === "/lobby" && (
          <Typography
            variant="h3"
            style={{ color: "white", textTransform: "uppercase" }}
          >
            LOBBY LIST
          </Typography>
        )
      )}
    </React.Fragment>
  );
};

export default HeaderTitle;
