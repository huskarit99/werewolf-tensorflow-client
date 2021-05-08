import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    paddingTop: "3%",
    paddingBottom: "5%",
    width: "80%",
    flexDirection: "column",
    boxShadow: "none",
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#004c9e",
  },
  link: {
    color: "#004c9e",
    textDecoration: "none"
  },
  typography2: {
    width: "70%",
    color: "#84848A",
    fontSize: "0.875rem",
    marginTop: "10px",
    marginBottom: "20px",
  },
  typography1: {
    color: "white",
    fontSize: "2.3rem",
    fontWeight: "bold"
  }
}));

export default useStyles;