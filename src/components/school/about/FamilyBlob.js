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
  }
});

const FamilyBlob = props => {
  const { classes } = props;

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Tell Me About This Page</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.flowLayout}>
        <p>
          As school rezoning has come to the forefront in recent months, I
          wanted to do an analysis on the school zones and figure out what is
          really going on. I began by looking at the "Family of Schools" in PEI
          and wanted to look how schools feed into each other. How do we end up
          with the imbalances where some schools are running at full capacity
          while others are under capacity. Given that I did not attend school in
          PEI, I had alot to learn.
        </p>
        <p>
          The first thing that I discovered was that there is no true "feeder"
          schools in PEI. It is not always clear which family of schools a
          student belongs to. I found out early in the investigation that a
          student who starts out elementary school in one family of schools may
          not graduate with his friends that he made early on. Those friends may
          end up in a different family of schools without ever moving.
        </p>
        <p>
          The Charlottetown family of schools offered a distinct challenge. The
          elementary schools feed into multiple intermediate schools and there
          is no clear distinction, other than knowing the street you live on
          dictates that. You can understand how someone who is new to PEI would
          be confused by this.
        </p>
        <p>
          The school board and the Home and School Federation differ on their
          outlines of the family of schools. If you look at the{" "}
          <a href="https://edu.princeedwardisland.ca/psb/schools/school-information-2/">
            School Boards
          </a>{" "}
          implementation of the family of schools, Charlottetown high schools
          are treated as one. But on the{" "}
          <a href="http://peihsf.ca/schools">Home and School Federation</a> web
          site, Colonel Gray and Charlottetown Rural are listed as separate
          families.
        </p>
        <p>I set out to discover the following</p>
        <ul>
          <li>
            Can we find a way not to tear friends apart? Are their clearly
            defined school boundaries which we can utilize to create a true
            feeder system.
          </li>
          <li>
            Are there any clear resources out there helping parents know which
            schools their children will go to?
          </li>
          <li>
            What other departments can we look at to find trends to understand
            our future school populations? Example, would there be any fisheries
            data to show that fishing is on a rise/decline and estimate
            population growth/decline in certain areas.
          </li>
        </ul>
        <p>
          I create the below diagrams as a way to show which schools logically
          fit into a true feeder system. I used the School Boards breakdown for
          the family of schools to build the following diagram.
        </p>
        <p>
          Select the Family of schools from the list. Each school is displayed
          with a hight showing how many grades it holds. Each grade is a "unit"
          high. so a school that is k-3, would be 4 units high.
        </p>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default withStyles(styles)(FamilyBlob);
