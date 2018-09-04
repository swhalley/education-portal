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
        <Typography color="primary">Tell Me About This Page</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.flowLayout}>
        <p>
          It is clear by looking at the table that many schools have experienced
          a drop in attendance over the last 5 to 15 years. Listening to the
          reports in the media, many of the complaints coming from the teachers
          unions is that class sizes are increasing. Due to the number of
          teacher positions that have been cut over the last few years, I have
          to wonder what programs and classes are being cut in order to push the
          class sizes up?
        </p>
        <p>
          This data set only tells one side of the story. Open Data is like a
          book and each dataset is a chapter telling part of the story. I would
          ask that the province considers releasing a new dataset which shows a
          breakdown of all of the classes offered in each school per year. This
          makes a little more sense at the high school level than it does at an
          elementary level. But even at the youngest levels we could see how
          many children are in each elementary class. The data set would serve a
          few purposes.
        </p>

        <ul>
          <li>We could confirm that class sizes are indeed going up</li>
          <li>
            We could analyze and see which programs and classes are being cut.
            Are any of those critical?
          </li>
          <li>
            Are enough of our kids taking the vital courses needed to succeed in
            today's economy?
          </li>
          <li>
            Data could be compared against industry data to push kids into the
            right classes
          </li>
        </ul>

        <p>
          Another area the new data set could benefit from is releasing gender
          statistics. Many work fields are dominated by one sex or the other. In
          the tech industry there is a big movement to ensure there is gender
          equality. Promoting technology to young women and encouraging them to
          enter the field is an important step. I think if the Education
          Department of PEI were to release the new data set to include the
          gender breakdown in each class would be a great step in understanding
          the trends of who are taking tech classes. Promotion and encouragement
          at a young age is important.
        </p>
        <p>
          This is a great first step for the Open Data movement on PEI. I was so
          happy to see many departments buy into the system and release 1-2 data
          sets to start. Not trying to do too much too early. I hope that over
          time each department in government realizes the importance of open
          data and continues to open more data and listen to their data
          consumers on ways to improve and grow.
        </p>
        <p>
          <strong>Edit</strong> It was pointed out to me after posting the
          article that the size of many elementary schools are growing. In
          interesting analysis would be to look at those numbers and forcast how
          large the high schools are expected to be in the future.
        </p>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default withStyles(styles)(FamilyBlob);
