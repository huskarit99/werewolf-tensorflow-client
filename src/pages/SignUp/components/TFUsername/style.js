import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  typography: {
    color: "white",
    margin: "0",
    marginTop: "2%",
    fontSize: "0.875rem",
  },
  textField: {
    width: "70%",
    marginTop: "1%",
    border: "1px solid #84848A",
    borderRadius: "5px",
    "&:hover": {
      border: "1px solid #004c9e",
    },
    "&selected": {
      border: "1px solid red",
    },
    "& .MuiInputBase-input": {
      color: "white"
    }
  }
}));

export default useStyles;