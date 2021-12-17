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
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';


const useStyles = makeStyles((theme) => ({
   box:{
       paddingLeft:240,
       paddingRight:10
    },
    formpagedesign: {
        paddingLeft:60
    },
    bodyform: {
        marginLeft: 200,
        widhth:1000
    },
    bodyformSize: {
        width:800
    }
  

}))

const CreateEmailTemplate = () => {
     
    const classes = useStyles();
    const [Category, setCategory] = React.useState('');
    const [Variable, setVariable] = React.useState('')
    

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const variableChange = (event) => {
        setVariable(event.target.value)
    }

     return (
         <>
             <Sidebar />
             <div className={classes.box}>
                 <Box component={Paper}>
                     <Button component={Link} to="/Categories"  align="left" color='primary' fontSize="large"  ><ArrowBackIcon /></Button>
                     <Typography variant="h4" align="center" color="primary"> Create an Email Template</Typography>
                     <br />
                     <hr />
                     <Toolbar />
                     <Grid container spacing={2} className={classes.formpagedesign} align="center">
                         <Grid xs={6}>
                             <br/>
                             <FormControl  sx={{ minWidth: 220 }}>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Category}
                                label="Category"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>fresh</MenuItem>
                                <MenuItem value={20}>exprience</MenuItem>
                                <MenuItem value={30}>applied</MenuItem>
                                </Select>
                             </FormControl>
                             <Toolbar />
                             <br/>
                             <TextField id="outlined-basic" label="Subject" variant="outlined" />
                             <Toolbar/>
                         </Grid>
                         <Grid xs={6} align="left">
                             <br />
                             <div>
                                 <FormControlLabel control={<Checkbox defaultChecked />} label="Candidate" />
                                 <FormControlLabel control={<Checkbox defaultChecked />} label="Internal" />
                                 <Toolbar />
                                <br/>
                                <br/>
                                <FormControl  sx={{ minWidth: 220 }}>
                                    <InputLabel id="demo-simple-select-label">Variabel</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={Variable}
                                    label="Variable"
                                    onChange={variableChange}
                                    >
                                    <MenuItem value={10}>1</MenuItem>
                                    <MenuItem value={20}>2</MenuItem>
                                    <MenuItem value={30}>3</MenuItem>
                                    </Select>
                                </FormControl>
                             </div>
                          </Grid>
                     </Grid>
                     <div align="left" className={classes.bodyform}>
                         <Typography variant="text" > Body</Typography>
                         <br />
                         <TextField
                        className={classes.bodyformSize}
                        id="outlined-basic"
                        multiline
                        rows={9}
                        />
                        </div>
                       <Toolbar/>
                    <div >
                         <Stack
                             direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                                <Button variant="outlined">Cancel</Button>
                            <Button variant="contained">Submit</Button>
                        </Stack>
                 </div>
<Toolbar/>
                        </Box>
             </div>
             
         </>
     )
 }
 
 export default CreateEmailTemplate
 
