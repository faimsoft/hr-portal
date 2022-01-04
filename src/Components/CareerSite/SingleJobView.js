import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import LogoPic from '../Media/images/logo.jpg'
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Toolbar } from '@material-ui/core';
import {Box,Typography,Paper} from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
        logostyle: {
        width: "142px",
        height: "142px",
        left: "81px",
        top: "65px",
        borderRadius:"50%"
    },
    avilablejob: {
        width: "90%",
        padding: 10,
        marginLeft:80
    },
    lstpara: {
        marginLeft:80
    }
}))

const SingleJobView = () => {
            const classes = useStyles();


    return (
        <>
            <div >     
                <Toolbar/>
                <div align='center'>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                        <Toolbar/>
                        <Button component={Link} to="/CarerSiteMain"  align="left" color='primary' size="large"  ><ArrowBackIcon /></Button>
                        </Grid>
                        <Grid item xs={4}>
                    <img
                        className={classes.logostyle}
                        src={LogoPic}                                    
                    />
                        </Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>
                </div>
                <Toolbar />
                    <Box sx={{ bgcolor: '#F9F9F9' }}  className={classes.avilablejob}>
                <div align='center'>
                    <Box  >
                        <br />
                        <Typography varient="h3" style={{ fontWeight: 600 }} >Assistant Professor - Assistant Professor -Mechanical Engineering</Typography>
                        <br />
                        <Box component={Paper}>
                            <Grid container  spacing={2} style={{ width: "95%"}}>
                                <Grid item xs={2}  >
                                    <Typography variant="h6" >Department</Typography>
                                    <Typography  varient='text'>Mechanical Engineering</Typography>
                                </Grid>
                                <hr />
                                <Grid item xs={2}>
                                    <Typography variant="h6" >Type</Typography>
                                    <Typography  varient='text'>Full-Time</Typography>
                                </Grid>
                                <hr />
                                <Grid item xs={2}>
                                    <Typography variant="h6" >Education</Typography>
                                    <Typography  varient='text'>ME.M/tech</Typography>
                                </Grid>
                                <hr />
                                <Grid item xs={2}>
                                    <Typography variant="h6" >Major/Speciality</Typography>
                                    <Typography  varient='text'>Mechanical </Typography>
                                </Grid>
                                
                                <br />
                            </Grid>   
                            <hr />
                            <br />
                            <Grid container spacing={2} style={{ width: "95%"}}>
                                <Grid item xs={2}>
                                    <Typography variant="h6" >Work Experience</Typography>
                                    <Typography  varient='text'>5 to 8 Years</Typography>
                                </Grid>
                                <hr />
                                <Grid item xs={2}>
                                    <Typography variant="h6" >Salary offered(Monthly)</Typography>
                                    <Typography  varient='text'>INR 52000 to INR 72000</Typography>
                                </Grid>
                                <hr />
                                <Grid item xs={2}>
                                    <Typography variant="h6" >Country</Typography>
                                    <Typography  varient='text'>India </Typography>
                                </Grid>
                                <hr />
                                <Grid item xs={2}>
                                    <Typography variant="h6" >City</Typography>
                                    <Typography  varient='text'> Jalna</Typography>
                                </Grid>
                            </Grid>
                            <br />
                        </Box>
                    </Box>
                </div>
                    <div  className={classes.lstpara}>
                        <br />
                        <Typography variant="h6" align='center' >Salary offered(Monthly)</Typography>
                        <Toolbar/>
                        <Typography variant="text" paragraph style={{ width: "50%"}}   >Build and lead the marketing organization. Recruit and retain a world class team.
                            Own the marketing roadmap, including all planning, budgeting and execution.
                            Build a journey for merchants throughout the whole lifecycle, from the moment they hear about us, till the moment they become a loyal 
                            referring customer.
                            Own all aspects of the pre-sale customer journey across all marketing channels.
                            Build a brand that most Shopify stores know and trust. Tell the story of why conversations with your customers matter, 
                            and how you can leverage them to build a better customer experience
                            Clearly explain our audience what's the ROI of using Richpanel. Especially what the impact is on support metrics (first response time, 
                            resolution time, satisfaction)
                            Aggressively increase pipeline.
                            Introduce innovative marketing strategies that uniquely appeal to our target customers.
                        </Typography>
                        <Toolbar />
                        <div align='center'>
                            <Button component={Link} to="/CandidateApply" style={{ width: "15%"}}  variant="contained" align='center' size="large">Apply</Button>
                        </div>

                    </div>
                <Toolbar/>
                <Toolbar />
                </Box>
            </div>
        </>
    )
}

export default SingleJobView
