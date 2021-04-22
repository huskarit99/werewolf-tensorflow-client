import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    paddingTop: "3%",
    paddingBottom: "5%",
    width: "70%",
    borderRadius: "20px",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255)",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#004c9e",
  },
  form: {
    width: "70%",
    marginTop: theme.spacing(1),
  },
  link: {
    color: "blue",
  }
}));

export default useStyles;