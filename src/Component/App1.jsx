import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, withStyles, Grid, Button, List, ListItem, ListItemText, ListItemSecondaryAction, Divider, Select, MenuItem, Typography, ListItemIcon,Accordion,AccordionActions } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import { Description } from '@material-ui/icons';
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import TocIcon from '@material-ui/icons/Toc';
const styles = theme => ({
    root: {
        display: 'flex',
    },
    openroot:{
        display: 'flex',
        marginLeft:theme.spacing(-15)
    },
    text: {
        
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(5),   
    },
   
    button: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(107)
    },
   
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    view: {
        marginLeft: theme.spacing(60)
    },
    Vdivider: {
        marginLeft: theme.spacing(-23),

    },
    horizon: {
        float: "right",
        marginTop: theme.spacing(-7)
    },
    grid: {
        marginLeft: theme.spacing(3)
    },
    grid2: {
        marginTop: theme.spacing(2)
    },
    leftside: {
        marginLeft: theme.spacing(-35),
        marginTop: theme.spacing(25)
    },
    root1: {
    
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(6),
       
    },
    root2: {
    
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(8),
       
    },
    paper1: {
        padding: theme.spacing(2), 
        background: "blueviolet",
        borderRadius: 14,
    },
    paper2: {
        padding: theme.spacing(2),
        background: "lightgrey",
        borderRadius: 14,
    },
    varybutton: {

        marginLeft: 5,
        background: "lightgreen",
        color: "#036303"

    },
    varybutton1: {

        marginLeft: 5,
        background: "#e69c9a",
        color: "#960400"

    },
    pdfbutton: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(5),
        width: 320,

    },
    pdfbutton1: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(4),
        width: 320,

    },
    
    screenshot: {
        width:340,
        backgroundColor: theme.palette.background.paper,
    },
    marker:{
        cursor:"pointer",
        marginRight:theme.spacing(2),
       
      },
      listItemroot:{
        overflow:"hidden"
      },
      listbutton:{
        padding:theme.spacing(2)
      }


})
function createData(name, Date, starttime, stoptime, Duration) {
    return { name, Date, starttime, stoptime, Duration };
}

const rows = [
    createData('Landing page Design', 'May 21,2019', '1.10 pm', '9.20pm', '8:10:27'),
    createData('Mobile app', 'May 22,2019', '12.00 pm', '8.20pm', '8:00:00'),
    createData('UI/UX', 'May 23,2019', '1.10 pm', '1.20pm', '0:10:37'),
    createData('Website/apps', 'May 24,2019', '1.11 pm', '9.00pm', '8:00:00'),
    createData('Branding', 'May 25,2019', '1.10 pm', '1.20pm', '0:10:37'),
];

class App1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    render() {
        const { classes } = this.props
        return (
            <div className={this.props.open ==="opened" ? classes.openroot : classes.root}>
                <CssBaseline />
                <div className={classes.text}>
              
                    <Grid container direction="row">
                        <Grid item>
                        <TocIcon className={classes.marker} onClick={this.props.again} fontSize="large"/>
                        </Grid>
                        <Grid item>  
                            <Select
                                value={this.state.value}
                                displayEmpty
                            >
                                <MenuItem value="">Design Task</MenuItem>
                                <MenuItem value={1}></MenuItem>
                                <MenuItem value={2}></MenuItem>
                            </Select>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="outlined"
                                color="primary"
                                className={classes.button}
                                startIcon={<AddIcon />}
                            >
                                Add Project
                    </Button>
                        </Grid>
                    </Grid>
                    <Divider style={{ marginTop: 20 }} />
                    <Grid container direction="row" >
                        <Grid item xs={12} sm={12} md={8} lg={8} >
                            <div>
                                <div style={{display:"flex",alignItems:"center"}}>
                                <h1 >Timesheet</h1>
                               <Button variant="outlined"
                                        color="primary" className={classes.view}> VIEW FULL SHEET</Button>
                                    <MoreHorizIcon style={{ marginLeft: 20 }} />
                                </div>
                                <TableContainer >
                                    <Table  aria-label="simple table">
                                        <TableHead>
                                            <TableCell>Project</TableCell>
                                            <TableCell align="right">Date</TableCell>
                                            <TableCell align="right">Start time</TableCell>
                                            <TableCell align="right">Stop time</TableCell>
                                            <TableCell align="right">Duration</TableCell>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.Date}</TableCell>
                                                    <TableCell align="right">{row.starttime}</TableCell>
                                                    <TableCell align="right">{row.stoptime}</TableCell>
                                                    <TableCell align="right">{row.Duration}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>

