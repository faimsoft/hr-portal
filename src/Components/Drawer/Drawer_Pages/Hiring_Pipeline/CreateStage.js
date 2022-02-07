import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Toolbar} from "@material-ui/core";
import Paper from '@mui/material/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from '../../SideBar/sidebar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {Typography} from "@material-ui/core"



const useStyles = makeStyles((theme) => ({
   buttonSize:{
     width:200
    },
    formsize: {
        width: 300,
        height:30
    },

}))

const CreateStage = () => {
              const classes = useStyles();
    return (
        <div  align="center"   >
            <Sidebar/>
            <Box align='center' component={Paper}>
                <Typography  variant="h4" align="center" style={{ fontWeight: 600 }}> Add New Stage</Typography>
                <br/>
                <TextField id="outlined-basic" svariant="outlined" size="small"  placeholder='Type the name'   className={classes.formsize}/>                        
                 <Toolbar />
            </Box>
            <Box>
                <br />
                <Typography variant="h4" align="center" style={{ fontWeight: 600 }}> Add a Status</Typography>
                <br />
                <Typography variant="text" align="left"> In Review</Typography>
                <br />
                <br />
                <TextField id="outlined-basic" svariant="outlined" size="small" placeholder='Type the name'  className={classes.formsize}/>
                <Toolbar/>
                <Toolbar />
                <div  align="center">
                    <Button className={classes.buttonSize} color="primary" component={Link} to='/' variant="contained" disableElevation >
                        Create 
                    </Button>
                    <Toolbar/>
                    <Toolbar/>
                </div>
            </Box>
        </div>
    )
}
export default CreateStage

