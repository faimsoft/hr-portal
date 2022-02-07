import React, { useState, useEffect } from 'react'
import { useHistory, Redirect, useLocation, Link } from 'react-router-dom'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, Paper, Button, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';
import { isAuthenticated } from '../../../utils/session'

const useStyles = makeStyles((theme) => ({

    Create: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        }
    },

}));

export default function StateTextFields() {

    if(!isAuthenticated()) {
        return <Redirect to='/Login'  />
      }

    const classes = useStyles();
    const history = useHistory();

    const [currency, setCurrency] = useState('EUR');

    const clickhandleChange = (e) => {
        setCurrency(e.target.value);
    };

    function handleClick() {
        history.push("/CandiDR");
    }

    // data 
    const [users, setUsers] = useState('');

    const [name, setName] = useState();
    const [last, setLast] = useState();
    const [email, SetEmail] = useState();
    const [mobile, setMobile] = useState();
    const [altemail, setAltEmail] = useState();
    const [altmobile, setAltMobile] = useState();
    const [address, setAddress] = useState();

    const handleUserSubmit = (e) => {
        e.preventDefault();
        let user = {
            name,
            last,
            email,
            mobile,
            altemail,
            altmobile,
            address
            // password
        }
        setUsers([...users, user])
        setName('');
        setLast('');
        SetEmail('');
        setMobile('');
        setAltEmail('');
        setAltMobile('');
        setAddress('');

        // setPassword('');
    };

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users])
    // console.warn(users)
    return (
        <>

            <Grid container spacing={2}  >
                <Grid item xs={10}  >

                    <div style={{ marginLeft: '10px' }}>
                        <Typography variant="h5">
                            <Button variant="text" ><ArrowBackIcon color="primary"
                                button
                                style={{ fontSize: '30px' }} onClick={handleClick}
                            /></Button>
                            Create a candidate</Typography>
                    </div>
                </Grid>
                <Grid item xs={2}  >
                    <Button color="primary" component={Link} to='/CandiDR' variant="contained" disableElevation>
                        Create
                    </Button>
                </Grid>
            </Grid>
            <div className={classes.root}>
                <form onSubmit={handleUserSubmit}>

                    <Box component={Paper} style={{ padding: " 50px" }}>
                        <Grid container spacing={2}  >
                            <Grid item xs={7}   >
                                <Typography style={{ marginLeft: "25px" }} variant="h4"> Personal Details</Typography>

                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 3, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        size='small'
                                        id="outlined-First Name*"
                                        label="First Name*"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                    <TextField
                                        size='small'
                                        id="outlined-Last Name*"
                                        label="Last Name*"
                                        value={last}
                                        onChange={(e) => setLast(e.target.value)}
                                    />
                                </Box>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 3, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        size='small'
                                        id="outlined-First Email*"
                                        label="Email*"
                                        value={email}
                                        onChange={(e) => SetEmail(e.target.value)} />
                                    <TextField
                                        size='small'
                                        id="outlined-Mobile Number*"
                                        label="Mobile Number*"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}

                                    />
                                </Box>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 3, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        size='small'
                                        id="Alternate Email..."
                                        label="Alternate Email..."
                                        value={altemail}
                                        onChange={(e) => setAltEmail(e.target.value)} />
                                    <TextField
                                        size='small'
                                        id="Alternate Mobile Number..."
                                        label="Alternate Mobile Number..."
                                        value={altmobile}
                                        onChange={(e) => setAltMobile(e.target.value)}
                                    />
                                </Box>
                                {/* State */}
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 3, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >

                                    <TextField
                                        id="Type street address"
                                        label="Type street address"
                                        size='small'
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}

                                    />
                                    <TextField
                                        size='small'
                                        id="Choose country"
                                        select
                                        label="Choose cuntry"
                                        value={currency}
                                        onChange={clickhandleChange}
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >
                                        {countries.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </Box>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 3, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        size='small'
                                        id="Select state..."
                                        select
                                        label="Select state..."
                                        value={currency}
                                        onChange={clickhandleChange}
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >
                                        {countries.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                    <TextField
                                        size='small'
                                        id="City..."
                                        select
                                        label="City..."
                                        value={currency}
                                        onChange={clickhandleChange}
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >
                                        {countries.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </Box>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div style={{ marginTop: "10px", marginLeft: "18px" }}>

                                        <Box>
                                            <TextField
                                                size='small'
                                                id="Zip Code"
                                                select
                                                label="Zip Code"
                                                value={currency}
                                                onChange={clickhandleChange}
                                                SelectProps={{
                                                    native: true,
                                                }}
                                            >
                                                {countries.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                        </Box>
                                    </div>

                                </Box>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div style={{ marginTop: "10px", marginLeft: "18px" }}>

                                        <TextField
                                            size='small'
                                            id="Select Degree"
                                            select
                                            label="Select Degree"
                                            value={currency}
                                            onChange={clickhandleChange}
                                            SelectProps={{
                                                native: true,
                                            }}
                                        >
                                            {countries.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                        <TextField
                                            size='small'
                                            id="Total Experience"
                                            select
                                            label="Total Experience"
                                            value={currency}
                                            onChange={clickhandleChange}
                                            SelectProps={{
                                                native: true,
                                            }}
                                        >
                                            {countries.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>

                                </Box>
                                <div  >
                                    <Typography variant="h4" style={{ paddingTop: '20px', marginLeft: "25px" }} > Education Details</Typography>
                                </div>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 3, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >

                                    <TextField
                                        size='small'
                                        id="Search for the country name..."
                                        label="Search for the country name..."
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                    <TextField
                                        size='small'
                                        id="Search for the city name..."
                                        label="Search for the city name..."
                                    />
                                </Box>
                                <div style={{ marginTop: "10px", marginLeft: "18px" }}>

                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <div className={classes.small}>

                                            <TextField
                                                size='small'
                                                id="From Month"
                                                select
                                                label="From Month"
                                                value={currency}
                                                onChange={clickhandleChange}
                                                SelectProps={{
                                                    native: true,
                                                }}
                                            >
                                                {countries.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                            <TextField
                                                size='small'
                                                id="From Year"
                                                select
                                                label="From Year"
                                                value={currency}
                                                onChange={clickhandleChange}
                                                SelectProps={{
                                                    native: true,
                                                }}
                                            >
                                                {countries.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                            <TextField
                                                size='small'
                                                id="To Month"
                                                select
                                                label="To Month"
                                                value={currency}
                                                onChange={clickhandleChange}
                                                SelectProps={{
                                                    native: true,
                                                }}
                                            >
                                                {countries.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                            <TextField
                                                size='small'
                                                id="To Year"
                                                select
                                                label="To Year"
                                                value={currency}
                                                onChange={clickhandleChange}
                                                SelectProps={{
                                                    native: true,
                                                }}
                                            >
                                                {countries.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                        </div>

                                    </Box>
                                </div>
                            </Grid>
                            {/* <Grid item xs={1} /> */}
                            <hr />
                            <Grid item xs={4}  >
                                <Typography variant="h6" style={{ marginLeft: "25px" }}> Assign to a job</Typography>

                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 3, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div className={classes.small}>


                                        <TextField
                                            size='small'
                                            id="Select Degree"
                                            select
                                            label="Select Degree"
                                            value={currency}
                                            onChange={clickhandleChange}
                                            SelectProps={{
                                                native: true,
                                            }}
                                        >
                                            {countries.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>

                                    </div>

                                </Box>

                            </Grid>
                        </Grid>
                        <br />
                        <Button color="primary" type="submit" style={{ marginLeft: '50%', }} variant="contained" disableElevation>
                            Create From
                        </Button>
                    </Box>

                </form>

            </div>
        </>
    );
}


const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
        code: 'AE',
        label: 'United Arab Emirates',
        phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
        code: 'AG',
        label: 'Antigua and Barbuda',
        phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
        code: 'AU',
        label: 'Australia',
        phone: '61',
        suggested: true,
    },
    { code: 'AW', label: 'Aruba', phone: '297' },
    { code: 'AX', label: 'Alland Islands', phone: '358' },
    { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    {
        code: 'BA',
        label: 'Bosnia and Herzegovina',
        phone: '387',
    },
]