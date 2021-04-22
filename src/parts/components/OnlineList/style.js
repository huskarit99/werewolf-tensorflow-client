import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100vh",
    overflow: "hidden",
    background: "rgba(19, 38, 94, 0.9)",
    borderRadius: "40px 0 0 40px",
    marginLeft: "10%",
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    borderRadius: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  input: {
    marginLeft: theme.spacing(1),
    color: "white",
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    marginLeft: "7%",
    marginRight: "7%",
    width: "86%",
    backgroundColor: "white",
  },

  list: {
    maxHeight: "100%",
    overflow: "auto",
    paddingTop: "0",
    paddingBottom: "0",
  },
  listItem: {
    paddingTop: "0",
    paddingBottom: "0",
    color: "#84848A",
  },
  avatar: {
    width: "35px",
    height: "35px",
    borderRadius: "10px",
  },
}));

export default useStyles;