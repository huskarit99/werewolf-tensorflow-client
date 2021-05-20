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
    color: "red",
    height: "40px",
    width: "40px",
  }
}));

export default useStyles;