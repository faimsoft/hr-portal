import React from 'react'
import {Box,Typography} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@mui/material/Paper';
import {Toolbar} from "@material-ui/core"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {  Checkbox,} from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const useStyles = makeStyles((theme) => ({
   main_div:{
       margin:10,
       
   },
   ragisteration:{
       height:"auto",
       width:300,
       borderRadius:"16px",
       border:1
   },
   ragisterdiv:{
     marginTop:-100,
     border:1
   },
   textField:{
       width:"90%",
       height:10
   },
   LoginBtn: {
        width: "90%",
        height:"auto"
    }

}))


const SignUp = () => {
             const classes = useStyles();
                const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
            <div className={classes.main_div}>
            <Box sx={{ bgcolor: ' #d9d9d9', color: 'primary.contrastText', p: 2 }}>
                    <Button
                        component={Link}
                        to="/"
                        color='primary'
                        align="left"
                        style={{
                            borderRadius: 35,
                            padding: "18px 36px",
                            fontSize: "18px",
                            
                        }}  >
                        <ArrowBackIcon />
                    </Button>
                <Toolbar/>
                <Typography  variant="h4" align="center" color="primary" style={{ fontWeight: 600 }}> Welcome To Edjobster</Typography>
                <Typography  variant="subtitle1" align="center" style={{ fontWeight: 200 }}> A Leading Company </Typography>
                <Toolbar/>
                <Toolbar/>
            </Box>
            <div align="center" className={classes.ragisterdiv}>
            <Box  component={Paper} className={classes.ragisteration}  sx={{ bgcolor: 'success.main', color: 'primary.contrastText',boxShadow: 2, p: 2 }}>
                 <Typography  variant="subtitle1" align="center"> Ragister</Typography>
                <Toolbar/>
               <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="First Name"
                type="text"
                size="small"
                />
                <br/>
                <br/>
                <br/>
                <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="Last Name"
                type="text"
                size="small"
                />
                <br/>
                <br/>
                <br/>
                <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="Email"
                type="text"
                size="small"
                />
                <br/>
                <br/>
                <br/>
                <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="Password"
                type="password"
                size="small"
                />
                <br/>
                <br/>
                <br/>
                <TextField
                className={classes.textField}
                id="outlined-password-input"
                label="Confirm Password"
                type="text"
                size="small"
                />
                <br/>

                <Toolbar/>
                <Typography variant="text" >
                        <Checkbox {...label} />
                        I agree the 
                        <Button variant="text" component={Link} to="/">Term & Conditions</Button>
                </Typography>
                <br/>
                <br/>
                <Button variant="contained"  className={classes.LoginBtn} >Sign in </Button>
                <br/>
                <br/>
                <Typography variant="text" >
                        Already have an account ?
                        <Button variant="text" component={Link} to="/Login"> Login</Button>
                </Typography>
            </Box>
                        <Toolbar />
                        <Toolbar/>
            </div>
            
            </div>
        </>
        // <Box sx={{ bgcolor: 'secondary.main' }}>
        // </Box>
    )
}

export default SignUp
