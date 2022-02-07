import React, { useState, useEffect } from "react";
import {
    Stepper,
    Step,
    StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, TCheckbox, AppBar, Toolbar, Button, Container } from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import { TextSCHead } from '../../views/text';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
// select
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
import CardMedia from '@mui/material/CardMedia';
import linkedin from '../Media/images/linkedinnn.png'
import Naukri from '../Media/images/naukricom.jpg'
import indeed from '../Media/images/indeedlogo.png'
// switch
import Card from "@mui/material/Card";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Autocomplete from '@mui/material/Autocomplete';
import { LgButton } from "../../views/button";



const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 46,
    height: 30,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 26,
        height: 26,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));


const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
    },
}));

function getSteps() {
    return [
        "Fill Details",
        "Select Assessment",
        "Select Job Boards",
        "Publish",
    ];
}

function GetStepContent(step) {

    const [currency, setCurrency] = React.useState('EUR');



    const clickhandleChange = (e) => {
        setCurrency(e.target.value);
    };

    const classes = useStyles();
    // toggle button
    const [formats, setFormats] = useState(() => ['bold', 'italic']);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };


    // data
    const [datas, setDatas] = useState('');

    // api try
    const [job, setJob] = useState("")
    const [vacancies, setVacancies] = useState("")
    const [department, setDepartment] = useState("")
    const [owner, setOwner] = useState("")
    const [members, setMembers] = useState("")
    const [type, setType] = useState("")
    const [nature, setNature] = useState("")
    const [education, setEducation] = useState("")
    const [major, setMajor] = useState("")
    const [min, setMin] = useState("")
    const [max, setMax] = useState("")
    const [salary, setSalary] = useState("")
    // select
    const [age, setage] = useState("")

    // save
    // function saveUser() {
    //     console.warn(job, vacancies, department, owner, members, type, nature, education, major, min, max, salary)
    // }
    const onClickUserSubmit = (e) => {
        e.preventDefault();
        let user = {
            job,
            vacancies,
            department,
            owner,
            members,
            type,
            nature,
            education,
            major,
            min,
            max,
            salary
            // password
        }
        setDatas([...datas, user])
        setJob('');
        setVacancies('');
        setDepartment('');
        setOwner('');
        setMembers('');
        setType('');
        setNature('');
        setEducation('');
        setMajor('');
        setMin('');
        setMax('');
        setSalary('');

        // setPassword('');
        console.warn('user', user)

    };


    useEffect(() => {
        localStorage.setItem('datas', JSON.stringify(datas));
    }, [datas])



    switch (step) {
        case 0:
            return (
                <>
                    <div>


                        <Box component={Paper} className={classes.box}>
                            <Container style={{ marginLeft: "20%", }}>
                                <div style={{ marginTop: "8%", }}>
                                    <form >
                                        <Grid container spacing={2} >
                                            <Grid xs={5}>
                                                <TextSCHead smtext={" Job title*"} />
                                                <Box
                                                    sx={{
                                                        width: 400,
                                                        maxWidth: '100%',

                                                    }}
                                                    autoComplete="off"

                                                >
                                                    <TextField value={job} onChange={(e) => setJob(e.target.value)} size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                                </Box>
                                            </Grid>
                                            <Grid xs={5}>
                                                <TextSCHead smtext={"Number of Vacancies*"} />
                                                <Box
                                                    sx={{
                                                        width: 400,
                                                        maxWidth: '100%',
                                                    }}
                                                    autoComplete="off"

                                                >
                                                    <TextField value={vacancies} onChange={(e) => setVacancies(e.target.value)} size="small" fullWidth label="Type interview name..." id="fullWidth" />
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
                                                    <TextField value={department} onChange={(e) => setDepartment(e.target.value)} size="small" fullWidth label="Type interview name..." id="fullWidth" />
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

                                                    <TextField value={owner} onChange={(e) => setOwner(e.target.value)} size="small" fullWidth label="Type interview name..." id="fullWidth" />
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
                                                    <TextField value={members} onChange={(e) => setMembers(e.target.value)} size="small" fullWidth label="Type interview name..." id="fullWidth" />
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
                                                    <FormControl fullWidth>
                                                        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                                        <Select
                                                            id="fullWidth"
                                                            label="Age"
                                                        // value={age}
                                                        // onChange={handleChange}
                                                        >
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    {/* <TextField value={type} onChange={(e) => setType(e.target.value)} size="small" fullWidth label="Type interview name..." id="fullWidth" /> */}
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
                                                    <TextField value={nature} onChange={(e) => setNature(e.target.value)} size="small" fullWidth label="Type interview name..." id="fullWidth" />
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
                                                    <TextField value={education} onChange={(e) => setEducation(e.target.value)} size="small" fullWidth label="Type interview name..." id="fullWidth" />
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
                                                    <TextField value={major} onChange={(e) => setMajor(e.target.value)} size="small" fullWidth label="Type interview name..." id="fullWidth" />
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
                                                    <TextField value={min} onChange={(e) => setMin(e.target.value)} size="small" fullWidth label="Type interview name..." id="fullWidth" />
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
                                                    <TextField value={max} onChange={(e) => setMax(e.target.value)} size="small" fullWidth label="Type interview name..." id="fullWidth" />
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
                                                    <TextField value={salary} onChange={(e) => setSalary(e.target.value)} size="small" fullWidth label="Type interview name..." id="fullWidth" />
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
                                            <Box component={Paper} className={classes.email} style={{ width: "50%" }}>
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
                                                <br />
                                                <TextField className={classes.email} style={{ height: "100px", width: "100%" }} />
                                            </Box>
                                        </div>
                                        <div style={{ marginTop: "20px", marginLeft: "250px" }}>
                                            <Button style={{ width: "119px", marginBottom: "30px" }} onClick={onClickUserSubmit} variant="contained" color="primary" disableElevation>
                                                Publish
                                            </Button>
                                        </div>
                                    </form>

                                </div>

                            </Container>

                        </Box>

                    </div>
                </>
            );

        case 1:
            return (
                <>
                    <div>
                        <div align="center"  >
                            <Toolbar />
                            <Toolbar />
                            <Box
                                component={Paper}
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '45ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <Typography varient='text'>Select Assessment</Typography>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    renderInput={(params) => <TextField {...params} label="Select The Data Type" />}
                                />

                            </Box>
                            <Toolbar />
                            <Toolbar />
                            <Toolbar />




                        </div>
                    </div>
                </>
            );
        case 2:
            return (
                <>
                    <div>
                        <div align='center'>
                            <Box component={Paper} sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={2}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Card align="center" sx={{ maxWidth: 300 }}>
                                            <br />
                                            <CardMedia
                                                component="img"
                                                height="54"
                                                image={linkedin}
                                                alt="Paella dish"
                                            />
                                            {/* linked in  */}
                                            <div style={{ paddingLeft: 150 }}>
                                                <Toolbar />
                                                <FormGroup align='center'>
                                                    <FormControlLabel
                                                        component={Button}
                                                        control={<IOSSwitch sx={{ m: 1 }} />}
                                                        label=""
                                                    />
                                                </FormGroup>
                                                <Toolbar />
                                            </div>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Card align="center" sx={{ maxWidth: 300 }}>
                                            <br />
                                            <CardMedia
                                                component="img"
                                                height="54"
                                                image={Naukri}
                                                alt="Paella dish"
                                            />
                                            {/* naukri  */}
                                            <div style={{ paddingLeft: 150 }}>
                                                <Toolbar />
                                                <FormGroup align='center'>
                                                    <FormControlLabel
                                                        component={Button}
                                                        control={<IOSSwitch sx={{ m: 1 }} />}
                                                        label=""
                                                    />
                                                </FormGroup>
                                                <Toolbar />
                                            </div>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Card align="center" sx={{ maxWidth: 300 }}>
                                            <br />
                                            <CardMedia
                                                component="img"
                                                height="54"
                                                image={indeed}
                                                alt="Paella dish"
                                            />
                                            {/* indeed */}
                                            <div style={{ paddingLeft: 150 }}>
                                                <Toolbar />
                                                <FormGroup align='center'>
                                                    <FormControlLabel
                                                        component={Button}
                                                        control={<IOSSwitch sx={{ m: 1 }} />}
                                                        label=""
                                                    />
                                                </FormGroup>
                                                <Toolbar />
                                            </div>
                                        </Card>
                                    </Grid>
                                    <Grid xs={1}>
                                    </Grid>
                                </Grid>
                                <Toolbar />
                            </Box>
                        </div>
                    </div>
                </>
            );
        case 3:
            return (
                <>
                    <div align='center'>
                        <Typography variant="h1" style={{ fontWeight: 600 }}>It is empty</Typography>
                        <Toolbar />


                    </div>
                </>
            );
        default:
            return "unknown step";
    }
}

const Jobcreat = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleSkip = () => {
        if (!isStepSkipped(activeStep)) {
            setSkippedSteps([...skippedSteps, activeStep]);
        }
        setActiveStep(activeStep + 1);
    };
    const history = useHistory();
    function handleClick() {
        history.push("/Job");
    }

    return (
        <div>
            <div>
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

                    <Grid item xs={1}  >
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
            </div>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};

                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <Typography variant="h3" align="center">
                    Thank You
                </Typography>
            ) : (
                <>
                    <form>{GetStepContent(activeStep)}</form>
                    <br />
                    <div style={{ marginLeft: "30%" }}>
                        <Button
                            className={classes.button}
                            disabled={activeStep === 0}
                            onClick={handleBack}
                        >
                            back
                        </Button>
                        {isStepOptional(activeStep) && (
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                onClick={handleSkip}
                            >
                                skip
                            </Button>
                        )}
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                        >
                            {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                        <Toolbar />
                    </div>
                </>
            )}
        </div>
    );
};

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
];
export default Jobcreat;







// new function
