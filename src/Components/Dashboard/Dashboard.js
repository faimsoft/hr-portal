import React from 'react'
import { useHistory, Redirect, useLocation, Link } from 'react-router-dom'

import Box from '@mui/material/Box';
import { Paper,Toolbar} from "@material-ui/core";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import { makeStyles } from "@material-ui/core/styles";
import { isAuthenticated } from '../../utils/session'


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const useStyles = makeStyles((theme) => ({
   datemargin:{
     marginLeft:550
   }

}))


const Dashboard = () => {
    
    if(!isAuthenticated()) {
        return <Redirect to='/Login'  />
    }

    const classes = useStyles();
    const [value, setValue] = React.useState([null, null]);

    return (
        <>
            <div align='center'>
                <Box component={Paper}>
                    {/*  */}
                    <Box sx={{ alignSelf: 'flex-end' }} className={classes.datemargin}>
                        <br />
                         <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateRangePicker
                                startText="From Date"
                                endText="To Date"
                                value={value}
                                onChange={(newValue) => {
                                setValue(newValue);
                                }}
                                renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                    <TextField {...startProps} />
                                    <Box sx={{ mx: 2 }}> To </Box>
                                    <TextField {...endProps} />
                                </React.Fragment>
                                )}
                            />
                        </LocalizationProvider>
                     </Box>
                    {/*  */}
                    <Toolbar/>
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={3}
                                  justifyContent="flex-end"
                                  alignItems="center"
                            >
                             <Card sx={{maxWidth: 350 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}
                                          justifyContent="flex-end"
                                          alignItems="center"
                                    >
                                        <br />
                                        <HomeIcon color="success" sx={{ fontSize: 50 }} />
                                        <br />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <br />
                                        <Typography variant="text" > Candidates</Typography>
                                        <Typography variant="h6">75 </Typography>
                                        <br />
                                    </Grid>
                                </Grid>
                            </Card>
                                <Toolbar />
                                <Card sx={{ maxWidth: 350 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}
                                          justifyContent="flex-end"
                                          alignItems="center"
                                    >
                                        <br />
                                        <HomeIcon color="success" sx={{ fontSize: 50 }} />
                                        <br />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <br />
                                        <Typography variant="text" > Candidates</Typography>
                                        <Typography variant="h6">75 </Typography>
                                        <br />
                                    </Grid>
                                </Grid>
                            </Card>
                                <Toolbar />
                                <Card sx={{ maxWidth: 350 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}
                                          justifyContent="flex-end"
                                          alignItems="center"
                                    >
                                        <br />
                                        <HomeIcon color="success" sx={{ fontSize: 50 }} />
                                        <br />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <br />
                                        <Typography variant="text" > Candidates</Typography>
                                        <Typography variant="h6">75 </Typography>
                                        <br />
                                    </Grid>
                                </Grid>
                            </Card>
                            <Toolbar/>
                            </Grid>
                            <Grid item xs={3}
                                  justifyContent="flex-end"
                                  alignItems="center"
                            >
                             <Card sx={{ maxWidth: 350 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}
                                          justifyContent="flex-end"
                                          alignItems="center"
                                    >
                                        <br />
                                        <HomeIcon color="success" sx={{ fontSize: 50 }} />
                                        <br />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <br />
                                        <Typography variant="text" > Candidates</Typography>
                                        <Typography variant="h6">75 </Typography>
                                        <br />
                                    </Grid>
                                </Grid>
                            </Card>
                                <Toolbar />
                                <Card sx={{maxWidth: 350 }}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}
                                            justifyContent="flex-end"
                                            alignItems="center"
                                        >
                                            <br />
                                            <HomeIcon color="success" sx={{ fontSize: 50 }} />
                                            <br />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <br />
                                            <Typography variant="text" > Candidates</Typography>
                                            <Typography variant="h6">75 </Typography>
                                            <br />
                                        </Grid>
                                    </Grid>
                                </Card>
                                <Toolbar />
                                <Card sx={{ maxWidth: 350 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}
                                          justifyContent="flex-end"
                                          alignItems="center"
                                    >
                                        <br />
                                        <HomeIcon color="success" sx={{ fontSize: 40 }} />
                                        <br />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <br />
                                        <Typography variant="text" > Candidates</Typography>
                                        <Typography variant="h6">75 </Typography>
                                        <br />
                                    </Grid>
                                </Grid>
                                </Card>
                                <Toolbar/>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </div>
        </>
    )
}

export default Dashboard
