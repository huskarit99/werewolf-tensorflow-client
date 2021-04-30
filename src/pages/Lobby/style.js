import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: "rgba(255,255,255,0.2)",
    width: "90%",
    height: "90%",
    borderRadius: "20px",
    boxShadow: "none",
  },
  listItem: {
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.4)",
    },
  },
  avatar: {
    display: "inline",
    backgroundColor: "#00000000",
    "& > *": {
      width: "16px",
      height: "16px",
    },
  }
}));

export default useStyles;