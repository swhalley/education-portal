import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import { Drawer } from "@material-ui/core";

class TopNav extends Component {
  state = {
    navOpen: false
  };

  render() {
    const { history } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => this.setState({ navOpen: true })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            PEI Schools - An Open Data Look
          </Typography>
        </Toolbar>
        <Drawer
          open={this.state.navOpen}
          onClose={() => this.setState({ navOpen: false })}
        >
          <List component="nav">
            <ListItem button onClick={() => history.push("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button onClick={() => history.push("/schoolMap")}>
              <ListItemIcon>
                <MyLocationIcon />
              </ListItemIcon>
              <ListItemText primary="School Map" />
            </ListItem>

            <ListItem button onClick={() => history.push("/schoolAttendance")}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="School Attendance" />
            </ListItem>

            <Divider />
            <ListItem button onClick={() => history.push("/wishList")}>
              <ListItemIcon>
                <PlaylistAddIcon />
              </ListItemIcon>
              <ListItemText primary="Wish List" />
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    );
  }
}

export default withRouter(TopNav);
