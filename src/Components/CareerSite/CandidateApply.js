import React, { useState } from "react";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  Paper,
  Toolbar
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { MenuItem } from "@material-ui/core";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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
    "Submit",

  ];
}

function GetStepContent(step) {
  const [sort, setsort] = useState('')
  const [minexp, setminexp] = useState('')
  const [isJobNature, setisJobNature] = useState('')
  const [IsSpecility, setIsSpecility] = useState('')
  const [MaxExp, setMaxExp] = useState('')
  const [isCurrency, setisCurrency] = useState('')
  const [SalaryT, setSalaryT] = useState('')

  const sortby = (event) => {
    setsort(event.target.value);
  };
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
        </>
      );

    case 1:
      return (
        <>
          <h2>222222222222222222222</h2>
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            name="emailAddress"
          />
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            name="phoneNumber"
          />
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            name="alternatePhone"
          />
        </>
      );
    case 2:
      return (
        <>
          <h2>333333333333333333333333333</h2>
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            name="address1"
          />
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            name="address2"
          />
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            name="country"
          />
        </>
      );
    case 3:
      return (
        <>
          <h4>444444444444444444</h4>
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            name="cardNumber"
          />
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            name="cardMonth"
          />
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            name="cardYear"
          />
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
    <>
      <div className={classes.stepper} style={{ width: "70%" }} >
        <Grid container spacing={0}>
          <Grid item xs={1}>
            <Button component={Link} to="/SingleJobView" align="left" color='primary' fontSize="large"  ><ArrowBackIcon /></Button>

          </Grid>
          <Grid item xs={10}>
            <Typography varient='h6'>Assistant Professor - Assistant Professor -Mechanical Engineering</Typography>
          </Grid>
        </Grid>
        <Box component={Paper} className={classes.paddingBox} >
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((step, index) => {
              const labelProps = {};
              const stepProps = {};
              // if (isStepOptional(index)) {
              //   labelProps.optional = (
              //     <Typography
              //       variant="caption"
              //       align="center"
              //       style={{ display: "block" }}
              //     >
              //       optional
              //     </Typography>
              //   );
              // }
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
            </>
          )}
        </Box>
      </div>
    </>
  );
};

export default CandidateApply;
