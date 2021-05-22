import {
  List,
  ListItem,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  DialogTitle as MuiDialogTitle,
  Typography,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SettingsIcon from "@material-ui/icons/Settings";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: "0",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "white",
  },
  icon: {
    borderRadius: "5px",
    backgroundColor: "#00000000",
    height: "35px",
    width: "35px",
  },
});

const useStyles = makeStyles(() => ({
  title: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgb(46, 46, 56)",
    padding: "16px",
    "& .MuiTypography-root": {
      color: "white",
      fontSize: "1.4rem",
      fontWeight: "bold",
    },
  },
  textField: {
    display: "inline-block",
    border: "1px solid #3f51b5",
    borderRadius: "5px",
    color: "white",
    "&:hover": {
      border: "1px solid #3f51b5",
    },
    "& .MuiInputBase-input": {
      fontSize: "0.875rem",
      color: "white",
      width: "50px",
      textAlign: "center",
    },
  },
  div: {
    display: "inline-block",
    width: "40px",
    height: "40px",
  },
  bodyDialog: {
    display: "flex",
    alignItems: "center",
    height: "300px",
    width: "400px",
    backgroundColor: "rgb(46, 46, 56)",
  },
  typography: {
    display: "flex",
    color: "white",
    fontSize: "0.875rem",
    alignItems: "center",
    height: "100%",
  },
  buttonSave: {
    background: "#3f51b5",
    color: "white",
    textTransform: "none",
    paddingTop: "8px",
    paddingBottom: "8px",
    minWidth: "100px",
    "&:hover": {
      color: "#3f51b5",
      background: "#00000000",
      fontWeight: "bold",
      border: "1px solid #3f51b5",
    },
  },
  buttonCancle: {
    color: "#3f51b5",
    background: "#00000000",
    border: "1px solid #3f51b5",
    fontWeight: "bold",
    textTransform: "none",
    paddingTop: "8px",
    paddingBottom: "8px",
    minWidth: "100px",
    "&:hover": {
      background: "#3f51b5",
      color: "white",
    },
  },
  itemSave: {
    width: "100%",
    textAlign: "start",
    paddingLeft: "15px",
  },
  itemCancle: {
    width: "100%",
    textAlign: "end",
    paddingRight: "15px",
  },
  footerDialog: {
    display: "flex",
    height: "80px",
    alignItems: "center",
    backgroundColor: "rgb(46, 46, 56)",
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
      <div style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <List>
            <ListItem
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0",
              }}
            >
              <SettingsIcon
                className={classes.icon}
                style={{ color: "blue" }}
              />
            </ListItem>
            <ListItem style={{ padding: "0" }}>
              <Typography variant="h6">{children}</Typography>
            </ListItem>
          </List>
        </div>
      </div>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: "1px solid rgb(150,150,150)",
    borderBottom: "1px solid rgb(150,150,150)",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
  },
}))(MuiDialogActions);

export { DialogContent, DialogActions, DialogTitle, useStyles };
