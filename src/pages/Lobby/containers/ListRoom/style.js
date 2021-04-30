import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: "rgba(255,255,255,0.2)",
    width: "90%",
    height: "90%",
    borderRadius: "20px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.4)",
      width: "95%",
      height: "95%",
    }
  }
}));

export default useStyles;