                        </Grid>
                        <div style={{ marginLeft: 20 }}>
                            <Divider orientation="vertical" />
                        </div>
                        <Grid item xs={6} sm={6} md={3} lg={3} >
                              <div className={classes.root1}>
                                  <Grid container direction="column" spacing={2} >
                                      <Grid item >
                                <Typography variant="h1" style={{ fontSize: 20 }}> Report</Typography>
                                </Grid>
                                <Grid item>
                                <Paper className={classes.paper1} elevation={3} >
                                    <Grid container spacing={2}>
                                        <Grid item style={{ marginTop: 12 }}>
                                            <MultilineChartIcon style={{ color: "white" }} />
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Typography gutterBottom variant="subtitle1" style={{ color: "white" }}>
                                                        Weekly Activity
                   </Typography>
                                                    <Typography variant="body2" gutterBottom style={{ color: "white" }}>
                                                        52%
                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item style={{ marginLeft: 5 }}>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    className={classes.varybutton}
                                                    startIcon={<ArrowDropUpIcon />}
                                                >
                                                    17%
                      </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                </Grid>
                                <Grid item>
                                <Paper className={classes.paper2} elevation={0}>
                                    <Grid container spacing={2}>
                                        <Grid item style={{ marginTop: 12 }}>
                                            <AvTimerIcon style={{ color: "black" }} />
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Typography gutterBottom variant="subtitle1" style={{ color: "black" }}>
                                                        Worked this week
                       </Typography>
                                                    <Typography variant="body2" gutterBottom style={{ color: "black" }}>
                                                        11:56:33
                           </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item style={{ marginLeft: 5 }}>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    className={classes.varybutton1}
                                                    startIcon={<ArrowDropDownIcon />}
                                                >
                                                    17%
                          </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                </Grid>
                                <Grid item >
                                <Button variant="outlined" color="primary" startIcon={<Description />} style={{width:300}} size="large">Export As Pdf</Button> 
                                </Grid>
                                </Grid>
                                </div>
                        </Grid>
                    </Grid>
                    <div>
                        <Divider />
                    </div>
                    <Grid container direction="row">
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <div>
                                <Typography variant="h1" style={{ fontSize: 20, marginTop: 20 }}> To-Do lists</Typography>
                                <Grid container spacing={1} className={classes.grid}>
                                    <Grid container spacing={2} direction="row" className={classes.grid2}>
                                        <Grid item style={{ marginTop: 15 }}>
                                            <Typography variant="h1" style={{ fontSize: 20, color: "blueviolet" }} align="center">20<br /> May</Typography>
                                        </Grid>
                                        <Grid item xs={10}  >
                                            <Paper className={classes.paper} elevation={3}>
                                                <Typography variant='h1' style={{ fontSize: 20 }} align="left" >Revamp instagram</Typography>
                                                <Typography align="left" style={{ fontSize: 12 }}>Today</Typography>
                                                <MoreHorizIcon className={classes.horizon} />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} direction="row" className={classes.grid2}>
                                        <Grid item style={{ marginTop: 15 }}>
                                            <Typography variant="h1" style={{ fontSize: 20 }} align="center">21<br /> May</Typography>
                                        </Grid>
                                        <Grid item xs={10}  >
                                            <Paper className={classes.paper} elevation={0}>
                                                <Typography variant='h1' style={{ fontSize: 20 }} align="left">Prototyping</Typography>
                                                <Typography align="left" style={{ fontSize: 12 }}>Upcoming</Typography>
                                                <MoreHorizIcon className={classes.horizon} />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} direction="row" className={classes.grid2}>
                                        <Grid item style={{ marginTop: 15 }}>
                                            <Typography variant="h1" style={{ fontSize: 20 }} align="center">22<br /> May</Typography>
                                        </Grid>
                                        <Grid item xs={10}  >
                                            <Paper className={classes.paper} elevation={0}>
                                                <Typography variant='h1' style={{ fontSize: 20 }} align="left">Collect references for new project</Typography>
                                                <Typography align="left" style={{ fontSize: 12 }}>Upcoming</Typography>
                                                <MoreHorizIcon className={classes.horizon} />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <div>
                            <Divider orientation="vertical" style={{marginLeft:20}}/>
                        </div>
                        {/* <div >
                            <Divider orientation="vertical" className={classes.Vdivider} />
                        </div> */}
                        <Grid item xs={6} sm={6} md={3} lg={3} >
                            <div className={classes.root1}>
                                <Grid container direction="column" spacing={2} >
                                    <Grid item> 
                                <Typography variant="h1" style={{ fontSize: 20, marginBottom: 20 }}> Screenshots</Typography>
                                </Grid>
                                <Grid item >
                                   
                                <List>
                                <ListItem >
                  <ListItemIcon>  
                   <PanoramaOutlinedIcon/> 
                  </ListItemIcon>
                  <ListItemText
                    primary="Shot_1"
                    secondary="attach_1.png"
                  />
                  <ListItemSecondaryAction  >
                    <Button size="small" color="primary" edge="end" variant="outlined">
                     View
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem >
                  <ListItemIcon>  
                   <PanoramaOutlinedIcon/> 
                  </ListItemIcon>
                  <ListItemText
                    primary="Shot_1"
                    secondary="attach_3.png"
                  />
                  <ListItemSecondaryAction >
                    <Button size="small" color="primary" edge="end" variant="outlined">
                     View
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem >
                  <ListItemIcon>  
                   <VideocamOutlinedIcon/> 
                  </ListItemIcon>
                  <ListItemText
                    primary="Screen"
                    secondary="attach_3.mov"
                  />
                  <ListItemSecondaryAction >
                    <Button size="small" color="primary" edge="end" variant="outlined">
                     View
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                
                                </List>
                                </Grid>
                                <Grid item>
                                <Button variant="outlined" color="primary" style={{width:230}} size="large">View All</Button>
                                </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>

        )
    }


}

export default withStyles(styles)(App1);