import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, FormControl, InputLabel, BootstrapInput, TablePagination, Paper, TCheckbox, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse, Container } from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import ListItemButton from '@mui/material/ListItemButton';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import Grid from '@mui/material/Grid';
import { TextHead3 } from '../../../views/text'
import { TextSCHead } from '../../../views/text';
import { TextClrHead } from '../../../views/text';
import { LgButton } from '../../../views/button';
import { Horizanderline } from '../../../views/text';
import { TextDarkHead } from '../../../views/text';
import { TextFrmkHead } from '../../../views/text';
import { TextPkHead } from '../../../views/text';
import { Note } from '../../../views/text';
import { Bottomtext } from '../../../views/text';
import ControlledAccordions from './Controlled accordion';
import { Modal } from '@material-ui/core';
import { HiringStatus } from '../../../views/button'


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


const useStyles = makeStyles((theme) => ({

    root: {
        position: 'absolute',
        width: '1268px',
        height: '0px',
        left: '69px',
        top: '190px',
        // marginTop: '100px',
    },
    box: {
        position: "absolute",
        width: "300px",
        height: "106px",
        left: " 958px",

        background: "#EBEBEB",
        border: "1px solid #D5D5D5",
        " box- sizing": "border- box",
        "border - radius": "5px",
        marginBottom: "10px"
    },



}));


