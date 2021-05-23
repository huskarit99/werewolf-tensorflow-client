import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  canvas: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    // left: 0,
    // right: 0,
    // textAlign: "center",
    zindex: 999,
    width: 640,
    height: 480,
  },
  webcam: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    // left: 0,
    // right: 0,
    // textAlign: "center",
    zindex: 999,
    width: 640,
    height: 480,
  },
}));

export default useStyles;
