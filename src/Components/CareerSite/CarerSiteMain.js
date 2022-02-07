import React from 'react'
import { useHistory, Redirect, useLocation, Link } from 'react-router-dom'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LogoPic from '../Media/images/logo.jpg'
import { makeStyles } from "@material-ui/core/styles";
import {Toolbar, Typography} from "@material-ui/core"
import {  MenuItem} from "@material-ui/core";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WorkIcon from '@mui/icons-material/Work';
import { isAuthenticated } from '../../utils/session'

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
    },
    experience: {
        paddingLeft:20
    }
}))



const CarerSiteMain = () => {
    
    if(!isAuthenticated()) {
        return <Redirect to='/Login'  />
    }
    
    const classes = useStyles();
    const [sort, setsort] = React.useState('')
    
    const sortby = (event) => {
    setsort(event.target.value);
    };
    

    return (
        <>
            <div align='center'>
                <Toolbar/>
                <Grid container spacing={1}
                    // container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={2}>
                        <div >
                            <img
                                    className={classes.logostyle}
                                    src={LogoPic}                                    
                                />
                        </div>
                    </Grid>
                    <Grid item xs={8} align="left">
                        <Typography variant='h5'>Imperial College of Engineering</Typography>
                        <Typography variant='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies accumsan cursus aliquet blandit interdum.
                            Cursus lobortis lorem eu, semper. Interdum lorem et integer ac aliquam porttitor quam consequat. Venenatis
                            nunc malesuada euismod iaculis.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <Toolbar />
            <div align='center'>
                <Box component={Paper} className={classes.avilablejob}  sx={{ bgcolor: '#F9F9F9' }}>
                    <br />
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={8}>
                    <Typography align='Left' variant='h5'>Available Jobs (09)</Typography>
                        </Grid>
                        <Grid item xs={6} md={4}>
                    <FormControl sx={{ m: 1, minWidth: 180 }}>
                       <Select
                        value={sort}
                        onChange={sortby}
                        size="small" 
                        displayEmpty
                      >
                        <MenuItem value="">
                        <em>Sort by new to old</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                       </Select>
                    </FormControl >
                    </Grid>
                    </Grid>
                    <hr />
                    <br />
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Grid container spacing={2} align='left'>
                                <Grid item xs={8}>
                                    <Typography variant="h6">Assistant Professor - Mechanical Engineering</Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Typography color="primary" varient='text'><FmdGoodIcon/></Typography>
                                        <Typography > Ambad</Typography>
                                        <br />
                                        <Typography color="primary" varient='text' className={classes.experience}><WorkIcon/></Typography>
                                        <Typography> work exprience 5 year to 8 year</Typography>
                                        
                                    </Stack>
                                </Grid>
                                <Grid item xs={4} align='Right'>
                                    <br />
                                    <Button variant="contained" component={Link} to="/SingleJobView" >view Details</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <br />
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Grid container spacing={2} align='left'>
                                <Grid item xs={8}>
                                    <Typography variant="h6">Assistant Professor - Mechanical Engineering</Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Typography color="primary" varient='text'><FmdGoodIcon/></Typography>
                                        <Typography > Ambad</Typography>
                                        <br />
                                        <Typography color="primary" varient='text' className={classes.experience}><WorkIcon/></Typography>
                                        <Typography> work exprience 5 year to 8 year</Typography>
                                        
                                    </Stack>
                                </Grid>
                                <Grid item xs={4} align='Right'>
                                    <br />
                                    <Button variant="contained" component={Link} to="/SingleJobView">view Details</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <br />
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Grid container spacing={2} align='left'>
                                <Grid item xs={8}>
                                    <Typography variant="h6">Assistant Professor - Mechanical Engineering</Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Typography color="primary" varient='text'><FmdGoodIcon/></Typography>
                                        <Typography > Ambad</Typography>
                                        <br />
                                        <Typography color="primary" varient='text' className={classes.experience}><WorkIcon/></Typography>
                                        <Typography> work exprience 5 year to 8 year</Typography>
                                        
                                    </Stack>
                                </Grid>
                                <Grid item xs={4} align='Right'>
                                    <br />
                                    <Button variant="contained" component={Link} to="/SingleJobView">view Details</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <br />
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Grid container spacing={2} align='left'>
                                <Grid item xs={8}>
                                    <Typography variant="h6">Assistant Professor - Mechanical Engineering</Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Typography color="primary" varient='text'><FmdGoodIcon/></Typography>
                                        <Typography > Ambad</Typography>
                                        <br />
                                        <Typography color="primary" varient='text' className={classes.experience}><WorkIcon/></Typography>
                                        <Typography> work exprience 5 year to 8 year</Typography>
                                        
                                    </Stack>
                                </Grid>
                                <Grid item xs={4} align='Right'>
                                    <br />
                                    <Button variant="contained" component={Link} to="/SingleJobView">view Details</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Toolbar/>
                </Box>
            </div>
        </>
    )
}

export default CarerSiteMain
