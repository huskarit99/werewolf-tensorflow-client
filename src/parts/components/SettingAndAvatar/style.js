import { makeStyles } from "@material-ui/core/styles";

const colorAvatar = [
  "red",
  "green",
  "blue",
  "orange",
  "yellow",
  "gray",
  "black",
];

const useStyles = makeStyles(() => ({
  icon: {
    color: "white",
    backgroundColor: "#00000000",
    width: "1.5rem",
    height: "1.5rem",
  },
  button: {
    borderRadius: "35px",
    backgroundColor: "rgba(255,255,255,0.3)",
    padding: "8px",
    minWidth: "0px",
    width: "40px",
    height: "40px",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.35)",
    },
  },
  username: {
    color: "#84848A",
    fontSize: "13px",
    lineHeight: "1",
  },
  fullname: {
    color: "white",
    lineHeight: "1.5",
  },
  item1: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  item2: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: colorAvatar[Math.floor(Math.random() * 7)],
    color: "white",
    textTransform: "uppercase",
  },
}));

export default useStyles;
