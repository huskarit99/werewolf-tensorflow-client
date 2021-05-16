import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { withStyles, makeStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: "0",
  },
  closeButton: {
    padding: "0",
    color: "white",
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
    }
  },
  textField: {
    display: "inline-block",
    border: "1px thin #202124",
    borderRadius: "5px",
    color: "white",
    "&:hover": {
      border: "1px thin #3f51b5",
    },
    "& .MuiInputBase-input": {
      fontSize: "0.875rem",
      color: "white",
      width: "300px"
    },
  },
  div: {
    display: "inline-block",
    width: "80px",
    height: "40px",
  },
  bodyDialog: {
    display: "flex",
    alignItems: "center",
    height: "150px",
    backgroundColor: "rgb(46, 46, 56)",
  },
  typography: {
    display: "flex",
    color: "white",
    fontSize: "0.875rem",
    alignItems: "center",
    height: "100%",
  },
  button: {
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
    }
  },
  footerDialog: {
    display: "flex",
    height: "60px",
    alignItems: "center",
    backgroundColor: "rgb(46, 46, 56)"
  }
}))


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <div style={{ display: "inline-block", width: "70%", height: "100%" }}>
          <div style={{ display: "flex", width: "100%", height: "100%", justifyContent: "flex-start", alignItems: "center" }}>
            <Typography variant="h6" >{children}</Typography>
          </div>
        </div>
        <div style={{ display: "inline-block", width: "30%", height: "100%" }}>
          <div style={{ display: "flex", width: "100%", height: "100%", justifyContent: "flex-end" }}>
            {onClose ? (
              <IconButton
                aria-label="close"
                className={classes.closeButton}
                onClick={onClose}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </div>
        </div>
      </div>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: "16px"
  },
}))(MuiDialogActions);


export { DialogContent, DialogActions, DialogTitle, useStyles };