import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  icon: {
    color: "white",
    backgroundColor: "#3f51b5",
    borderRadius: "5px",
    width: "30px",
    height: "30px",
  },
  username: {
    color: "#84848A",
    fontSize: "13px",
    lineHeight: "1",
  },
  fullname: {
    color: "white",
    lineHeight: "1.5"
  },
  item: {
    textAlign: "right",
    marginRight: "1.5vh",
  }
}))

export default useStyles;