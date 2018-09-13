import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = () => ({
  flowLayout: {
    flexDirection: "column"
  },
  bottom: {
    marginBottom: "15px"
  }
});

const AboutThisPage = props => {
  const { classes } = props;

  return (
    <ExpansionPanel className={classes.bottom}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color="primary">Tell Me About This Page</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.flowLayout}>
        {props.children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default withStyles(styles)(AboutThisPage);
