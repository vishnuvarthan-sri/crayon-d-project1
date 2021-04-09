import React from 'react';
import {  withStyles, Grid, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText,ListItemSecondaryAction, Divider, Badge } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import SpeedIcon from '@material-ui/icons/Speed';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import GetAppIcon from '@material-ui/icons/GetApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import GroupWorkIcon from '@material-ui/icons/GroupWork';


import App1 from './App1.jsx'



const drawerWidth = 220;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  margin: {
    margin: theme.spacing(2),
  },
  paper: {
    height: 140,
    width: 100,
  },
  header: {
    marginLeft: theme.spacing(7),
    marginTop: theme.spacing(3),
  },
  footer: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    padding: 20,
    
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    // display: 'flex',
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#6f03fc"
  },
  list: {
    marginTop: theme.spacing(5)
  },
  divider: {
    width: "20%",
    marginLeft: theme.spacing(2),
  },
  dividerH: {
    width: "50%"

  },
  marker:{
    marginLeft:theme.spacing(2),
    marginTop:theme.spacing(2),
    cursor:"pointer"
  },
  openmarker:{
    marginLeft:theme.spacing(-10),
    marginTop:theme.spacing(2),
    cursor:"pointer"
  }

});



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       open:true,
       full:""
    }
  }
close=()=>{
  this.setState({
    open:false,
    full:"opened"
  })
}
open=()=>{
  this.setState({
    open:true,
    full:""
  })
}
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={this.state.open}
          anchor="left"
        >
          <div className={classes.header}>
            <GroupWorkIcon style={{ color:  "#f5d442" }} fontSize="large"/>
          </div>
          <div className={classes.list}>
            <Divider className={classes.divider} />
            <List>
              <ListItem button >
                <ListItemIcon>
                  <SpeedIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "white" }} primary="Dashboard" />
                <ListItemSecondaryAction>
                    <PlayCircleFilledIcon style={{ color: "#f5d442",cursor:"pointer" }} onClick={this.close}/>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AvTimerIcon style={{ color: "lightgrey" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "lightgrey" }} primary="Timesheet" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <MultilineChartIcon style={{ color: "lightgrey" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "lightgrey" }} primary="Activity" />
              </ListItem>
            </List>
            <Divider className={classes.divider} />
            <List>
              <ListItem button>
                <ListItemIcon>
                <EventAvailableIcon style={{ color: "lightgrey" }} />
                  
                </ListItemIcon>
                <ListItemText style={{ color: "lightgrey" }} primary="To-Do" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                <ListAltIcon style={{ color: "lightgrey" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "lightgrey" }} primary="Invoices" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <FolderOpenIcon style={{ color: "lightgrey" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "lightgrey" }} primary="Projects" />
              </ListItem>
            </List>
            <Divider className={classes.divider} />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <HelpOutlineIcon style={{ color: "lightgrey" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "lightgrey" }} primary="Help" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <GetAppIcon style={{ color: "lightgrey" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "lightgrey" }} primary="Download App" />
              </ListItem>
            </List>
          </div>
        < div className={classes.footer}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
          >
            <Badge color="secondary" badgeContent={2} style={{ color: "white", marginRight: 20,marginBottom:10 }}>
              <NotificationsIcon />
            </Badge>
            <Divider orientation="vertical" flexItem />
            <SettingsIcon style={{ color: "white", marginLeft: 20, marginRight: 20,marginBottom:10 }} />
            <Divider orientation="vertical" flexItem />
            <Avatar style={{ marginLeft: 20 }}>H</Avatar>
          </Grid>
          </div>
        </Drawer>
        <App1 open={this.state.full} again={this.open}/>
      </div>
    );
  }
}



export default withStyles(styles)(App);