import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, withStyles, Grid, Button, Avatar, List, ListItem, ListItemText, ListItemAvatar, ListItemSecondaryAction, Divider, Select, MenuItem, Typography } from '@material-ui/core';
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
const styles = theme => ({
    root: {
        display: 'flex',
    },
    text: {
        flexGrow: 1,
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(5)
    },
    button: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(107)
    },
    table: {
        width: 650,
    },
    table1: {
        width: 685,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    view: {
        marginLeft: theme.spacing(40)
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
        flexGrow: 1,
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(6)
    },
    paper1: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 300,
        background: "blueviolet",
        borderRadius: 14,
    },
    paper2: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 300,
        background: "lightgrey",
        marginTop: theme.spacing(3),
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
        width: 300,

    },
    pdfbutton1: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(5),
        width: 300,

    },
    leftside1: {
        flexGrow: 1,
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(6)
    },
    screenshot: {
        width: '110%',
        maxWidth: 400,
        backgroundColor: theme.palette.background.paper,
    },


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
            <div className={classes.root}>
                <CssBaseline />
                <div className={classes.text}>
                    <Grid container direction="row">
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
                    <Grid container direction="row">
                        <Grid item >
                            <div>
                                <h1>Timesheet
                               <Button variant="outlined"
                                        color="primary" className={classes.view}> VIEW FULL SHEET</Button>
                                    <MoreHorizIcon style={{ marginLeft: 20 }} />

                                </h1>
                                <TableContainer >
                                    <Table className={classes.table} aria-label="simple table">
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
                        <Grid item>

                            <div className={classes.root1}>
                                <Typography variant="h1" style={{ fontSize: 20, marginBottom: 15 }}> Report</Typography>
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
                                <Button variant="outlined" color="primary" startIcon={<Description />} className={classes.pdfbutton} size="large">Export As Pdf</Button>
                            </div>
                        </Grid>
                    </Grid>
                    <div>
                        <Divider />
                    </div>
                    <Grid container direction="row">
                        <Grid item>
                            <div className={classes.table1}>
                                <Typography variant="h1" style={{ fontSize: 20, marginTop: 20 }}> To-Do lists</Typography>
                                <Grid container spacing={1} className={classes.grid}>
                                    <Grid container spacing={2} direction="row" className={classes.grid2}>
                                        <Grid item style={{ marginTop: 15 }}>
                                            <Typography variant="h1" style={{ fontSize: 20, color: "blueviolet" }} align="center">20<br /> May</Typography>
                                        </Grid>
                                        <Grid item xs={6}  >
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
                                        <Grid item xs={6}  >
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
                                        <Grid item xs={6}  >
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
                            <Divider orientation="vertical" />
                        </div>
                        {/* <div >
                            <Divider orientation="vertical" className={classes.Vdivider} />
                        </div> */}
                        <Grid item>
                            <div className={classes.leftside1}>
                                <Typography variant="h1" style={{ fontSize: 20, marginBottom: 20 }}> Screenshots</Typography>
                                <List className={classes.screenshot}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <PanoramaOutlinedIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="shots_1_attach_1.png" secondary="Jan 9, 2014" />
                                        <ListItemSecondaryAction>
                                            <Button variant="outlined" color="primary" size="small">view</Button>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <PanoramaOutlinedIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="shots_1_attach_3.png" secondary="Jan 7, 2014" />
                                        <ListItemSecondaryAction>
                                            <Button variant="outlined" color="primary" size="small">view</Button>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <VideocamOutlinedIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Screen_record_12.mov" secondary="July 20, 2014" />
                                        <ListItemSecondaryAction>
                                            <Button variant="contained" style={{ background: "blue", color: "whitesmoke" }} size="small">play</Button>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                </List>
                                <Button variant="outlined" color="primary" className={classes.pdfbutton1} size="large">View All</Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>

        )
    }


}

export default withStyles(styles)(App1);