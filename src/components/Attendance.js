import React, { Component, Fragment } from "react";

import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import SchoolsTable from "./school/SchoolsTable";
import AttendanceBlob from "./school/about/AttendanceBlob";
import { withStyles, SnackbarContent, Snackbar } from "@material-ui/core";

const styles = theme => ({
  message: {
    display: "flex",
    alignItems: "center"
  },
  primary: {
    backgroundColor: theme.palette.primary.light,
    maxWidth: "initial"
  },
  icon: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  wrapper: {
    width: "110%"
  }
});

class Attendance extends Component {
  state = {
    infoOpen: true
  };

  render() {
    const { classes, ...other } = this.props;

    return (
      <Fragment>
        <AttendanceBlob />
        <Snackbar
          open={this.state.infoOpen}
          autoHideDuration={20000}
          onClose={() => this.setState({ infoOpen: false })}
          className={classes.wrapper}
        >
          <SnackbarContent
            className={classes.primary}
            message={
              <span className={classes.message}>
                <InfoIcon className={classes.icon} />
                Recent data is missing for 2016 and 2017 for a lot of schools.
                Totals and trends are not available.
              </span>
            }
            action={[
              <IconButton
                key="close"
                color="inherit"
                className={classes.close}
                onClick={() => this.setState({ infoOpen: false })}
              >
                <CloseIcon className={classes.icon} />
              </IconButton>
            ]}
          />
        </Snackbar>
        <SchoolsTable {...other} />
      </Fragment>
    );
  }
}

export default withStyles(styles)(Attendance);
