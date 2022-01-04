import React from 'react'
import { Typography, FormControl, InputLabel, BootstrapInput, TablePagination, Paper, TCheckbox, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse, Container } from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";
import { TextSCHead } from '../../views/text';
import { Job } from '../../views/text';
import { Jobsm } from '../../views/text';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { Bottomtext } from '../../views/text';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

// Lable
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';





// email icon
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
// import Divider from '@mui/material/Divider';

// icon
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// check box





const useStyles = makeStyles((theme) => ({

    // root: {
    //     position: 'absolute',
    //     width: '1268px',
    //     height: '0px',
    //     left: '69px',
    //     top: '190px',
    //     // marginTop: '100px',
    // },
    box: {
        position: "absolute",
        width: "1279px",
        height: " 1200px",
        // height: "106px",
        left: "100px",
        // left: " 958px",
        background: "#F9F9F9;",
        border: "1px solid #D5D5D5",
        " box- sizing": "border- box",
        "border - radius": "5px",
        // marginBottom: "10px"
    },
    text: {

        marginTop: "80px",
        marginLeft: "2%"
    },
    email: {
        width: "613px",
        marginTop: "5px",
        height: "200px"

    },
    interviiw: {
        marginTop: "80px",
        marginLeft: "5%"
    }



}));

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const steps = [
    'Fill Details',
    'Select Assessment',
    'Select Job Boards',
    'Publish',

];

function JobPreview() {
    const [currency, setCurrency] = React.useState('EUR');

    const history = useHistory();
    function handleClick() {
        history.push("/Jobcreat");
    }

    const clickhandleChange = (e) => {
        setCurrency(e.target.value);
    };


    const classes = useStyles();
    // toggle button
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    return (
        <>
            <Grid container spacing={2} style={{ marginBottom: "20px" }} >
                <Grid item xs={9} style={{ marginLeft: "90px" }} >
                    <Typography variant="h5">
                        <Button variant="text" ><ArrowBackIcon color="primary"
                            button
                            style={{ fontSize: '30px' }} onClick={handleClick}
                        /></Button>
                        Preview | Assistant Professor - Mechanical Engineering
                    </Typography>
                </Grid>


                <Grid item xs={1}  >
                    <Button style={{ width: "119px" }} component={Link} to='/' variant="contained" disableElevation>
                        Publish
                    </Button>
                </Grid>
            </Grid>

            <Box component={Paper} className={classes.box}>
                <Grid container spacing={2} style={{ marginTop: "20px" }} >

                    <Grid xs={7} style={{ marginLeft: "5%" }}>
                        {/* titel */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "30px", }}>
                            <Grid xs={6}>
                                <Job job={" Job title*"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={" Assistant Professor - Mechanical Engineering"} />
                                </div>
                            </Grid>
                            <Grid xs={6}>
                                <Job job={"Number of Vacancies*"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"3"} />
                                </div>
                            </Grid>
                        </Grid>
                        {/* job depaetment */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "30px", }}>
                            <Grid xs={6}>
                                <Job job={"Department*"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={" Mechanical"} />
                                </div>
                            </Grid>
                            <Grid xs={6}>
                                <Job job={"Job Owner*"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"Sameer"} />
                                </div>
                            </Grid>
                        </Grid>
                        {/* team member involve */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "30px", }}>
                            <Grid xs={6}>
                                <Job job={"Team Members Involved"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"Petsi, Avinash"} />
                                </div>
                            </Grid>
                            <Grid xs={6}>
                                <Job job={"Type*"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"Full-Time"} />
                                </div>
                            </Grid>
                        </Grid>
                        {/* Education */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "30px", }}>
                            <Grid xs={6}>
                                <Job job={"Job Nature*"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"In Campus"} />
                                </div>
                            </Grid>
                            <Grid xs={6}>
                                <Job job={"Education*"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"M. Tech."} />
                                </div>
                            </Grid>
                        </Grid>
                        {/* Work Ex. min. (Years)* */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "30px", }}>
                            <Grid xs={6}>
                                <Job job={"Major/ Speciality"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"Mechanical"} />
                                </div>
                            </Grid>
                            <Grid xs={3}>
                                <Job job={"Work Ex. min. (Years)*"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"5"} />
                                </div>
                            </Grid>
                            <Grid xs={3}>
                                <Job job={"Work Ex. max.(Years)"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"8"} />
                                </div>
                            </Grid>
                        </Grid>
                        {/* Salary Minimum*/}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "30px", }}>
                            <Grid xs={3}>
                                <Job job={"Salary Minimum"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"52,000"} />
                                </div>
                            </Grid>
                            <Grid xs={3}>
                                <Job job={"Salary Max"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"72,000"} />
                                </div>
                            </Grid>
                            <Grid xs={3}>
                                <Job job={"Currency"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"INR"} />
                                </div>
                            </Grid>
                            <Grid xs={3}>
                                <Job job={"Salary Type"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"Monthly"} />
                                </div>
                            </Grid>
                        </Grid>
                        {/* Country */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "30px", }}>
                            <Grid xs={6}>
                                <Job job={"Country"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={" India"} />
                                </div>
                            </Grid>
                            <Grid xs={6}>
                                <Job job={"City"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"Nagpur"} />
                                </div>
                            </Grid>
                        </Grid>
                        {/* Country */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "30px", }}>
                            <Grid xs={12}>
                                <Job job={"Job Description"} />
                                <div style={{ marginTop: "10px" }}>
                                    <ListItemText>Build and lead the marketing organization. Recruit and retain a world class team.
                                        Own the marketing roadmap, including all planning, budgeting and execution.
                                        Build a journey for merchants throughout the whole lifecycle, from the moment they
                                        hear about us, till the moment they become a loyal
                                        referring customer.
                                        Own all aspects of the pre-sale customer journey across all marketing
                                        channels.
                                        Build a brand that most Shopify stores know and trust. Tell the story of why conversations </ListItemText>
                                </div>
                            </Grid>
                        </Grid>



                    </Grid>
                    <hr />
                    <Grid xs={4} style={{ marginLeft: "2%" }}>
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "30px", }}>
                            <Grid xs={6}>
                                <Job job={"Assessment"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"General Questions"} />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "30px", }}>
                            <Grid xs={6}>
                                <Job job={"Hiring Pipeline*"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"Professor Interview Flow"} />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "30px", }}>
                            <Grid xs={6}>
                                <Job job={"Web form*"} />
                                <div style={{ marginTop: "10px" }}>
                                    <Jobsm text={"Professor candidate form"} />
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "30px", }}>
                            <Grid xs={8}>
                                <Job job={"Web form*"} />
                                <Grid container spacing={2} style={{ marginLeft: "9px", marginTop: "10px" }} >
                                    <Grid xs={5}>
                                        <Jobsm text={"Naukri"} />
                                    </Grid>
                                    <Grid xs={5}>
                                        <Jobsm text={"Indeed"} />
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>


                </Grid>
                {/* Email */}




            </Box>

        </>
    )
}

export default JobPreview





// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },



];

// seclet
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

