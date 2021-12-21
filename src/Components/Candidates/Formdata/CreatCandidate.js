import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, FormControl, InputLabel, BootstrapInput, TablePagination, Paper, TCheckbox, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse, Container } from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";






const useStyles = makeStyles((theme) => ({
    paper: {

        // width: "75vw",


    },
    small: {
        // paddingLeft: theme.spacing(2),

    },
    root: {
        paddingTop: theme.spacing(5),
    },
    Create: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        }
    },

}));

export default function StateTextFields() {
    const [name, setName] = React.useState();
    const classes = useStyles();
    const history = useHistory();
    const handleChange = (event) => {
        setName(event.target.value);
    };
    const [currency, setCurrency] = React.useState('EUR');

    const clickhandleChange = (e) => {
        setCurrency(e.target.value);
    };

    function handleClick() {
        history.push("/Cdsingleview");
    }

    return (
        <>

            <Grid container spacing={2}  >
                <Grid item xs={10}  >

                    <div style={{ marginLeft: '10px' }}>
                        <Typography variant="h4">
                            <Button variant="text" ><ArrowBackIcon color="primary"
                                button
                                style={{ fontSize: '30px' }} onClick={handleClick}
                            /></Button>
                            Create a candidate</Typography>
                    </div>
                </Grid>
                <Grid item xs={2}  >
                    <Button color="primary" component={Link} to='/CdList' variant="contained" disableElevation>
                        Create
                    </Button>
                </Grid>
            </Grid>
            <div className={classes.root}>

                <Box component={Paper} style={{ padding: " 50px" }}>
                    <Grid container spacing={2}  >
                        <Grid item xs={7}   >
                            <div>
                                <Typography variant="h3" style={{ paddingTop: '20px', }}> Personal Details</Typography>

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
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        size='small'
                                        id="outlined-Last Name*"
                                        label="Last Name*"
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
                                        value={name}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        size='small'
                                        id="outlined-Mobile Number*"
                                        label="Mobile Number*"
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
                                        id="outlined-Enter mobile email..."
                                        label="Enter mobile email..."
                                        value={name}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        size='small'
                                        id="Enter mobile number..."
                                        label="Enter mobile number..."
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
                                    <div className={classes.small}>
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
                                    <Typography variant="h3" style={{ paddingTop: '20px', }}> Education Details</Typography>
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
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        size='small'
                                        id="Search for the city name..."
                                        label="Search for the city name..."
                                    />
                                </Box>
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
                            <Typography variant="h6" style={{ marginLeft: "15px" }}> Assign to a job</Typography>

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
                </Box>

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