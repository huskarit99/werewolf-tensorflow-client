import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: "0",
    background: "rgba(255,255,255,0)",
    color: "#004c9e",
    borderColor: "#004c9e",
    fontWeight: "bold",
    width: "40%",
    height: "40px",
    boxShadow: "none",
    margin: theme.spacing(3, 0, 2),
    textTransform: "none",
    border: "2px solid",
    "&:hover": {
      backgroundColor: "#004c9e",
      color: "#fff",
      boxShadow: "none"
    },
  },
}));

export default useStyles;