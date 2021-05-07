import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
  },
  item: {
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
  p: {
    color: "white",
    fontSize: "0.875rem",
  },
  input: {
    color: "white",
    fontSize: "0.875rem",
    "& .Mui-disabled": {
      color: "rgb(132, 132, 138)",
    }
  },
}));

export default useStyles;