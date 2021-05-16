import React, { useRef, useState } from "react";
import { Grid, Paper } from "@material-ui/core";

import useStyles from "./style";
import { getUser } from "services/api/privateApi";
import TFCodeRoom from "./components/TFCodeRoom/TFCodeRoom";
import BtnSearchRoom from "./components/BtnSearchRoom/BtnSearchRoom";
import BtnCreateRoom from "./components/BtnCreateRoom/BtnCreateRoom";
import CreateRoomModal from "parts/components/modals/CreateRoomModal/CreateRoomModal";

const SearchAndCreateRoom = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const coderoomRef = useRef();

  const handleSearch = () => {
    const id = coderoomRef.current.value;
    getUser().then((res) => {});
  };
  const handleCreate = () => {
    setOpen(!open);
  };

  return (
    <Paper className={classes.paper}>
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
        <CreateRoomModal open={open} setOpen={setOpen} />
      </Grid>
    </Paper>
  );
};

export default SearchAndCreateRoom;
