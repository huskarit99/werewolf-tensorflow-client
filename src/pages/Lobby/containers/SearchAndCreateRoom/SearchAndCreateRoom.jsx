import React, { useRef } from "react";
import { Grid } from "@material-ui/core";

import TFCodeRoom from "./components/TFCodeRoom/TFCodeRoom";
import BtnSearchRoom from "./components/BtnSearchRoom/BtnSearchRoom";
import BtnCreateRoom from "./components/BtnCreateRoom/BtnCreateRoom";

const SearchAndCreateRoom = () => {
  const coderoomRef = useRef();

  const handleSearch = () => {
    console.log(coderoomRef.current.value);
  };
  const handleCreate = () => {
    console.log(coderoomRef.current.value);
  };

  return (
    <Grid container>
      <Grid item xs={3}>
        <TFCodeRoom ref={coderoomRef} />
      </Grid>
      <Grid item xs={3}>
        <BtnSearchRoom handleClick={handleSearch} />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3} style={{ textAlign: "right" }}>
        <BtnCreateRoom handleClick={handleCreate} />
      </Grid>
    </Grid>
  );
};

export default SearchAndCreateRoom;
