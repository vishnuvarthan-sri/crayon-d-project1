import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, withStyles, Grid, TextField, Button, Link, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Select, Container, MenuItem } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Height } from '@material-ui/icons';
const styles = theme => ({
    root: {
        display: 'flex',
    },
    text: {
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(5)
    },
    button: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(107)
    },
    table: {
        width: 600,
      },
     view:{
         marginLeft:theme.spacing(40)
     },
     Vdivider:{
         marginLeft:theme.spacing(80),
         height:600,
         marginTop:theme.spacing(-16)
     }

})

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
                <div className={classes.text}>
                    <Select
                        value={this.state.value}
                        displayEmpty
                    >
                        <MenuItem value="">Design Task</MenuItem>
                        <MenuItem value={1}></MenuItem>
                        <MenuItem value={2}></MenuItem>
                    </Select>

                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                        startIcon={<AddIcon />}
                    >
                        Add Project
      </Button>
                    <br />
                    <ArrowLeftIcon style={{ marginLeft: -45 }} fontSize="large" /> <Divider />
<div style={{marginTop:20,fontSize:10}}>
    <h1>Timesheet
    <Button variant="outlined"
                        color="primary" className={classes.view}> VIEW FULL SHEET</Button>
                        <MoreHorizIcon style={{marginLeft:20}}/>

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
                        </Table>
                    </TableContainer>
                  
                    </div>
                    <Divider orientation="vertical" className={classes.Vdivider}/>
                </div>

            </div>

        )
    }


}

export default withStyles(styles)(App1);