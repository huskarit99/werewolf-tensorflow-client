import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  typography: {
    color: "white",
    fontSize: "0.875rem",
  },
  textField: {
    margin: "0",
    width: "90%",
    border: "1px solid #84848A",
    borderRadius: "5px",
    "&:hover": {
      border: "1px solid #004c9e",
    },
    "& .MuiInputBase-input": {
      color: "white"
    }
  }
}));

export default useStyles;