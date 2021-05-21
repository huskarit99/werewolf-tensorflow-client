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
  },
  avatar: {
    width: "35%",
    height: "65%",
    fontSize: "1.5rem",
    textTransform: "uppercase",
  },
  typography: {
    color: "white",
    fontWeight: "bold",
    fontSize: "12px",
  },
  star: {
    height: "12px",
    width: "12px",
    backgroundColor: "#00000000",
    color: "yellow",
  },
  button: {
    backgroundColor: "rgba(255,255,255,0.3)",
    boxShadow: "none",
    color: "white",
    borderRadius: "20px",
    height: "50%",
    width: "60%",
    fontWeight: "bold",
    fontSize: "12px",
  },
  typography1: {
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
  },
  box: {
    width: "200px",
    height: "200px",
  },
  container: {
    height: "100%",
    width: "100%"
  },
  item1: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  item2: {
    height: "10%",
    textAlign: "center",
  },
  item3: {
    height: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}));

export default useStyles;