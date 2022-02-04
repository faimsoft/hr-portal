import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Toolbar, Typography } from "@material-ui/core"
import Grid from '@mui/material/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import pic from '../..//Media/images/SignIntexture.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { apiPostUnsecure, signInApi } from '../../../utility/apicopy';
import { saveUser } from '../../../utility/session';
// alert npm 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useStyles = makeStyles((theme) => ({
    pagePadding: {
        padding: 10,
        marginTop: 20
    },
    imageStyle: {
        height: 650,
        width: 800,
        borderRadius: 26,
    },
    loginDesign: {
        paddingLeft: 300,
        paddingTop: 180,
    },
    signinBtn: {
        width: 300,
        height: 30
    }

}))


const Login = () => {
    const classes = useStyles();

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const history = useHistory();
    // useEffect(() => {
    //     if (localStorage.getItem('user-info')) {
    //         history.push("/login")
    //     }
    // },[])
    async function login() {

        const data = { username, password };
        console.warn(data)
        apiPostUnsecure(signInApi, data,
            (response) => {
                saveUser(response)
                history.push('/JobView');

            },
            (errorMsg) => {
                toast.error(errorMsg, {
                    position: 'top-center'
                })
            }
        )
        history.push("/")
    }
    return (
        < >
            <div className={classes.pagePadding}  >
                <div>
                    <Box component={Paper} className={classes.pagePadding}>
                        <Button component={Link} to="/" align="left" color='primary' fontSize="large"  ><ArrowBackIcon /></Button>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={6} className={classes.loginDesign} >
                                <Typography variant="h5" color="primary" style={{ fontWeight: 600 }}> Welcome To Edjobster</Typography>
                                <Typography variant="text" > Enter your Email And Pasword To Sign in</Typography>
                                <Toolbar />
                                <Typography variant="text" > Email</Typography>
                                <br />
                                <TextField id="outlined-basic" svariant="outlined" size="small" className={classes.signinBtn} onChange={(e) => setusername(e.target.value)} />
                                <br />
                                <br />
                                <Typography variant="text"> Password</Typography>
                                <br />
                                <TextField type="password" id="outlined-basic" svariant="outlined" size="small" className={classes.signinBtn} onChange={(e) => setpassword(e.target.value)} />
                                <br />
                                <br />
                                <br />
                                <Button variant="contained" className={classes.signinBtn} onClick={login}>
                                    SIGN IN
                                </Button>
                                <br />
                                <Typography variant="text" >
                                    Don't have an account?
                                    <Button variant="text" component={Link} to="/SignUp">Sign Up</Button>
                                </Typography>
                            </Grid>
                            <Grid xs={6}  >
                                <img
                                    className={classes.imageStyle}
                                    src={pic}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    {/* / alert container*/}
                    <ToastContainer />
                </div>
            </div>
        </>

    )
}

export default Login
