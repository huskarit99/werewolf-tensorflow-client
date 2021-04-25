import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

  subPaper: {
    position: "absolute",
    boxShadow: "none",
    borderRadius: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "28%",
    height: "15%",
    bottom: "8%",
  },
  paper: {
    borderRadius: "20px",
    height: "90%",
    width: "90%",
    backgroundColor: "#00000000"
  },
  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: "20px",
  }
}));

export default useStyles;