import React from 'react'
import Sidebar from '../SideBar/sidebar'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import {Box,Typography} from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles";
import Paper from '@mui/material/Paper';
import {Toolbar} from "@material-ui/core"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const useStyles = makeStyles((theme) => ({
   box:{
       paddingLeft:240,
       paddingRight:10
    },
    formpagedesign: {
        paddingLeft:60
    }
  

}))

const CreateEmailTemplate = () => {
     
    const classes = useStyles();
      const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

     return (
         <>
             <Sidebar />
             <div className={classes.box}>
                 <Box component={Paper}>
                     <Toolbar/>
                     <Button component={Link} to="/Categories"  align="left" color='primary' fontSize="large"  ><ArrowBackIcon /></Button>
                     <br />
                     <Typography variant="h4" align="center" color="primary"> Create an Email Template</Typography>
                     <br />
                     <hr />
                     <Toolbar />
                     <Grid container spacing={2} className={classes.formpagedesign}>
                         <Grid xs={6}>
                             <Typography variant="text" align="left" > Category</Typography>
                             <br/>
                             <FormControl variant="standard" sx={{  minWidth: 200 }}>
                                <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                                 <Select
                                id="outlined-basic"
                                labelId="demo-simple-select-standard-label"
                                // id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                label="Age"
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                             </FormControl>
                             <Toolbar />
                             <Typography variant="text" align="left" > Category</Typography>
                            <br/>
                             
                            <TextField
                            label=""
                            type="text"
                            size="small"
                             />
                             <Toolbar/>
                        </Grid>
                        <Grid xs={6}>
                            <h1>xs=  kcj dckdsn ck sdknmcds cdsknckdsc dndksn8</h1>
                        </Grid>
                    </Grid>
                 </Box>

             </div>
             
         </>
     )
 }
 
 export default CreateEmailTemplate
 
