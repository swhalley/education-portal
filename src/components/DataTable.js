import React, { Component } from "react";
import { loadSchoolData, getMinYear, getMaxYear } from "./SchoolDataUtil";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Paper,
  withStyles
} from "@material-ui/core";

const CustomTableCell = withStyles(theme => ({
  head: {
    padding: 1
  },
  body: {
    padding: 1
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 950
  },
  tableWrapper: {
    overflowX: "auto"
  },
  stripped: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

/**
 * TODO Separate "school" specifics from "My Table from Material UI"
 */
class DataTable extends Component {
  state = {
    schoolData: {},
    schoolsList: [],
    yearMin: 0,
    yearMax: 0,
    page: 0,
    rowsPerPage: 20
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>School Name</CustomTableCell>
                {this.getHeaderRows()}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.getBodyRows()}
              {this.padEmptyRows()}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={this.state.schoolsList.length}
          rowsPerPage={this.state.rowsPerPage}
          labelRowsPerPage={null}
          rowsPerPageOptions={[]}
          page={this.state.page}
          onChangePage={(event, page) => this.setState({ page })}
        />
      </Paper>
    );
  }

  componentDidMount() {
    loadSchoolData(this.props.src)
      .then(data => {
        this.setState({
          schoolData: data,
          schoolsList: Object.keys(data),
          yearMin: getMinYear(data),
          yearMax: getMaxYear(data)
        });
      })
      .catch(error => console.log(error));
  }

  getHeaderRows() {
    let headers = [];
    for (let year = this.state.yearMin; year <= this.state.yearMax; year++) {
      headers.push(<CustomTableCell key={year}>{year}</CustomTableCell>);
    }

    return headers;
  }

  getBodyRows() {
    const { page, rowsPerPage, schoolsList } = this.state;
    const { classes } = this.props;

    return schoolsList
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map(row => {
        let yearData = [];
        for (
          let year = this.state.yearMin;
          year <= this.state.yearMax;
          year++
        ) {
          yearData.push(
            <CustomTableCell key={year}>
              {this.state.schoolData[row][year] || "-"}
            </CustomTableCell>
          );
        }

        return (
          <TableRow key={row} className={classes.stripped}>
            <CustomTableCell>{row}</CustomTableCell>
            {yearData}
          </TableRow>
        );
      });
  }

  padEmptyRows() {
    const { page, rowsPerPage, schoolsList } = this.state;
    const { classes } = this.props;
    const numEmptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, schoolsList.length - page * rowsPerPage);

    let emptyRows = [];
    for (let i = 0; i < numEmptyRows; i++) {
      emptyRows.push(
        <TableRow key={i} className={classes.stripped}>
          <CustomTableCell colSpan={schoolsList.length + 1} />
        </TableRow>
      );
    }

    return emptyRows;
  }
}

export default withStyles(styles)(DataTable);
