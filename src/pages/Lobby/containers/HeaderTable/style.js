import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  paper: {
    width: "96%",
    maxHeight: "20vh",
    backgroundColor: "#2A2D3B",
    borderRadius: "0",
    boxShadow: "none",
  },
  typography: {
    color: "white",
    fontWeight: "bold",
  },
  icon: {
    backgroundColor: "#00000000",
    color: "white",
    fontWeight: "bold",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  }
}))

export default useStyles;