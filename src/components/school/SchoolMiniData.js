import React, { Component } from "react";
import { Card, CardContent, Typography, withStyles } from "@material-ui/core";
import "./SchoolMiniData.css";

const styles = {
  drawerWidth: {
    minWidth: 430
  }
};

class SchoolMiniData extends Component {
  render() {
    const { grades, enrollment, family, classes } = this.props;

    return (
      <Card className={classes.drawerWidth}>
        <CardContent>
          <Typography variant="headline" component="h2">
            {this.props.schoolName}
          </Typography>
          <Typography component="div">
            <dl>
              <dt>Grades: </dt>
              <dd>{`${grades.gradeMin} - ${grades.gradeMax}`}</dd>
            </dl>
            <dl>
              <dt>Family: </dt>
              <dd>{family}</dd>
            </dl>
            <dl>
              <dt>{enrollment.year} Enrollment:</dt>
              <dd>{enrollment.count}</dd>
            </dl>
            <dl>
              <dt>Address:</dt>
              {this.generateAddress(this.props.address)}
            </dl>
          </Typography>
        </CardContent>
      </Card>
    );
  }

  generateAddress(address) {
    return address
      .split(",")
      .map(addressPart => (
        <dd key={`${address}_${addressPart}`}>{addressPart}</dd>
      ));
  }
}

export default withStyles(styles)(SchoolMiniData);
