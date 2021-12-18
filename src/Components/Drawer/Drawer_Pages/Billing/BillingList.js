import React from 'react'
import Sidebar from '../../SideBar/sidebar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {Box,Typography,Table, TableBody, TableContainer, TableHead, TableRow, TableCell,} from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles";
import Paper from '@mui/material/Paper';
import {Toolbar} from "@material-ui/core"
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
const useStyles = makeStyles((theme) => ({
   box:{
       paddingLeft:240,
       paddingRight:10
    },
   
  
  

}))


const BillingList = () => {
     
    const classes = useStyles();
    
  

  

     return (
         <>
             <Sidebar />
             <div className={classes.box}>
                 <Box component={Paper}>
                     <Toolbar/>
                     <Typography variant="h4" align="center" color="primary"> Your current Plan</Typography>
                     <Toolbar />
                     <hr />
                     <div>
                        <Toolbar/>
                         <Box component={Paper} align="center">
                             <Toolbar/>
                             <Card sx={{ maxWidth: 300 }}>
                                 <br />
                                 <Typography variant='h4'>$15/mo</Typography>
                                 <Typography paragraph>Basic</Typography>
                                 <Typography paragraph>10 user included</Typography>
                                 <Typography paragraph>2GB of storage</Typography>
                                 <Typography paragraph>Email support</Typography>
                                 <Typography paragraph>Help center access</Typography>
                                 <Typography paragraph>Sign Up for free</Typography>
                                 <Button variant="contained" color='warning'> Upgrade </Button>
                                 
                                 <Toolbar/>
                             </Card>
                             <Toolbar/>
                        </Box>
                        <Toolbar/>
                     </div>
                 </Box>
                 {/* SElect plan */}
                  <Box component={Paper}>
                     <Typography variant="h4" align="center" color="primary">Select Plan</Typography>
                     <Toolbar />
                     <hr />
                     <div>
                        <Toolbar/>
                         <Box component={Paper} align="center">
                             
                             <Grid container spacing={2}>
                                <Grid  xs={4}>
                                    <Card sx={{ maxWidth: 300 }}>
                                 <br />
                                 <Typography variant='h4'>$15/mo</Typography>
                                 <Typography paragraph>Basic</Typography>
                                 <Typography paragraph>10 user included</Typography>
                                 <Typography paragraph>2GB of storage</Typography>
                                 <Typography paragraph>Email support</Typography>
                                 <Typography paragraph>Help center access</Typography>
                                 <Typography paragraph>Sign Up for free</Typography>
                                 <Button variant="contained" color='warning'> Upgrade </Button>
                                 <Toolbar/>
                             </Card>
                                </Grid>
                                <Grid  xs={4}>
                                    <Card sx={{ maxWidth: 300 }}>
                                 <br />
                                 <Typography variant='h4'>$35/mo</Typography>
                                 <Typography paragraph>Advanced</Typography>
                                 <Typography paragraph>15 user included</Typography>
                                 <Typography paragraph>50GB of storage</Typography>
                                 <Typography paragraph>Email/Call support</Typography>
                                 <Typography paragraph>Help center access</Typography>
                                 <Typography paragraph>Sign Up for free</Typography>
                                 <Button variant="contained" color='warning'> Upgrade </Button>
                                 <Toolbar/>
                             </Card>
                                 </Grid>
                                 <Grid  xs={4}>
                                    <Card sx={{ maxWidth: 300 }}>
                                 <br />
                                 <Typography variant='h4'>$65/mo</Typography>
                                 <Typography paragraph>premium</Typography>
                                 <Typography paragraph>30 user included</Typography>
                                 <Typography paragraph>20GB of storage</Typography>
                                 <Typography paragraph>priority support</Typography>
                                 <Typography paragraph>Help center access</Typography>
                                 <Typography paragraph>Sign Up for free</Typography>
                                 <Button variant="contained" color='warning'> Upgrade </Button>
                                 <Toolbar/>
                             </Card>
                                 </Grid>
                             </Grid>   
                             <Toolbar />
                             {/* table */}
                             <TableContainer component={Paper} >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell align='center' >Features</TableCell>
                                <TableCell align="center">Basic</TableCell>
                                <TableCell align="center">Basic</TableCell>
                                <TableCell align="center">Basic</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                <TableRow >
                                    <TableCell variant="h3" align='center' >Features  1</TableCell>
                                    <TableCell align="center"><CheckRoundedIcon/></TableCell>
                                    <TableCell align="center"><CheckRoundedIcon/></TableCell>
                                    <TableCell align="center"><CheckRoundedIcon/></TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell variant="h3" align='center'>Features 2</TableCell>
                                    <TableCell align="center"><ClearRoundedIcon/></TableCell>
                                    <TableCell align="center"><CheckRoundedIcon/></TableCell>
                                    <TableCell align="center"><CheckRoundedIcon/></TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell variant="h3" align='center' >Features 3</TableCell>
                                    <TableCell align="center"><CheckRoundedIcon/></TableCell>
                                    <TableCell align="center"><CheckRoundedIcon/></TableCell>
                                    <TableCell align="center"><CheckRoundedIcon/></TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                        </Box>
                        <Toolbar/>
                     </div>
                 </Box>
             </div>
             
         </>
     )
 }
 
 export default BillingList
 
