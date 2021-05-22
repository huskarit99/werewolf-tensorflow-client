import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: "rgba(255,255,255,0.2)",
    width: "50%",
    height: "90%",
    textAlign: "center",
    borderRadius: "20px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.4)",
      width: "60%",
      height: "100%",
    },
  },
  root1: {
    marginTop: "20px",
    height: "200px",
    width: "100%",
  },
  root2: {
    height: "20px",
    width: "100%",
  },
  container: {
    display: "inline-flex",
    justifyContent: "center",
    width: "20%",
  },
  typography: {
    color: "white",
  },
}));

export default useStyles;
