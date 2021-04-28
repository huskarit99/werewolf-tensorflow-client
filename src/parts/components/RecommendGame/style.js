import { makeStyles } from '@material-ui/core/styles';

const recommendGameImage = {
  nonLogin: {
    heightPaper: 70,
    widthPaper: 28,
    widthSubPaper: 28,
    magrinTopSubPaper: 55,
    fontSize1: 1.7,
    fontSize2: 0.875
  },
  login: {
    heightPaper: 65,
    widthPaper: 22,
    widthSubPaper: 22,
    magrinTopSubPaper: 50,
    fontSize1: 1.4,
    fontSize2: 0.75
  }
}

const useStyles = (stateUser) => makeStyles(() => ({
  subPaper: {
    position: "absolute",
    boxShadow: "none",
    borderRadius: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: recommendGameImage[stateUser].widthSubPaper + "vw",
    height: "15vh",
    marginTop: recommendGameImage[stateUser].magrinTopSubPaper + "vh",
  },
  paper: {
    borderRadius: "20px",
    height: recommendGameImage[stateUser].heightPaper + "vh",
    width: recommendGameImage[stateUser].widthPaper + "vw",
    backgroundColor: "#00000000"
  },
  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: "20px",
  },
  typography1: {
    color: "white",
    fontSize: recommendGameImage[stateUser].fontSize1 + "rem",
    paddingLeft: "3%",
    paddingTop: "3%",
  },
  typography2: {
    color: "rgb(132, 132, 138)",
    fontSize: recommendGameImage[stateUser].fontSize2 + "rem",
    paddingLeft: "3%",
    paddingTop: "2%",
  }
}));

export default useStyles;