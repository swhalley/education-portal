import React, { Component } from "react";
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
    padding: 5
  },
  body: {
    padding: 5
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
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    },
    height: "initial"
  }
});

class CleanTable extends Component {
  state = {
    page: 0,
    rowsPerPage: 20
  };

  render() {
    const { classes, data } = this.props;

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>{this.generateHeaderRow()}</TableHead>
            <TableBody>
              {this.getBodyRows()}
              {this.padEmptyRows()}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={this.state.rowsPerPage}
          labelRowsPerPage={null}
          rowsPerPageOptions={[]}
          page={this.state.page}
          onChangePage={(event, page) => this.setState({ page })}
        />
      </Paper>
    );
  }

  generateHeaderRow() {
    let headers = this.props.header.map(header => {
      return <CustomTableCell key={header}>{header}</CustomTableCell>;
    });

    return <TableRow>{headers}</TableRow>;
  }

  padEmptyRows() {
    const { page, rowsPerPage } = this.state;
    const { classes, data } = this.props;
    const numEmptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    let emptyRows = [];
    for (let i = 0; i < numEmptyRows; i++) {
      emptyRows.push(
        <TableRow key={i} className={classes.row}>
          <CustomTableCell colSpan={(data[0] || [""]).length}>
            &nbsp;
          </CustomTableCell>
        </TableRow>
      );
    }

    return emptyRows;
  }

  getBodyRows() {
    const { page, rowsPerPage } = this.state;
    const { classes, data } = this.props;

    return data
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map(row => {
        let columns = row.map((column, index) => {
          return (
            <CustomTableCell key={`${column}_${index}`}>
              {column}
            </CustomTableCell>
          );
        });
        return (
          <TableRow key={row[0]} className={classes.row} hover={true}>
            {columns}
          </TableRow>
        );
      });
  }
}

export default withStyles(styles)(CleanTable);
