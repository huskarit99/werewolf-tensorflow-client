import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    borderRadius: "5px",
    backgroundColor: "#00000000",
    color: "white",
    height: "28px",
    width: "28px",
  },
  button: {
    borderRadius: "35px",
    backgroundColor: "rgba(255,255,255,0.3)",
    padding: "8px",
    minWidth: "0px",
    width: "40px",
    height: "40px",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.35)",
    },
  },
}));

export default useStyles;
