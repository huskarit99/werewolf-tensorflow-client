import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  paper: {
    overflow: "auto",
    width: "96%",
    height: "100%",
    backgroundColor: "#00000000",
    boxShadow: "none",
  },
  button: {
    background: "#504EDF",
    borderRadius: "15px",
    color: "white",
    textTransform: "none",
    paddingTop: "8px",
    paddingBottom: "8px",
    height: "40px",
    width: "100px",
    "&:hover": {
      color: "red",
      background: "#00000000",
      fontWeight: "bold",
      border: "1px solid red",
    },
  },
  div1: {
    marginTop: "20px",
    width: "100%",
    height: "40px",
    textAlign: "center",
  },
  div2: {
    display: "flex",
    justifyContent: "center",
    width: "96%",
    height: "100%",
    marginTop: "20px",
  },
}));

export default useStyles;
