import React, { useRef, useState } from "react";
import { Grid } from "@material-ui/core";

import { getUser } from "services/api/privateApi";
import TFCodeRoom from "./components/TFCodeRoom/TFCodeRoom";
import BtnSearchRoom from "./components/BtnSearchRoom/BtnSearchRoom";
import BtnCreateRoom from "./components/BtnCreateRoom/BtnCreateRoom";
import CreateRoomModal from "parts/components/modals/CreateRoomModal/CreateRoomModal";

const SearchAndCreateRoom = () => {
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
  );
};

export default SearchAndCreateRoom;
