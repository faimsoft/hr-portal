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
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { signUpApi, apiPostUnsecure, apicountries, } from '../../../utility/apicopy'
import { saveUser } from '../../../utility/session';
// alert npm 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


/**
 * * sofojd
 * ! snknnd
 * ? odicd
 * todo:coments
 */

const SignUp = () => {
    const classes = useStyles();
    const history = useHistory();

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [company, setCompany] = useState("")
    const [pincode, setPincode] = useState("")
    const [address, setAddress] = useState("")
    const [landmark, setLandmark] = useState("")
    // countries
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const [loadDatas, setLoadDatas] = useState(true)





    async function ragister() {
        if (first_name.trim() === "") {
            // alert('Enter FirstName');
            toast.warn("Enter FirstName!", {
                position: "top-center"
            })
            return
        }
        if (last_name.trim() === "") {
            toast.warn("last_name", {
                position: "top-center"
            })
            return
        }
        if (email.trim() === "") {
            toast.warn("Entet Email", {
                position: 'top-center'
            })
        }
        if (mobile.trim() === "") {
            toast.warn("Enter Mobile ", {
                position: "top-center"
            })
        }
        if (company.trim() === "") {
            toast.warn("Enter Company", {
                position: 'top-center'
            })
        }
        if (landmark.trim() === "") {
            toast.warn("Enter Landmark", {
                position: 'top-center'
            })
        }


        const data = { first_name, last_name, email, mobile, company, pincode, address, landmark }
        console.warn('data', data)

        apiPostUnsecure(signUpApi, data, apicountries,
            (response) => {
                saveUser(response)
                history.push('/JobView');


            },
            (errorMsg) => {
                setLoadDatas(false)
                toast.error(errorMsg, {
                    position: 'top-center'
                })
            }
        )

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
                            onChange={(e) => setFirst_name(e.target.value)}
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
                            onChange={(e) => setLast_name(e.target.value)}
                        />
                        <br />
                        <br />
                        <br />
                        <TextField
                            className={classes.textField}
                            id="outlined-password-input"
                            label="Email"
                            type="email"
                            size="small"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

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
                            onChange={(e) => setMobile(e.target.value)}
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
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
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
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
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
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
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
                            value={landmark}
                            onChange={(e) => setLandmark(e.target.value)}
                        />
                        {/* dropdown */}
                        <div align='left'>
                            <br />
                            <br />
                            <TextField
                                style={{
                                    width: '275px',

                                }}
                                id="Zip Code"
                                select
                                size='small'
                                value={countries}
                                // onChange={clickhandleChange}
                                SelectProps={{
                                    native: true,
                                }}
                            >  {countries.map((option) => (
                                <option key={option.id} value={option.name}>
                                    {option.name}
                                </option>
                            ))}
                            </TextField>
                            <br />
                            <br />
                            <Grid container spacing={2}   >
                                <Grid item xs={6}  >

                                    <TextField
                                        style={{
                                            width: '130px',

                                        }}
                                        id="Zip Code"
                                        select
                                        size='small'
                                        value={cities}
                                        // onChange={clickhandleChange}
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >  {countries.map((option) => (
                                        <option key={option.id} value={option.name}>
                                            {option.name}
                                        </option>
                                    ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={4}  >

                                    <TextField
                                        style={{
                                            width: '130px',

                                        }}
                                        id="Zip Code"
                                        select
                                        size='small'
                                        value={countries}
                                        // onChange={clickhandleChange}
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >  {states.map((option) => (
                                        <option key={option.id} value={option.name}>
                                            {option.name}
                                        </option>
                                    ))}
                                    </TextField>
                                </Grid>
                            </Grid>
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
                        <Button variant="contained" className={classes.LoginBtn} onClick={() => ragister()} >Sign Up </Button>
                        <br />
                        <br />
                        <Typography variant="text" >
                            Already have an account ?
                            <Button variant="text" component={Link} to="/Login" > Login</Button>
                        </Typography>
                    </Box>
                    <Toolbar />
                    <Toolbar />
                    {/* / alert container*/}
                    <ToastContainer />
                </div>

            </div>
        </>

    )
}

export default SignUp
