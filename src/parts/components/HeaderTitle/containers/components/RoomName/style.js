import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "50%",
    alignItems: "center"
  },
  typography: {
    marginLeft: "2%",
    fontSize: "1rem",
    color: "white",
    textTransform: "none"
  }
}));

export default useStyles;