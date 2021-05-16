import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paperMessageBox: {
    minHeight: "55vh",
    maxHeight: "55vh",
    overflow: "auto",
    paddingLeft: "4%",
    paddingRight: "4%",
    backgroundColor: "rgba(255, 255, 255, 0)",
    boxShadow: "none",
  },
}));

export default useStyles;