import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import CallMergeIcon from "@material-ui/icons/CallMerge";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import Battery90Icon from "@material-ui/icons/Battery90";
import LaunchIcon from "@material-ui/icons/Launch";
import FastfoodIcon from "@material-ui/icons/Fastfood";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button
} from "@material-ui/core";
import { Drawer } from "@material-ui/core";

class TopNav extends Component {
  state = {
    navOpen: false,
    title: "An Open Data Look"
  };

  render() {
    const { classes } = this.props;
    const { title } = this.state;

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
          <Typography variant="title" color="inherit" className={classes.grow}>
            PEI Schools - {title}
          </Typography>
          <Button
            color="inherit"
            onClick={() =>
              window.open(
                "https://www.princeedwardisland.ca/en/information/finance/open-government-licence-prince-edward-island",
                "licence"
              )
            }
          >
            <LaunchIcon /> Licence Information
          </Button>
        </Toolbar>
        <Drawer
          open={this.state.navOpen}
          onClose={() => this.setState({ navOpen: false })}
        >
          <List component="nav">
            <ListItem
              button
              onClick={() => this.menuItemClick("/", "An Open Data Look")}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem
              button
              onClick={() => this.menuItemClick("/schoolMap", "School Map")}
            >
              <ListItemIcon>
                <MyLocationIcon />
              </ListItemIcon>
              <ListItemText primary="School Map" />
            </ListItem>

            <ListItem
              button
              onClick={() =>
                this.menuItemClick("/schoolAttendance", "School Attendance")
              }
            >
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="School Attendance" />
            </ListItem>

            <ListItem
              button
              onClick={() =>
                this.menuItemClick("/families", "Family of Schools")
              }
            >
              <ListItemIcon>
                <CallMergeIcon />
              </ListItemIcon>
              <ListItemText primary="Family of Schools" />
            </ListItem>

            <ListItem
              button
              onClick={() =>
                this.menuItemClick("/testing", "Standardized Testing")
              }
            >
              <ListItemIcon>
                <DoneOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Standardized Testing" />
            </ListItem>

            <ListItem
              button
              onClick={() => this.menuItemClick("/capacity", "True Capacity")}
            >
              <ListItemIcon>
                <Battery90Icon />
              </ListItemIcon>
              <ListItemText primary="True Capacity" />
            </ListItem>

            <ListItem
              button
              onClick={() =>
                this.menuItemClick(
                  "/industry",
                  "Industry Inspired Course Selection"
                )
              }
            >
              <ListItemIcon>
                <FastfoodIcon />
              </ListItemIcon>
              <ListItemText primary="Industry" />
            </ListItem>

            <Divider />
            <ListItem
              button
              onClick={() => this.menuItemClick("/wishList", "My Wish List")}
            >
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

  menuItemClick(path, title) {
    this.props.history.push(path);
    this.setState({ navOpen: false, title, title });
  }
}

const styles = {
  grow: {
    flexGrow: "1"
  }
};

export default withStyles(styles)(withRouter(TopNav));
