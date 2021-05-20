import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "flex-end",
  },
  paper: {
    height: "100%",
    width: "96%",
    boxShadow: "none",
    backgroundColor: "#00000000",
    borderBottom: "1px solid white",
  }
}));

export default useStyles;