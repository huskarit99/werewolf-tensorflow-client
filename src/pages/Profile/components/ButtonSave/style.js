import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    color: "#3f51b5",
    fontWeight: "bold",
    backgroundColor: "#00000000",
    border: "1px solid #3f51b5",
    paddingLeft: "20px",
    paddingRight: "20px",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#3f51b5",
    }
  }
}));

export default useStyles;