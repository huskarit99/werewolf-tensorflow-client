import { makeStyles } from "@material-ui/core/styles";

const backgrounDownload = {
  nonLogin: {
    heightPaper: 75,
    widthPaper: 28,
  },
  login: {
    heightPaper: 75,
    widthPaper: 22,
  },
};
const useStyles = (stateUser) =>
  makeStyles(() => ({
    paper: {
      width: "96%",
      boxShadow: "none",
      borderRadius: "20px",
      height: backgrounDownload[stateUser].heightPaper + "vh",
      background: "#2A2D3B",
    },
    container: {
      width: "100%",
      height: "100%",
      margin: "0",
      padding: "0",
    },
    item1: {
      width: "100%",
      height: "70%",
      padding: "0",
      margin: "0",
    },
    avatar: {
      width: "100%",
      height: "100%",
      borderRadius: "20px",
    },
    item2: {
      display: "flex",
      alignItems: "center",
      padding: "0 25px 0 25px",
      width: "100%",
      height: "14%",
      margin: "0",
    },
    item3: {
      padding: "0 25px 0 25px",
      width: "100%",
      height: "2%",
      margin: "0",
    },
    item4: {
      display: "flex",
      alignItems: "center",
      padding: "0 25px 0 25px",
      width: "100%",
      height: "14%",
      margin: "0",
    },
    button: {
      background: "#504EDF",
      borderRadius: "15px",
      color: "white",
      textTransform: "none",
      paddingTop: "8px",
      paddingBottom: "8px",
      minWidth: "100px",
      "&:hover": {
        color: "#504EDF",
        background: "#00000000",
        fontWeight: "bold",
        border: "1px solid #504EDF",
      },
      typography: {
        color: "white",
        backgroundColor: "white",
      },
      divider: {
        width: "100%",
        height: "100%",
      },
    },
  }));

export default useStyles;
