import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, Link, Avatar,Drawer,List,ListItem,ListItemIcon,ListItemText,Divider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {LockOutlined } from '@material-ui/icons';
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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import App1 from './App1.jsx'


const drawerWidth = 240;
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
  header:{
marginLeft:theme.spacing(7),
marginTop:theme.spacing(3)
  },
  footer:{
marginTop:theme.spacing(17),
marginLeft:theme.spacing(-3)
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#6f03fc"
  },
  list:{
    marginTop:theme.spacing(5)
  },
  divider:{
    width:"20%",
    marginLeft:theme.spacing(2),
  },
  dividerH:{
    width:"50%"
  
  }

});
 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
     
    }
  }
 
  render() {
    const {classes}=this.props
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.header}>
        <LockOutlined/>
         </div>
        <div className={classes.list}>
        <Divider className={classes.divider}/>
         <List>
            <ListItem button >
              <ListItemIcon>
                <SpeedIcon style={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText style={{color:"white"}} primary="Dashboard" />
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <AvTimerIcon style={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText style={{color:"white"}} primary="Timesheet" />
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <MultilineChartIcon style={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText style={{color:"white"}} primary="Activity" />
            </ListItem>
        </List>
        <Divider className={classes.divider} />
        <List>
            <ListItem button>
              <ListItemIcon>
                <ListAltIcon style={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText style={{color:"white"}} primary="To-Do" />
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <EventAvailableIcon style={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText style={{color:"white"}} primary="Invoices" />
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <FolderOpenIcon style={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText style={{color:"white"}} primary="Projects" />
            </ListItem>
        </List>
        <Divider className={classes.divider} />
        <List>
            <ListItem button>
              <ListItemIcon>
                <HelpOutlineIcon style={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText style={{color:"white"}} primary="Help" />
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <GetAppIcon style={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText style={{color:"white"}} primary="Download App" />
            </ListItem>
        </List>
        </div>
        <div className={classes.footer}>
        <Grid container alignItems="flex-end" justify="center"  >
        <NotificationsIcon style={{color:"white",marginRight:20}} />
        <Divider orientation="vertical" flexItem />
        <SettingsIcon  style={{color:"white",marginLeft:20,marginRight:20}}/>
        <Divider orientation="vertical" flexItem />
        <AccountCircleIcon style={{color:"white",marginLeft:20}}/>
      </Grid>
        </div>
        </Drawer>
        <App1 />
      </div>
    );
  }
}



export default withStyles(styles)(App);