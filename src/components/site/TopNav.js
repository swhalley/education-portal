import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import CallMergeIcon from "@material-ui/icons/CallMerge";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
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
            <ListItem button onClick={() => this.menuItemClick("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button onClick={() => this.menuItemClick("/schoolMap")}>
              <ListItemIcon>
                <MyLocationIcon />
              </ListItemIcon>
              <ListItemText primary="School Map" />
            </ListItem>

            <ListItem
              button
              onClick={() => this.menuItemClick("/schoolAttendance")}
            >
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="School Attendance" />
            </ListItem>

            <ListItem button onClick={() => this.menuItemClick("/families")}>
              <ListItemIcon>
                <CallMergeIcon />
              </ListItemIcon>
              <ListItemText primary="Family of Schools" />
            </ListItem>

            <ListItem button onClick={() => this.menuItemClick("/testing")}>
              <ListItemIcon>
                <DoneOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Standardized Testing" />
            </ListItem>

            <Divider />
            <ListItem button onClick={() => this.menuItemClick("/wishList")}>
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

  menuItemClick(path) {
    this.props.history.push(path);
    this.setState({ navOpen: false });
  }
}

export default withRouter(TopNav);