function Cdsingleview() {
    const [currency, setCurrency] = useState('');
    //Modal
    // const [listIsOpen, setListIsOpen] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //  button modal
    const [btopen, setBtOpen] = useState(false);
    const handleBtOpen = () => setBtOpen(true);
    const handleBtClose = () => setBtOpen(false);

    const clickhandleChange = (e) => {
        setCurrency(e.target.value);
    };

    const classes = useStyles();

    return (

        // SelectOption('Countries', currency, countries, setCurrency)
        <>
            <Grid container spacing={2}   >
                <Grid item xs={4}  >
                    <div style={{ marginLeft: '10px' }}>
                        <Typography variant="h4">
                            <Button variant="text" ><ArrowBackIcon color="primary"
                                button
                                style={{ fontSize: '30px' }}
                            /></Button>
                            Abhineet Sabharwal
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={2}  >
                    <TextSCHead smtext={" M. Tech. (Structure)"} />
                </Grid>
                <Grid item xs={4}  >
                    <TextSCHead smtext={" +91-9930705653"} />
                </Grid>
                <Grid item xs={2}  >
                    <Button color="primary" onClick={handleOpen} component={Link} variant="text"
                        disableElevation>
                        <MoreHorizIcon style={{ fontSize: '50px' }} />
                    </Button>
                </Grid>
            </Grid>
            <Horizanderline />
            {/* three button */}
            <div className={classes.root} >
                <Grid container spacing={2} style={{ marginTop: "10px" }}   >
                    <Grid item xs={2}  >
                        < TextHead3 text3='Last Job Applied' />
                        <TextSCHead smtext={" HOD, Civil"} />
                    </Grid>
                    <Grid item xs={2}  >
                        <TextHead3 text3={'Hiring Status'} />
                        <TextClrHead smtext={"Shortlisted"} />

                    </Grid>
                    <Grid item xs={2}  >
                        <TextHead3 text3={'Assessment'} />
                        <TextClrHead smtext={"View"} />
                    </Grid>
                    <Grid item xs={2} component={Link} to='./Interview' >
                        <LgButton lagbutton={"Schedule Interview"} />
                    </Grid>
                    <Grid item xs={2} onClick={handleBtOpen} >

                        <LgButton lagbutton={"Assign to a job"} />

                    </Grid>

                    <Grid item xs={2}  >
                        <HiringStatus select Status={"Hiring Status"} />
                    </Grid>
                </Grid>
                <div >
                    <hr />
                    <Grid container spacing={2} style={{ marginTop: "10px" }}   >
                        <Grid item xs={9}  >
                            <TextDarkHead smtext={"Candidate Profile"} />
                        </Grid>
                        <Grid item xs={3}  >
                            < TextHead3 text3='Notes' />
                        </Grid>

                    </Grid>
                    <Grid container spacing={2} style={{ marginTop: "10px" }}   >
                        <Grid item xs={8} component={Paper}  >
                            <Grid container spacing={2} style={{ marginTop: "10px" }}   >
                                <Grid item xs={3}   >
                                    <TextFrmkHead frmtext={'Headline'} />
                                </Grid>
                                <Grid item xs={8}  >
                                    <TextPkHead ptext={"Lorem ipsum dolor sit amet consectetur adipiscing elit Ullamcorper ut vitae vitaecursus euismod volutpat."} />
                                </Grid>
                                <Grid item xs={3}   >
                                    <TextFrmkHead frmtext={'Summary'} />
                                </Grid>
                                <Grid item xs={8}  >
                                    <TextPkHead ptext={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ut vitae vitae,cursus euismod volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ullamcorper ut vitae vitae, cursus euismod volutpat."} />
                                </Grid>
                                <Grid item xs={3}   >
                                    <TextFrmkHead frmtext={'Total Experience '} />
                                </Grid>
                                <Grid item xs={8}  >
                                    <TextPkHead ptext={"12 Years"} />
                                </Grid>
                                <Grid item xs={3}   >
                                    <TextFrmkHead frmtext={'Skills'} />
                                </Grid>
                                <Grid item xs={8}  >
                                    <TextPkHead ptext={"Teaching, Team Management, Change Management, Operations,Construction Management, Project Management"} />
                                </Grid>
                            </Grid>
                            <br />
                            <TextDarkHead smtext={"Work Experience"} />
                            <br />
                            {/* controlled  work experince */}
                            <ControlledAccordions />
                            <br />
                            <TextDarkHead smtext={"Education"} />
                            <br />
                            {/* controlled  Education */}
                            <ControlledAccordions />
                            <br />
                            <br />
                        </Grid>
                        <Grid item xs={1}  >

                        </Grid>

                        {/*Notes  */}
                        <Grid item xs={3} component={Paper} >
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
                            <TextFrmkHead frmtext={'Notes'} />
                            <div className={classes.box}>
                                <Note note={"Lorem ipsum dolor sit amet consectetur adipiscing elit Ullamcorper ut vitae vitaecursus euismod volutpat."} />
                            </div>
                            <br />
                            <br />
                            <Grid container spacing={2} style={{ marginBottom: "40px", marginTop: "50px", paddingRight: "15px" }}  >
                                <Grid item xs={4}  >
                                    <Bottomtext last={" By: Sameer"} />

                                </Grid>
                                <Grid item xs={4}  >
                                    <Bottomtext last={"20 Aug 2021"} />

                                </Grid>
                                <Grid item xs={2}  >
                                    {/* <Button component={Link} variant="text" disableElevation> */}
                                    <Bottomtext last={" Edit"} />
                                    {/* </Button> */}
                                </Grid>
                                <Grid item xs={1}  >
                                    {/* <Button component={Link} variant="text" disableElevation> */}

                                    <Bottomtext button variant="text" disableElevation last={"Delete"} />
                                    {/* </Button> */}
                                </Grid>
                            </Grid>

                            {/*Interview  */}
                            <TextFrmkHead frmtext={'Interview'} />
                            <div className={classes.box}>
                                <Note note={"Lorem ipsum dolor sit amet consectetur adipiscing elit Ullamcorper ut vitae vitaecursus euismod volutpat."} />
                            </div>
                            <br />
                            <br />
                            <Grid container spacing={2} style={{ marginTop: "50px", paddingRight: "15px" }}  >
                                <Grid item xs={4}  >
                                    <Bottomtext last={" By: Sameer"} />

                                </Grid>
                                <Grid item xs={4}  >
                                    <Bottomtext last={"20 Aug 2021"} />

                                </Grid>
                                <Grid item xs={2}  >
                                    {/* <Button component={Link} variant="text" disableElevation> */}
                                    <Bottomtext last={" Edit"} />
                                    {/* </Button> */}
                                </Grid>
                                <Grid item xs={1}  >
                                    {/* <Button component={Link} variant="text" disableElevation> */}

                                    <Bottomtext button variant="text" disableElevation last={"Delete"} />
                                    {/* </Button> */}
                                </Grid>
                            </Grid>
                            <br />
                            <br />

                            {/* Email */}
                            <TextFrmkHead frmtext={'Email'} />
                            <div className={classes.box}>
                                <Note note={"Lorem ipsum dolor sit amet consectetur adipiscing elit Ullamcorper ut vitae vitaecursus euismod volutpat."} />
                            </div>
                            <br />
                            <br />
                            <Grid container spacing={2} style={{ marginTop: "50px", paddingRight: "15px" }}  >
                                <Grid item xs={4}  >
                                    <Bottomtext last={" By: Sameer"} />

                                </Grid>
                                <Grid item xs={4}  >
                                    <Bottomtext last={"20 Aug 2021"} />

                                </Grid>
                                <Grid item xs={2}  >
                                    {/* <Button component={Link} variant="text" disableElevation> */}
                                    <Bottomtext last={" Edit"} />
                                    {/* </Button> */}
                                </Grid>
                                <Grid item xs={1}  >
                                    {/* <Button component={Link} variant="text" disableElevation> */}

                                    <Bottomtext button variant="text" disableElevation last={"Delete"} />
                                    {/* </Button> */}
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <br />
                </div>
            </div>

            {/* modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <List
                    // sx={{ bgcolor: 'background.paper' }}
                    >
                        <ListItem disablePadding component={Link} to='./' button>
                            {/* <ListItem className={classes.nestedItem} > */}
                            <ListItemText >Edit Candidate</ListItemText>
                        </ListItem>
                        <ListItem disablePadding component={Link} to='./Email' button>
                            <ListItemText  >Send Email</ListItemText>
                        </ListItem>
                        <ListItem disablePadding component={Link} to='./' button>
                            <ListItemText >View Past Appliations</ListItemText>
                        </ListItem>
                        <ListItem disablePadding component={Link} to='./' button>
                            <ListItemText  >Delete Candidate</ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Modal>

            {/* button modal */}
            <Modal
                open={btopen}
                onClose={handleBtClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modal} >
                    <div >
                        {/* <TextHead3 text3={'Hiring Status'} /> */}
                        <Typography variant="h4" style={{ textAlign: "center", }}>
                            Assign a candidate to a job
                        </Typography>
                    </div>
                    <Grid container spacing={2} style={{ marginTop: "40px", paddingRight: "15px" }}  >
                        <Grid item xs={3}  >
                            <TextFrmkHead frmtext={'Search for Job'} />
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
            </Modal>

        </>
    )
}

export default Cdsingleview


const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
        code: 'AE',
        label: 'United Arab Emirates',
        phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
        code: 'AG',
        label: 'Antigua and Barbuda',
        phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
        code: 'AU',
        label: 'Australia',
        phone: '61',
        suggested: true,
    },
    { code: 'AW', label: 'Aruba', phone: '297' },
    { code: 'AX', label: 'Alland Islands', phone: '358' },
    { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    {
        code: 'BA',
        label: 'Bosnia and Herzegovina',
        phone: '387',
    },
]




