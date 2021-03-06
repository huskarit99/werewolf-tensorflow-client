import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  paperMessageBox: {
    height: "100%",
    overflow: "auto",
    paddingLeft: "4%",
    paddingRight: "4%",
    backgroundColor: "rgba(255, 255, 255, 0)",
    boxShadow: "none",
  },
  avatar: {
    width: "25px",
    height: "25px",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    color: "white",
  },
  typography: {
    fontSize: "12px",
    color: "white",
    fontWeight: "bold",
  },
}));

export default useStyles;
