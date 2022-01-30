import React, { useState } from "react";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  Toolbar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { MenuItem } from "@material-ui/core";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';


const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  stepper: {
    marginLeft: 200,
    padding: 50
  },
  paddingBox: {
    padding: 50
  },

}));

function getSteps() {
  return [
    "Fill Details",
    "Complete assessment ",
    "Preview/Submit",

  ];
}

function GetStepContent(step) {
  // const [sort, setsort] = React.useState('')
  const [minexp, setminexp] = React.useState('')
  const [isJobNature, setisJobNature] = useState('')
  const [IsSpecility, setIsSpecility] = useState('')
  const [MaxExp, setMaxExp] = useState('')
  const [isCurrency, setisCurrency] = useState('')
  const [SalaryT, setSalaryT] = useState('')

  // const sortby = (event) => {
  //   setsort(event.target.value);
  // };
  const minExperience = (event) => {
    setminexp(event.target.value);
  };
  const JobNature = (event) => {
    setisJobNature(event.target.value);
  };
  const Specility = (event) => {
    setIsSpecility(event.target.value);
  };
  const MaxExperience = (event) => {
    setMaxExp(event.target.value);
  };
  const Currency = (event) => {
    setisCurrency(event.target.value);
  };
  const SalaryType = (event) => {
    setSalaryT(event.target.value);
  };

  switch (step) {
    case 0:
      return (
        <>
          <div style={{ padding: 50 }} >
            <Box style={{ paddingLeft: "200px" }}>
              <Grid container spacing={2} >
                <Grid item xs={6} >
                  <Typography variant="text" > Job title*</Typography>
                  <br />
                  <TextField style={{ width: "60%" }} id="outlined-basic" svariant="outlined" size="small" />
                  <br />
                  <br />
                  <Typography variant="text" > Department*</Typography>
                  <br />
                  <TextField style={{ width: "60%" }} id="outlined-basic" svariant="outlined" size="small" />
                  <br />
                  <br />
                  <Typography variant="text" > Team Members Involved</Typography>
                  <br />
                  <TextField style={{ width: "60%" }} id="outlined-basic" svariant="outlined" size="small" />
                  <br />
                  <br />
                  <Typography variant="text" > Job Nature*</Typography>
                  <br />
                  <FormControl sx={{ m: 1, minWidth: 290 }}>
                    <Select
                      value={isJobNature}
                      onChange={JobNature}
                      size="small"
                      displayEmpty
                    >
                      <MenuItem value="">
                        <em>In Campus</em>
                      </MenuItem>
                      <MenuItem value={10}>4</MenuItem>
                      <MenuItem value={20}>5</MenuItem>
                      <MenuItem value={30}>6</MenuItem>
                    </Select>
                  </FormControl >
                  <br />
                  <br />
                  <Typography variant="text" > Major/ Speciality</Typography>
                  <br />
                  <FormControl sx={{ m: 1, minWidth: 290 }}>
                    <Select
                      value={IsSpecility}
                      onChange={Specility}
                      size="small"
                      displayEmpty
                    >
                      <MenuItem value="">
                        <em>Mechnical</em>
                      </MenuItem>
                      <MenuItem value={10}>4</MenuItem>
                      <MenuItem value={20}>5</MenuItem>
                      <MenuItem value={30}>6</MenuItem>
                    </Select>
                  </FormControl >
                </Grid>
                <Grid item xs={6} align='Left'>
                  <Typography variant="text" > Number of Vacancies*</Typography>
                  <br />
                  <TextField style={{ width: "60%" }} id="outlined-basic" svariant="outlined" size="small" />
                  <br />
                  <br />
                  <Typography variant="text" > Job Owner*</Typography>
                  <br />
                  <TextField style={{ width: "60%" }} id="outlined-basic" svariant="outlined" size="small" />
                  <br />
                  <br />
                  <Typography variant="text" > Type*</Typography>
                  <br />
                  <TextField style={{ width: "60%" }} id="outlined-basic" svariant="outlined" size="small" />
                  <br />
                  <br />
                  <Typography variant="text" > Education*</Typography>
                  <br />
                  <TextField style={{ width: "60%" }} id="outlined-basic" svariant="outlined" size="small" />
                  <br />
                  <br />
                  <br />
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Typography variant="text" > Work Ex. min. (Years)*</Typography>
                      <br />
                      <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <Select
                          value={minexp}
                          onChange={minExperience}
                          size="small"
                          displayEmpty
                        >
                          <MenuItem value="">
                            <em>From</em>
                          </MenuItem>
                          <MenuItem value={10}>1</MenuItem>
                          <MenuItem value={20}>2</MenuItem>
                          <MenuItem value={30}>3</MenuItem>
                        </Select>
                      </FormControl >
                      <br />
                      <br />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="text" > Work Ex. max.(Years)</Typography>
                      <br />
                      <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <Select
                          value={MaxExp}
                          onChange={MaxExperience}
                          size="small"
                          displayEmpty
                        >
                          <MenuItem value="">
                            <em>To</em>
                          </MenuItem>
                          <MenuItem value={10}>4</MenuItem>
                          <MenuItem value={20}>5</MenuItem>
                          <MenuItem value={30}>6</MenuItem>
                        </Select>
                      </FormControl >
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={2} >
                  <br />
                  <Typography variant="text" > Salary Minimum</Typography>
                  <br />
                  <TextField style={{ width: "60%" }} id="outlined-basic" svariant="outlined" size="small" />
                </Grid>
                <Grid item xs={2}>
                  <br />
                  <Typography variant="text" > Salary Max</Typography>
                  <br />
                  <TextField style={{ width: "60%" }} id="outlined-basic" svariant="outlined" size="small" />
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2} style={{ marginTop: "10px" }}>
                  <Typography variant="text" > Currency</Typography>
                  <br />
                  <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <Select
                      value={isCurrency}
                      onChange={Currency}
                      size="small"
                      displayEmpty
                    >
                      <MenuItem value="">
                        <em>INR</em>
                      </MenuItem>
                      <MenuItem value={10}>4</MenuItem>
                      <MenuItem value={20}>5</MenuItem>
                      <MenuItem value={30}>6</MenuItem>
                    </Select>
                  </FormControl >
                </Grid>
                <Grid item xs={2} style={{ marginTop: "10px" }}>
                  <Typography variant="text" > Salary Type</Typography>
                  <br />
                  <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <Select
                      value={SalaryT}
                      onChange={SalaryType}
                      size="small"
                      displayEmpty
                    >
                      <MenuItem value="">
                        <em>Monthly</em>
                      </MenuItem>
                      <MenuItem value={10}>4</MenuItem>
                      <MenuItem value={20}>5</MenuItem>
                      <MenuItem value={30}>6</MenuItem>
                    </Select>
                  </FormControl >
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="text" > Country</Typography>
                  <br />
                  <TextField style={{ width: "60%" }} id="outlined-basic" svariant="outlined" size="small" />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="text" >City </Typography>
                  <br />
                  <TextField style={{ width: "60%" }} id="outlined-basic" svariant="outlined" size="small" />
                  <br />
                  <br />
                </Grid>
              </Grid>
            </Box>
          </div>
        </>

      );

    case 1:
      return (
        <>
          <Box style={{ paddingLeft: "200px" }} >
            <Card sx={{ maxWidth: '50%', padding: 2, marginLeft: 30 }}>
              <Typography variant="text" component="div" gutterBottom>
                Do you have At least 5 years of experience?
              </Typography>
              <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleChecked />}
              />yes
              <br />
              <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleChecked />}
              /> No
              <br />
              <Button variant="contained" color="primary">Submit</Button>

            </Card>
            <Toolbar />
            <Card sx={{ maxWidth: '50%', padding: 2, marginLeft: 30 }}>
              <Checkbox /> Exercise 1
              <Checkbox /> Exercise 1
              <Checkbox /> Exercise 1
              <br />
              <Checkbox /> Exercise 1
              <Checkbox /> Exercise 1
              <Checkbox /> Exercise 1
              <br />
              <Button variant="contained" color="primary">Submit</Button>
            </Card>
            <Toolbar />
          </Box>
        </>
      );
    case 2:
      return (
        <>
          <Box style={{ paddingLeft: "200px" }}>
            <div style={{ marginLeft: "100px" }} >
              <Box>
                <Grid container spacing={2}   >
                  <Grid item xs={5} >
                    <Typography variant="h6"> Job title*</Typography>
                    <Typography varient='text'>Assistant Professor - Mechanical Engineering</Typography>
                    <br />
                    <br />
                    <Typography variant="h6" > Department*</Typography>
                    <Typography varient='text'>Mechanical</Typography>
                    <br />
                    <br />
                    <Typography variant="h6" > Team Members Involved</Typography>
                    <Typography varient='text'>Petsi, Avinash</Typography>
                    <br />
                    <br />
                    <Typography variant="h6" > Job Nature*</Typography>
                    <Typography varient='text'>In Campus</Typography>
                    <br />
                    <br />
                    <Typography variant="h6" > Major/ Speciality</Typography>
                    <Typography varient='text'>Mechanical</Typography>

                  </Grid>
                  <Grid item xs={5} align='Left'>
                    <Typography variant="h6" > Number of Vacancies*</Typography>
                    <Typography varient='text'>3</Typography>
                    <br />
                    <br />
                    <Typography variant="h6" > Job Owner*</Typography>
                    <Typography varient='text'>Sameer</Typography>
                    <br />
                    <br />
                    <Typography variant="h6" > Type*</Typography>
                    <Typography varient='text'>Full-time</Typography>
                    <br />
                    <br />
                    <Typography variant="h6" > Education*</Typography>
                    <Typography varient='text'>M.Tech</Typography>
                    <br />
                    <br />
                    <br />
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Typography variant="h6" > Work Ex. min. (Years)*</Typography>
                        <Typography varient='text'>5</Typography>
                        <br />
                        <br />
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="h6" > Work Ex. max.(Years)</Typography>
                        <Typography varient='text'>8</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2}></Grid>
                </Grid>
                <Grid container spacing={1} >
                  <Grid item xs={2} >
                    <br />
                    <Typography variant="h6" > Salary Minimum</Typography>
                    <Typography varient='text'>52000</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <br />
                    <Typography variant="h6" > Salary Max</Typography>
                    <Typography varient='text'>72000</Typography>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={2} style={{ marginTop: "10px" }}>
                    <Typography variant="h6" > Currency</Typography>
                    <Typography variant="text" > INR</Typography>
                  </Grid>
                  <Grid item xs={2} style={{ marginTop: "10px" }}>
                    <Typography variant="h6" > Salary Type</Typography>
                    <Typography variant="text" > Monthly</Typography>
                  </Grid>
                </Grid>
                <Toolbar />
                <Grid container spacing={2}>
                  <Grid item xs={5} >
                    <Typography variant="h6" > Country</Typography>
                    <Typography variant="text" > India</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="h6" >City </Typography>
                    <Typography variant="text" > Jalna</Typography>
                    <br />
                    <br />
                  </Grid>
                  <Grid item xs={2}></Grid>
                </Grid>
                <br />
                <div >
                  <Button variant="contained" style={{ width: "300px", marginLeft: "300px" }} color="primary">Apply</Button>
                </div>

                <Toolbar />
              </Box>
            </div>
          </Box>
        </>
      );


    default:
      return "unknown step";
  }
}

const CandidateApply = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [sort, setsort] = React.useState('')


  const sortby = (event) => {
    setsort(event.target.value);
  };

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

  return (

    <div style={{ marginLeft: 100 }}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
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
          <div >
            <form>{GetStepContent(activeStep)}</form>

            <div style={{ marginLeft: 300 }}>
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
            </div>
          </div>
          <Toolbar />
        </>
      )}
    </div>
  );
};


export default CandidateApply;
