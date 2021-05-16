import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paper: {
    overflow: "auto",
    width: "96%",
    height: "60vh",
    maxHeight: "60vh",
    backgroundColor: "#2A2D3B",
    borderRadius: "0",
    boxShadow: "none",
  },
  typography: {
    color: "white"
  },
  button: {
    color: "white",
    backgroundColor: "#3f51b5",
  }
}));

export default useStyles;