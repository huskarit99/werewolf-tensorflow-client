import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submit: {
    background: "#004c9e",
    color: "#fff",
    margin: theme.spacing(3, 0, 2),
    "&:hover": {
      background: "#004c9edd",
    },
  },
}));

export default useStyles;