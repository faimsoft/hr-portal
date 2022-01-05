import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import { Typography, FormControl, InputLabel, BootstrapInput, TablePagination, Paper, TCheckbox, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";






// button
import { LgButton } from '../../views/button';
import { HiringStatus } from '../../views/button'
import { Job } from '../../views/button';
// number
import { Number } from '../../views/button';


// icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        width: '1268px',
        height: '0px',
        left: '69px',
        // marginTop: '100px',
    },
}));



function JobView() {
    const classes = useStyles();

    //  button modal
    const [btopen, setBtOpen] = useState(false);
    const handleBtOpen = () => setBtOpen(true);
    const handleBtClose = () => setBtOpen(false);


    const history = useHistory();
    function handleClick() {
        history.push("/Jobcreat");
    }

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={2} style={{ marginBottom: "20px" }} >
                    <Grid item xs={6} style={{ marginLeft: "px" }} >
                        <Typography variant="h5">
                            <Button variant="text" ><ArrowBackIcon color="primary"
                                button
                                style={{ fontSize: '30px' }} onClick={handleClick}
                            /></Button>
                            Assistant Professor - Mechanical Engineering
                        </Typography>
                    </Grid>
                    <Grid item xs={2}  >
                        <HiringStatus select Status={"Job Status"} />
                    </Grid>
                    <Grid item xs={2} onClick={handleBtOpen} >
                        <LgButton lagbutton={"Assign to a job"} />
                    </Grid>
                    <Grid item xs={2} component={Link} to='./' >
                        <LgButton lagbutton={"Assign a candidate"} />
                    </Grid>


                </Grid>
                {/* btn */}
                <Grid container spacing={2} style={{ marginTop: "20px", marginLeft: "13px" }} >
                    <Grid item xs={2} component={Link} to='./' >
                        <Job job={"Applied"} />
                    </Grid>
                    <Grid item xs={2} component={Link} to='./' >
                        <Job job={"Shotlisted"} />

                    </Grid>

                    <Grid item xs={2} component={Link} to='./' >
                        <Job job={"In Review"} />

                    </Grid>
                    <Grid item xs={2} component={Link} to='./' >
                        <Job job={"Offered"} />

                    </Grid>
                    <Grid item xs={2} component={Link} to='./' >
                        <Job job={"Hired"} />
                        {/* <button>Job</button> */}
                    </Grid>
                    <Grid item xs={2} component={Link} to='./' >
                        <Job job={"In Review"} />
                        {/* <button>Job</button> */}
                    </Grid>
                </Grid>
                {/* number */}
                <Grid container spacing={2} style={{ marginTop: "20px", marginLeft: "13px" }} >
                    <Grid item xs={2} component={Link} to='./' >
                        <Number number={"50"} />
                    </Grid>
                    <Grid item xs={2} component={Link} to='./' >
                        <Number number={"50"} />

                    </Grid>

                    <Grid item xs={2} component={Link} to='./' >
                        <Number number={"50"} />

                    </Grid>
                    <Grid item xs={2} component={Link} to='./' >
                        <Number number={"50"} />

                    </Grid>
                    <Grid item xs={2} component={Link} to='./' >
                        <Number number={"50"} />
                        {/* <button>Job</button> */}
                    </Grid>
                    <Grid item xs={2} component={Link} to='./' >
                        <Number number={"50"} />
                        {/* <button>Job</button> */}
                    </Grid>
                </Grid>

            </div>



        </>
    )
}

export default JobView
