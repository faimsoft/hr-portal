import React from 'react'
import Sidebar from '../../SideBar/sidebar'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import {Paper,Toolbar,Button ,Typography}  from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {  Checkbox,} from "@material-ui/core";
import { TablePagination ,Table, TableBody, TableContainer, TableHead, TableRow, TableCell, AppBar, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse, Container } from "@material-ui/core";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
   SideSpace:{
       paddingLeft:250,
       paddingRight:20
    },
    box:{
       paddingLeft:20,
        paddingRight: 10,
       width:"90%"
    },
    formsize: {
        width: 300,
        height:30
    },
    fromBox: {
       paddingLeft:200
    }
    
}))

const EditUser = () => {
        const classes = useStyles();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [Department, setDepartment] = React.useState('')
    const [Role, setRole] = React.useState('');
    const [designation, setdesignation] = React.useState('')

    
    const Deparmenttby = (event) => {
    setDepartment(event.target.value);
    };
    
    const Roleby = (event) => {
    setRole(event.target.value);
    };

    
    const Designationby = (event) => {
    setdesignation(event.target.value);
    };
    
   

    return (
        <div className={classes.SideSpace}>
            <Sidebar/>
             <div className={classes.box}>
                 <Box component={Paper}>
                     <Button component={Link} to='/UserList'  align="left" color='primary' fontSize="large"  ><ArrowBackIcon /></Button>
                     <Typography variant="h4" align="center" > Edit User</Typography>
                     <br />
                     <hr />
                    <Toolbar />
                    <div  >
                        <Grid align="Left" container spacing={2}>
                            <Grid  xs={6} className={classes.fromBox}>
                                <Typography variant="text" textalign="center" > First Name</Typography>
                                <br />
                                <TextField id="outlined-basic" svariant="outlined" size="small"  className={classes.formsize}/>
                                <Toolbar />
                                <Typography variant="text" > Email</Typography>
                                <br />
                                <TextField id="outlined-basic" svariant="outlined" size="small"  className={classes.formsize}/>
                                <Toolbar />
                                <Typography variant="text" > Department</Typography>
                                <br />
                               <FormControl sx={{ m: 1, minWidth: 120 }} className={classes.formsize}>
                                    <Select
                                        value={Department}
                                        onChange={Deparmenttby}
                                        size="small" 
                                        displayEmpty
                                    >
                                        <MenuItem value="">
                                        <em>Choose Deparment</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Science</MenuItem>
                                        <MenuItem value={20}>Arts</MenuItem>
                                        <MenuItem value={30}>Commerce</MenuItem>
                                    </Select>
                                </FormControl >
                                <Toolbar />
                                <Typography variant="text" > Role</Typography>
                                <br />
                                <FormControl sx={{ m: 1, minWidth: 120 }} className={classes.formsize}>
                                    <Select
                                        value={Role}
                                        onChange={Designationby}
                                        size="small" 
                                        displayEmpty
                                    >
                                        <MenuItem value="">
                                        <em>Choose Your Role</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl >
                                <br />
                            </Grid>
                            <Grid xs={6} align="left">
                                <Typography variant="text" > Last Name</Typography>
                                <br />
                                <TextField id="outlined-basic" svariant="outlined" size="small"  className={classes.formsize}/>
                                <Toolbar />
                                <Typography variant="text" > Phone Number</Typography>
                                <br />
                                <TextField id="outlined-basic" svariant="outlined" size="small"  className={classes.formsize}/>
                                <Toolbar />
                                <Typography variant="text" > Designation</Typography>
                                <br />
                                <FormControl sx={{ m: 1, minWidth: 120 }} className={classes.formsize}>
                                    <Select
                                        value={designation}
                                        onChange={Roleby}
                                        size="small" 
                                        displayEmpty
                                    >
                                        <MenuItem value="">
                                        <em>Choose Your Designation</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Professor</MenuItem>
                                        <MenuItem value={20}>Assitant profisser</MenuItem>
                                        <MenuItem value={30}>Teacher</MenuItem>
                                    </Select>
                                </FormControl >
                                <br />
                                
                                <Toolbar />
                               
                                 <br/>
                                <Typography variant="text" >
                                        <Checkbox {...label} />
                                         is active
                                </Typography>
                                
                            </Grid>
                        </Grid>   
                        <Toolbar/>
                        <div align="Right">
                            <Stack
                             direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                                <Button variant="contained"  color="warning">Cancel</Button>
                                <Button variant="contained" color="primary">Save</Button>
                             </Stack>
                        </div>
                        <Toolbar/>
                    </div>
                </Box>
            </div>
       </div>
    )
}

export default EditUser
