import { makeStyles } from '@material-ui/core/styles';

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
    height: "35px",
    width: "35px",
  },
  button: {
    minHeight: "0",
    minWidth: "0",
    padding: "0"
  }
}));

export default useStyles;