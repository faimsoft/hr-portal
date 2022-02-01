import React, { useState, useEffect } from 'react'
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@mui/material/Paper';
import { Toolbar } from "@material-ui/core"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Checkbox, } from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const useStyles = makeStyles((theme) => ({
    main_div: {
        margin: 10,

    },
    ragisteration: {
        height: "auto",
        width: 300,
        borderRadius: "16px",
        border: 1
    },
    ragisterdiv: {
        marginTop: -100,
        border: 1
    },
    textField: {
        width: "90%",
        height: 10
    },
    LoginBtn: {
        width: "90%",
        height: "auto"
    }

}))


const SignUp = () => {
    const classes = useStyles();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [first_name, setfirst_name] = useState("")
    const [last_name, setlast_name] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState("")
    const [password, setpassword] = useState("")
    const [Country, setCountry] = React.useState('');
    const [State, setState] = useState('');
    const [countries, setCountries] = useState('');
    const [states, setStates] = useState('');
    const [City, setCity] = useState('');


    const history = useHistory();

    const SelectCountry = (event) => {
        setCountry(event.target.value);
    };
    const SelectState = (event) => {
        setState(event.target.value);
    };
    const SelectCity = (event) => {
        setCity(event.target.value);
    };

    //      useEffect(() => {
    //         if (localStorage.getItem('user-info')) {
    //             history.push("/SignUp")
    //         }
    //     },[])
    async function ragister() {
        const data = { first_name, last_name, email, mobile, password };

        //    history.push("/")
    }



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
                    <Toolbar />
                    <Typography variant="h4" align="center" color="primary" style={{ fontWeight: 600 }}> Welcome To Edjobster</Typography>
                    <Typography variant="subtitle1" align="center" style={{ fontWeight: 200 }}> A Leading Company </Typography>
                    <Toolbar />
                    <Toolbar />
                </Box>
                <div align="center" className={classes.ragisterdiv}>
                    <Box component={Paper} className={classes.ragisteration} sx={{ bgcolor: 'success.main', color: 'primary.contrastText', boxShadow: 2, p: 2 }}>
                        <Typography variant="subtitle1" align="center"> Ragister</Typography>
                        <Toolbar />
                        <TextField
                            className={classes.textField}
                            id="outlined-password-input"
                            label="First Name"
                            type="text"
                            size="small"
                            onChange={(e) => setfirst_name(e.target.value)}
                            value={first_name}
                        />
                        <br />
                        <br />
                        <br />
                        <TextField
                            className={classes.textField}
                            id="outlined-password-input"
                            label="Last Name"
                            type="text"
                            size="small"
                            value={last_name}
                            onChange={(e) => setlast_name(e.target.value)}
                        />
                        <br />
                        <br />
                        <br />
                        <TextField
                            className={classes.textField}
                            id="outlined-password-input"
                            label="Email"
                            type="text"
                            size="small"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}

                        />
                        <br />
                        <br />
                        <br />
                        <TextField
                            className={classes.textField}
                            id="outlined-password-input"
                            label="Mobile Number"
                            type="text"
                            size="small"
                            value={mobile}
                            onChange={(e) => setmobile(e.target.value)}
                        />
                        <br />
                        <br />
                        <br />
                        <TextField
                            className={classes.textField}
                            id="outlined-password-input"
                            label="Company Name"
                            type="text"
                            size="small"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <br />
                        <br />
                        <br />
                        <TextField
                            className={classes.textField}
                            id="outlined-password-input"
                            label="Address"
                            type="text"
                            size="small"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <br />
                        <br />
                        <br />
                        <TextField
                            className={classes.textField}
                            id="outlined-password-input"
                            label="Landmark"
                            type="text"
                            size="small"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <br />
                        <br />
                        <br />
                        <TextField
                            className={classes.textField}
                            id="outlined-password-input"
                            label="Pin Code"
                            type="text"
                            size="small"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        {/* dropdown */}
                        <div align='left'>
                            <br />
                            <br />
                            <FormControl sx={{ m: 1, minWidth: 275 }}>
                                <Select
                                    value={Country}
                                    onChange={SelectCountry}
                                    size="small"
                                    displayEmpty
                                >
                                    <MenuItem value="">
                                        <em>Country</em>
                                    </MenuItem>
                                    <MenuItem value={10}>India</MenuItem>
                                    <MenuItem value={20}>Nepal</MenuItem>
                                    <MenuItem value={30}>USA</MenuItem>
                                </Select>
                            </FormControl>
                            <br />
                            <FormControl sx={{ m: 1, minWidth: 130 }}>
                                <Select
                                    value={State}
                                    onChange={SelectState}
                                    size="small"
                                    displayEmpty
                                >
                                    <MenuItem value="">
                                        <em>State</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Maharashtra</MenuItem>
                                    <MenuItem value={20}>Bangal</MenuItem>
                                    <MenuItem value={30}>Delhi</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 130 }}>
                                <Select
                                    value={City}
                                    onChange={SelectCity}
                                    size="small"
                                    displayEmpty
                                >
                                    <MenuItem value="">
                                        <em>City</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Aurangabad</MenuItem>
                                    <MenuItem value={20}>Jalna</MenuItem>
                                    <MenuItem value={30}>Ambad</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        {/* Dropdown */}
                        {/* <Toolbar/> */}
                        <Typography variant="text" >
                            <Checkbox {...label} />
                            I agree the
                            <Button variant="text" component={Link} to="/">Term & Conditions</Button>
                        </Typography>
                        <br />
                        <br />
                        <Button variant="contained" className={classes.LoginBtn} onClick={ragister} >Sign Up </Button>
                        <br />
                        <br />
                        <Typography variant="text" >
                            Already have an account ?
                            <Button variant="text" component={Link} to="/Login" > Login</Button>
                        </Typography>
                    </Box>
                    <Toolbar />
                    <Toolbar />
                </div>

            </div>
        </>

    )
}

export default SignUp
