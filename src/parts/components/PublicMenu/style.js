import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  ListItem as MuiListItem,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  link: {
    backgroundColor: "transparent",
    background: "transparent",
    textDecoration: "none",
    color: "white",
  },
  divider: {
    backgroundColor: "white",
  },
}));

const ListItem = withStyles({
  root: {
    "& .MuiTypography-root": {
      color: "#84848A",
    },

    "&.Mui-selected": {
      backgroundColor: "#24242E",
      "& .MuiTypography-subtitle2": {
        color: "white",
      }
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#24242E",
      "& .MuiTypography-subtitle2": {
        color: "white",
      }
    },
    "&:hover": {
      "& .MuiTypography-subtitle2": {
        color: "white",
        backgroundColor: "#24242E",
      }
    },
  },
})(MuiListItem);

export { useStyles, ListItem };