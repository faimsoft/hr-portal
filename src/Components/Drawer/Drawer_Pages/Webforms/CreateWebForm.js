import React from 'react'
import Sidebar from '../../SideBar/sidebar';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import {Box,Typography} from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles";
import Paper from '@mui/material/Paper';
import {Toolbar} from "@material-ui/core"
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


const useStyles = makeStyles((theme) => ({
   box:{
       paddingLeft:240,
       paddingRight:10
    },
    gridpadding: {
        paddingLeft:50
    },
    nameForm: {
        width: 400,
        height:10
    },
    smmallform: {
        width:200
    },
    finalbtn: {
        marginRight:40
    },
    formgrid: {
        paddingLeft:60
    }
  
  

}))

const CreateWebForm = () => {
     
    const classes = useStyles();
  

  

     return (
         <>
             <Sidebar />
             <div className={classes.box}>
                 <Box component={Paper}>
                     <Button component={Link} to="/WebformList"  align="left" color='primary' fontSize="large"  ><ArrowBackIcon /></Button>
                     <Typography variant="h4" align="center" color="primary"> Create an Web Form</Typography>
                     {/* <Toolbar/> */}
                
                 <div>
                    <Toolbar/>
                     <Box component={Paper} align="center">
                         <hr />
                     <Grid container spacing={1} >
                         <Grid xs={4} className={classes.gridpadding}>
                             <br />
                                 <Typography variant="h6"  > Select Field</Typography>
                                 <br />
                                 <Stack  
                                    direction="row"
                                    justifyContent="left"
                                    alignItems="left"
                                     spacing={2}
                                 >
                                    <Button variant="contained">First Name</Button>
                                    <Button variant="contained">Last Name</Button>
                                 </Stack>
                                 <br />
                                 <Stack  
                                    direction="row"
                                    justifyContent="left"
                                    alignItems="left"
                                     spacing={2}
                                 >
                                        <Button variant="contained">Email</Button>
                                        <Button variant="contained">Mobile</Button>
                                 </Stack>
                                 <br />
                                 <Stack  
                                    direction="row"
                                    justifyContent="left"
                                    alignItems="left"
                                     spacing={2}
                                 >
                                  <Button  variant="outlined">Current Job Title</Button>
                                 </Stack>
                                 <br />
                                 <Stack  
                                    direction="row"
                                    justifyContent="left"
                                    alignItems="left"
                                     spacing={2}
                                 >
                        
                                     <Button variant="outlined"> Job title</Button>
                                     <Button  variant="outlined">From Date</Button>
                                 </Stack>
                                 <br />
                                 <Stack  
                                    direction="row"
                                    justifyContent="left"
                                    alignItems="left"
                                     spacing={2}
                                 >
                                     <Button variant="outlined"> To Date</Button>
                                     <Button  variant="outlined">Eduaction Qualification</Button>
                                 </Stack>
                                 <br />
                                 <Stack  
                                    direction="row"
                                    justifyContent="left"
                                    alignItems="left"
                                     spacing={2}
                                 >
                                    <Button  variant="outlined">Eduaction Specialization</Button>
                                 </Stack>
                                 <br />
                                 <Stack  
                                    direction="row"
                                    justifyContent="left"
                                    alignItems="left"
                                     spacing={2}
                                 >
                                     <Button variant="outlined"> University </Button>
                                     <Button  variant="outlined">Marks(Number)</Button>
                                 </Stack>
                                 <br />
                                 <Stack  
                                    direction="row"
                                    justifyContent="left"
                                    alignItems="left"
                                     spacing={2}
                                 >
                                     <Button  variant="outlined">Marks(Percentage)</Button>
                                 </Stack>
                                 <br />
                                 <Stack  
                                    direction="row"
                                    justifyContent="left"
                                    alignItems="left"
                                     spacing={2}
                                 >
                        
                                     <Button variant="outlined"> Marks(Grades) </Button>
                                     <Button  variant="outlined">Current Salary</Button>
                                 </Stack>
                                 <br />
                                 <Stack  
                                    direction="row"
                                    justifyContent="left"
                                    alignItems="left"
                                     spacing={2}
                                 >
                        
                                     <Button variant="outlined"> Expected Salary </Button>
                                     <Button  variant="outlined">Skills</Button>
                                 </Stack>

                        <Toolbar/>
                         </Grid>
                        <Grid  xs={8}  sx={{ borderLeft: 1 }} className={classes.formgrid} align="left" >
                             <br />
                              <Typography variant="text" > Give name to your webform</Typography>
                                <br />
                                 <TextField id="outlined-basic" svariant="outlined" size="small" className={classes.nameForm} />
                                 <Toolbar />
                                 <Stack  
                                    direction="row"
                                    justifyContent="left"
                                    alignItems="left"
                                     spacing={2}
                                 >
                                     <div>
                                          <Typography variant="text" > First Name</Typography>
                                          <br />
                                          <TextField id="outlined-basic" svariant="outlined" size="small" className={classes.smmallform} />
                                     </div>
                                     <div>
                                          <Typography variant="text" > Last Name</Typography>
                                          <br />
                                          <TextField id="outlined-basic" svariant="outlined" size="small" className={classes.smmallform} />
                                     </div>
                                 </Stack>
                                 <Toolbar/>
                                 <Stack  
                                    direction="row"
                                    justifyContent="left"
                                    alignItems="left"
                                     spacing={2}
                                 >
                                     <div>
                                          <Typography variant="text" >Email</Typography>
                                          <br />
                                          <TextField id="outlined-basic" svariant="outlined" size="small" className={classes.smmallform} />
                                     </div>
                                     <div>
                                          <Typography variant="text" > Mobile</Typography>
                                          <br />
                                          <TextField id="outlined-basic" svariant="outlined" size="small" className={classes.smmallform} />
                                     </div>
                                </Stack>
                        </Grid>
                         </Grid>
                         
                         <hr />
                </Box>
                         <Stack  
                         className={classes.finalbtn}
                        direction="row"
                        justifyContent="right"
                        alignItems="right"
                        spacing={2}>
                            <Button variant="outlined">Cancel</Button>
                            <Button variant="contained">Submit</Button>
                     </Stack>
                     <Toolbar/>
                     </div>
                      </Box>
             </div>
             
         </>
     )
 }
 
 export default CreateWebForm
 
