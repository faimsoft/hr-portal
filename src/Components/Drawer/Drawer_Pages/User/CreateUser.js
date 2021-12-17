import React from 'react'
import Sidebar from '../../SideBar/sidebar'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import {Paper,Toolbar,Button ,Typography}  from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {  Checkbox,} from "@material-ui/core";
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

const CreateUser = () => {
        const classes = useStyles();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    

    return (
        <div className={classes.SideSpace}>
            <Sidebar/>
             <div className={classes.box}>
                 <Box component={Paper}>
                     <Button component={Link} to='/UserList'  align="left" color='primary' fontSize="large"  ><ArrowBackIcon /></Button>
                     <Typography variant="h4" align="center" > Create User</Typography>
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
                                <TextField id="outlined-basic" svariant="outlined" size="small"  className={classes.formsize}/>
                                <Toolbar />
                                <Typography variant="text" > Role</Typography>
                                <br />
                                <TextField id="outlined-basic" svariant="outlined" size="small"  className={classes.formsize}/>
                                <br />
                                <br />
                                <Typography variant="text" >
                                        <Checkbox {...label} />
                                         is active
                                </Typography>
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
                                <TextField id="outlined-basic" svariant="outlined" size="small"  className={classes.formsize}/>
                                <br />
                                <Toolbar />
                                <Typography variant="text" > Create password</Typography>
                                <br />
                                <TextField id="outlined-basic" svariant="outlined" size="small"  className={classes.formsize}/>
                                <br />
                            </Grid>
                        </Grid>   
                        <Toolbar/>
                        <div align="Right">
                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                                <Button variant="contained"  color="warning">Cancel</Button>
                                <Button variant="contained" color="primary">Submit</Button>
                            </Stack>
                        </div>
                        <Toolbar/>
                    </div>
                </Box>
            </div>
       </div>
    )
}

export default CreateUser
