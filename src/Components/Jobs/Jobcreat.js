import React from 'react'
import { Typography, Paper, Button, Container } from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";
import { TextSCHead } from '../../views/text';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
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
import Checkbox from '@mui/material/Checkbox';





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

function Jobcreat() {
    const [currency, setCurrency] = React.useState('EUR');

    const history = useHistory();
    function handleClick() {
        history.push("/Job");
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
                <Grid item xs={7} style={{ marginLeft: "90px" }} >
                    <Typography variant="h5">
                        <Button variant="text" ><ArrowBackIcon color="primary"
                            button
                            style={{ fontSize: '30px' }} onClick={handleClick}
                        /></Button>
                        Create a Job
                    </Typography>
                </Grid>

                <Grid item xs={1} style={{ marginLeft: "10px" }} >
                    <Button style={{ width: "119px", }} color="primary" component={Link} to='/' variant="contained" disableElevation>
                        Save
                    </Button>
                </Grid>
                <Grid item xs={1}  >
                    <Button style={{ width: "119px" }} component={Link} to='/JobPreview' variant="contained" disableElevation>
                        Preview
                    </Button>
                </Grid>
                <Grid item xs={1}  >
                    <Button style={{ width: "119px" }} component={Link} to='/' variant="contained" disableElevation>
                        Publish
                    </Button>
                </Grid>
            </Grid>

            <Box component={Paper} className={classes.box}>

                <Box sx={{ width: '100%', marginTop: "30px" }}>
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>

                <Container style={{ marginLeft: "10%", }}>
                    <div style={{ marginTop: "8%", }}>
                        <Grid container spacing={2} >
                            <Grid xs={5}>
                                <TextSCHead smtext={" Job title*"} />
                                <Box
                                    sx={{
                                        width: 400,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid xs={5}>
                                <TextSCHead smtext={"Number of Vacancies*"} />
                                <Box
                                    sx={{
                                        width: 400,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        {/*  */}
                        <Grid container spacing={2} style={{ marginTop: "30px" }}>
                            <Grid xs={5}>
                                <TextSCHead smtext={"Department* "} />
                                <Box
                                    sx={{
                                        width: 400,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid xs={5}>
                                <TextSCHead smtext={" Job Owner* "} />
                                <Box
                                    sx={{
                                        width: 400,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        {/*  */}
                        <Grid container spacing={2} style={{ marginTop: "30px" }}>
                            <Grid xs={5}>
                                <TextSCHead smtext={"Team Members Involved"} />
                                <Box
                                    sx={{
                                        width: 400,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid xs={5}>
                                <TextSCHead smtext={"Type*"} />
                                <Box
                                    sx={{
                                        width: 400,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        {/*  */}
                        <Grid container spacing={2} style={{ marginTop: "30px" }}>
                            <Grid xs={5}>
                                <TextSCHead smtext={"Job Nature*"} />
                                <Box
                                    sx={{
                                        width: 400,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid xs={5}>
                                <TextSCHead smtext={"Education* "} />
                                <Box
                                    sx={{
                                        width: 400,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        {/*  */}
                        <Grid container spacing={2} style={{ marginTop: "30px" }}>
                            <Grid xs={5}>
                                <TextSCHead smtext={"Major/ Speciality"} />
                                <Box
                                    sx={{
                                        width: 400,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid xs={2}>
                                <TextSCHead smtext={"Work Ex. min. (Years)* "} />
                                <Box
                                    sx={{
                                        width: 190,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid xs={2}>
                                <TextSCHead smtext={"Work Ex. max.(Years) "} />
                                <Box
                                    sx={{
                                        width: 190,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        {/*  */}
                        <Grid container spacing={2} style={{ marginTop: "30px" }}>
                            <Grid xs={2}>
                                <TextSCHead smtext={"Salary Minimum"} />
                                <Box
                                    sx={{
                                        width: 190,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid xs={3}>
                                <TextSCHead smtext={"Salary Max "} />
                                <Box
                                    sx={{
                                        width: 190,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid xs={2}>
                                <TextSCHead smtext={"Currency "} />
                                <Box
                                    sx={{
                                        width: 190,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid xs={2}>
                                <TextSCHead smtext={"Salary Type"} />
                                <Box
                                    sx={{
                                        width: 190,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        {/*  */}
                        <Grid container spacing={2} style={{ marginTop: "30px" }}>
                            <Grid xs={5}>
                                <TextSCHead smtext={"Country"} />
                                <Box
                                    sx={{
                                        width: 400,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                            <Grid xs={5}>
                                <TextSCHead smtext={"City"} />
                                <Box
                                    sx={{
                                        width: 400,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        {/* Email */}
                        <div style={{ marginTop: "20px", }}>
                            <TextSCHead smtext={"Job Description"} />
                            <Box component={Paper} className={classes.email}>
                                <ToggleButtonGroup
                                    value={formats}
                                    onChange={handleFormat}
                                    aria-label="text formatting"
                                >
                                    <ToggleButton value="bold" aria-label="bold">
                                        <FormatBoldIcon />
                                    </ToggleButton>
                                    <ToggleButton value="italic" aria-label="italic">
                                        <FormatItalicIcon />
                                    </ToggleButton>
                                    <ToggleButton value="underlined" aria-label="underlined">
                                        <FormatUnderlinedIcon />
                                    </ToggleButton>
                                    <ToggleButton value="color" aria-label="color" disabled>
                                        <FormatColorFillIcon />
                                        <ArrowDropDownIcon />
                                        {/* <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} /> */}
                                    </ToggleButton>
                                    <ToggleButton >
                                        Android<ArrowDropDownIcon />
                                    </ToggleButton>
                                    <ToggleButton  >
                                        10<ArrowDropDownIcon />
                                    </ToggleButton>
                                    <ToggleButton value="left" key="left">
                                        <FormatAlignLeftIcon />
                                    </ToggleButton>,
                                    <ToggleButton value="center" key="center">
                                        <FormatAlignCenterIcon />
                                    </ToggleButton>,
                                    <ToggleButton value="right" key="right">
                                        <FormatAlignRightIcon />
                                    </ToggleButton>,
                                    <ToggleButton value="justify" key="justify">
                                        <FormatAlignJustifyIcon />
                                    </ToggleButton>
                                    <ToggleButton value="android">
                                        A
                                    </ToggleButton>
                                </ToggleButtonGroup>
                                <TextField className={classes.email} style={{ height: "100px" }} />
                            </Box>
                        </div>


                    </div>
                </Container>

            </Box>

        </>
    )
}

export default Jobcreat





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

