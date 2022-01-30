import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import { Typography, Button, } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';








// button
import { LgButton } from '../../views/button';
import { HiringStatus } from '../../views/button'
import { Job } from '../../views/button';
// number
import { Number } from '../../views/button';
// text
import { TextSCHead } from '../../views/text';
import { Note } from '../../views/text';
import { Bottomtext } from '../../views/text';





// icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';



const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        width: '1268px',
        height: '0px',
        left: '69px',
        // marginTop: '100px',
    },
    box: {
        position: "absolute",
        width: "380px",
        height: "106px",
        left: " 887px",

        background: "#EBEBEB",
        border: "1px solid #D5D5D5",
        " box- sizing": "border- box",
        "border - radius": "5px",
        marginBottom: "10px"
    },
}));



// dot modal style
const style = {
    position: 'absolute',
    top: '32%',
    left: '79%',
    transform: 'translate(-50%, -50%)',
    width: 150,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};
// btn modal style
const modal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 872,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 5,
}

function JobView() {
    const classes = useStyles();

    //  button modal
    // const [btopen, setBtOpen] = useState(false);
    // const handleBtOpen = () => setBtOpen(true);
    // const handleBtClose = () => setBtOpen(false);


    const history = useHistory();
    function handleClick() {
        history.push("/Job");
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
                        <HiringStatus select Status={" In progress"} />
                    </Grid>
                    <Grid item xs={2} component={Link} to='./Joblistdraw' >
                        <LgButton lagbutton={"View all candidates"} />
                    </Grid>
                    <Grid item xs={2}   >
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
                    </Grid>
                    <Grid item xs={2} component={Link} to='./' >
                        <Job job={"In Review"} />
                    </Grid>
                </Grid>
                {/* number */}
                <Grid container spacing={2} style={{
                    marginTop: "60px", marginLeft: "13px", marginBottom: "50px",
                }} >
                    <Grid item xs={2} component={Link} to='./' >
                        <Number number={"37"} />
                    </Grid>
                    <Grid item xs={2} component={Link} to='./' >
                        <Number number={"12"} />

                    </Grid>

                    <Grid item xs={2} component={Link} to='./' >
                        <Number number={"5"} />

                    </Grid>
                    <Grid item xs={2} component={Link} to='./' >
                        <Number number={"3"} />

                    </Grid>
                    <Grid item xs={2} component={Link} to='./' >
                        <Number number={"2"} />
                    </Grid>
                    <Grid item xs={2} component={Link} to='./' >
                        <Number number={"1"} />
                    </Grid>
                </Grid>
                <br />
                <hr style={{ marginLeft: "13px" }} />
                {/* Job title */}
                <Grid container spacing={2} style={{
                    marginLeft: "13px", marginBottom: "50px",
                }} >
                    <Grid item xs={7} style={{ marginTop: "20px" }}  >
                        <Grid container spacing={2} style={{
                            // marginTop: "60px", marginLeft: "13px", marginBottom: "50px",
                        }} >
                            <Grid item xs={10}  >
                                <Typography variant="h6">Published on: 14/09/2021</Typography>
                            </Grid>
                            <Grid item xs={2}  >
                                <Button variant="contained" button size="medium" color="primary" component={Link} to='./'>Edit Job</Button>
                            </Grid>
                        </Grid>

                        {/* input1 */}
                        <Grid container spacing={2} style={{
                            marginTop: "20px",
                        }} >
                            <Grid item xs={6}  >
                                <TextSCHead smtext={"Job title "} />
                                <Box
                                    sx={{
                                        width: 340,
                                        maxWidth: '100%',
                                        marginTop: "8px"

                                    }}
                                >
                                    <TextField size="small" fullWidth label="Job title..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid item xs={6}  >
                                <TextSCHead smtext={"Number of Vacancies"} />
                                <Box
                                    sx={{
                                        width: 340,
                                        maxWidth: '100%',
                                        marginTop: "8px"
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Number of Vacancies..." id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        {/* input2 */}
                        <Grid container spacing={2} style={{
                            marginTop: "20px",
                        }} >
                            <Grid item xs={6}  >
                                <TextSCHead smtext={"Department "} />
                                <Box
                                    sx={{
                                        width: 340,
                                        maxWidth: '100%',
                                        marginTop: "8px"

                                    }}
                                >
                                    <TextField size="small" fullWidth label="Department..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid item xs={6}  >
                                <TextSCHead smtext={"Job Owner"} />
                                <Box
                                    sx={{
                                        width: 340,
                                        maxWidth: '100%',
                                        marginTop: "8px"
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Job Owner..." id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        {/* input3 */}
                        <Grid container spacing={2} style={{
                            marginTop: "20px",
                        }} >
                            <Grid item xs={6}  >
                                <TextSCHead smtext={"Team Members Involved "} />
                                <Box
                                    sx={{
                                        width: 340,
                                        maxWidth: '100%',
                                        marginTop: "8px"

                                    }}
                                >
                                    <TextField size="small" fullWidth label="Team Members Involved..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid item xs={6}  >
                                <TextSCHead smtext={"Type"} />
                                <Box
                                    sx={{
                                        width: 340,
                                        maxWidth: '100%',
                                        marginTop: "8px"
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type..." id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        {/* input4 */}
                        <Grid container spacing={2} style={{
                            marginTop: "20px",
                        }} >
                            <Grid item xs={6}  >
                                <TextSCHead smtext={"Job Nature"} />
                                <Box
                                    sx={{
                                        width: 340,
                                        maxWidth: '100%',
                                        marginTop: "8px"

                                    }}
                                >
                                    <TextField size="small" fullWidth label="Team Members Involved..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid item xs={6}  >
                                <TextSCHead smtext={"Type"} />
                                <Box
                                    sx={{
                                        width: 340,
                                        maxWidth: '100%',
                                        marginTop: "8px"
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type..." id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        {/* input 5 */}
                        <Grid container spacing={2} style={{
                            marginTop: "20px",
                        }} >
                            <Grid item xs={3}  >
                                <TextSCHead smtext={"Work Experience (Years)"} />
                                <Box
                                    sx={{
                                        width: 190,
                                        maxWidth: '100%',
                                        marginTop: "8px"

                                    }}
                                >
                                    <TextField size="small" fullWidth label="From..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid item xs={3}  >
                                {/* <TextSCHead smtext={"To:"} /> */}
                                <Box
                                    sx={{
                                        width: 190,
                                        maxWidth: '100%',
                                        marginTop: "31px"

                                    }}
                                >
                                    <TextField size="small" fullWidth label="To.." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid item xs={6}  >
                                <TextSCHead smtext={"Minimum Education"} />
                                <Box
                                    sx={{
                                        width: 340,
                                        maxWidth: '100%',
                                        marginTop: "8px"
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Minimum Education..." id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        {/* input 6 */}
                        <Grid container spacing={2} style={{
                            marginTop: "20px", marginBottom: "100px"

                        }} >
                            <Grid item xs={3}  >
                                <TextSCHead smtext={"Salary"} />
                                <Box
                                    sx={{
                                        width: 190,
                                        maxWidth: '100%',
                                        marginTop: "8px"

                                    }}
                                >
                                    <TextField size="small" fullWidth label="From..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid item xs={3}  >
                                {/* <TextSCHead smtext={"To:"} /> */}
                                <Box
                                    sx={{
                                        width: 190,
                                        maxWidth: '100%',
                                        marginTop: "31px"

                                    }}
                                >
                                    <TextField size="small" fullWidth label="To.." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid item xs={6}  >
                                <TextSCHead smtext={"Salary Unit"} />
                                <Box
                                    sx={{
                                        width: 340,
                                        maxWidth: '100%',
                                        marginTop: "8px"
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Salary Unit..." id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>


                    </Grid>

                    <hr />

                    <Grid item xs={4} style={{ marginTop: "20px" }}>
                        <Typography variant="h6" style={{ textAlign: "center", marginBottom: "20px" }}>Note</Typography>
                        {/* add */}
                        <Grid container spacing={2} style={{ marginBottom: "7px" }}  >
                            <Grid item xs={9}  >
                                <Box
                                    sx={{
                                        width: 500,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="Type something..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid item xs={2}  >
                                <Button component={Link} variant="text" disableElevation>

                                    <AddBoxSharpIcon style={{
                                        width: "50px",
                                        height: "40px",
                                        color: "#109CF1",

                                    }} />
                                </Button>
                            </Grid>
                        </Grid>
                        <br />

                        {/* Notes */}
                        <div className={classes.box}>
                            <Note note={"Lorem ipsum dolor sit amet consectetur adipiscing elit Ullamcorper ut vitae vitaecursus euismod volutpat."} />
                        </div>
                        <br />
                        <br />
                        <Grid container spacing={2} style={{ marginBottom: "60px", marginTop: "50px", paddingRight: "15px" }}  >
                            <Grid item xs={4}  >
                                <Bottomtext last={" By: Sameer"} />
                            </Grid>
                            <Grid item xs={4}  >
                                <Bottomtext last={"20 Aug 2021"} />

                            </Grid>
                            <Grid item xs={2}  >
                                <Bottomtext last={" Edit"} />
                            </Grid>
                            <Grid item xs={1}  >
                                <Bottomtext button variant="text" disableElevation last={"Delete"} />
                            </Grid>
                        </Grid>

                        {/*Interview  */}
                        <div className={classes.box}>
                            <Note note={"Lorem ipsum dolor sit amet consectetur adipiscing elit Ullamcorper ut vitae vitaecursus euismod volutpat."} />
                        </div>
                        <br />
                        <br />
                        <Grid container spacing={2} style={{ marginTop: "60px", paddingRight: "15px" }}  >
                            <Grid item xs={4}  >
                                <Bottomtext last={" By: Sameer"} />
                            </Grid>
                            <Grid item xs={4}  >
                                <Bottomtext last={"20 Aug 2021"} />
                            </Grid>
                            <Grid item xs={2}  >
                                <Bottomtext last={" Edit"} />
                            </Grid>
                            <Grid item xs={1}  >
                                <Bottomtext button variant="text" disableElevation last={"Delete"} />
                            </Grid>
                        </Grid>
                        <br />
                        <br />

                        {/* Email */}
                        <div className={classes.box}>
                            <Note note={"Lorem ipsum dolor sit amet consectetur adipiscing elit Ullamcorper ut vitae vitaecursus euismod volutpat."} />
                        </div>
                        <br />
                        <br />
                        <Grid container spacing={2} style={{ marginTop: "60px", paddingRight: "15px" }}  >
                            <Grid item xs={4}  >
                                <Bottomtext last={" By: Sameer"} />
                            </Grid>
                            <Grid item xs={4}  >
                                <Bottomtext last={"20 Aug 2021"} />

                            </Grid>
                            <Grid item xs={2}  >
                                <Bottomtext last={" Edit"} />
                            </Grid>
                            <Grid item xs={1}  >
                                <Bottomtext button variant="text" disableElevation last={"Delete"} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </div>




            {/* button modal */}
            {/* <Modal
                open={btopen}
                onClose={handleBtClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modal} >
                    <div >
                        <Typography variant="h4" style={{ textAlign: "center", }}>
                            Assign a candidate to this job
                        </Typography>
                    </div>
                    <Grid container spacing={2} style={{ marginTop: "40px", paddingRight: "15px" }}  >
                        <Grid item xs={3}  >
                            <TextFrmkHead frmtext={'Search for Candidate'} />
                        </Grid>
                        <Grid item xs={8}  >
                            <Box>
                                <TextField size='small' fullWidth label="Type job title ..." id="fullWidth" />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} style={{ marginTop: "20px", paddingRight: "15px" }}  >
                        <Grid item xs={3}  >
                            <TextFrmkHead frmtext={'Hiring Stage'} />
                        </Grid>
                        <Grid item xs={8}  >
                            <Box>
                                <TextField size='small' fullWidth label="Choose the hiring stage" id="fullWidth" />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} style={{ marginTop: "20px", paddingRight: "15px" }}  >
                        <Grid item xs={3}  >
                            <TextFrmkHead frmtext={'Notes'} />
                        </Grid>
                        <Grid item xs={8}  >
                            <Box>
                                <TextField size='small' fullWidth id="fullWidth" />
                            </Box>
                        </Grid>
                    </Grid>
                    <div style={{ marginLeft: "43%", marginTop: "50px", width: "259px" }}>
                        <Button style={{ width: "259px" }} variant="contained" color="primary">Add</Button>
                    </div>


                </Box>
            </Modal> */}



        </>
    )
}

export default JobView
