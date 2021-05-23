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
    color: "blue",
    backgroundColor: "#00000000",
    borderRadius: "5px",
    width: "35px",
    height: "35px",
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
