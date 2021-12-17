import React from 'react'
import Sidebar from '../../SideBar/sidebar';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import {Box,Typography} from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles";
import Paper from '@mui/material/Paper';
import {Toolbar,MenuItem} from "@material-ui/core"
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
    },
    formsize: {
        width: 300,
        height:30
    }
  
  

}))

const PipelineCreate = () => {
     
    const classes = useStyles();
        const [Active, setActive] = React.useState('');

    const handleChange = (event) => {
    setActive(event.target.value);
    };
  

  

     return (
         <>
             <Sidebar />
             <div className={classes.box}>
                 <Box component={Paper}>
                     <Button component={Link} to="/Pipelines"  align="left" color='primary' fontSize="large"  ><ArrowBackIcon /></Button>
                     <Typography variant="h4" align="center" color="primary"> Edit Pipeline</Typography>
                     {/* <Toolbar/> */}
                
                 <div>
                         <Toolbar />
                         <hr />
                     <Box component={Paper} align="center">
                          <Typography variant="text" > Stage 1</Typography>
                                <br />
                            <TextField id="outlined-basic" svariant="outlined" size="small"  className={classes.formsize}/>
                            <Toolbar />
                            <Typography variant="text" > Stage 2</Typography>
                                <br />
                            <TextField id="outlined-basic" svariant="outlined" size="small"  className={classes.formsize}/>
                            <Toolbar />
                            <Typography variant="text" > Stage 3</Typography>
                                <br />
                            <TextField id="outlined-basic" svariant="outlined" size="small"  className={classes.formsize}/>
                            <Toolbar />
                            <Typography variant="text" > Stage 4</Typography>
                                <br />
                            <TextField id="outlined-basic" svariant="outlined" size="small"  className={classes.formsize}/>
                            <Toolbar />
                            <Typography variant="text" > Stage 5</Typography>
                                <br />
                             <FormControl sx={{ m: 1, minWidth: 120 }}>
                                 <Select
                                      className={classes.formsize}
                          value={Active}
                          onChange={handleChange}
                          size="small" 
                          displayEmpty
                        >
                        <MenuItem value="">
                        <em>Active</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                            <Toolbar />
                       
                        
                         </Box>
                         <br />
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
 
 export default PipelineCreate
 
