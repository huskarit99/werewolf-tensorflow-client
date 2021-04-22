import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
  },
  drawerPaper: {
    width: "22%",
    borderRight: "#34343D 1px solid",
  },
}));

export default useStyles;