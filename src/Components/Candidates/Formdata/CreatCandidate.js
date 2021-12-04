import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, FormControl, InputLabel, BootstrapInput, TablePagination, Paper, TCheckbox, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse, Container } from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

export default function StateTextFields() {
    const [name, setName] = React.useState('Cat in the Hat');
    const handleChange = (event) => {
        setName(event.target.value);
    };
    const [currency, setCurrency] = React.useState('EUR');

    const clickhandleChange = (e) => {
        setCurrency(e.target.value);
    };


    return (
        <Container component={Paper}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 5, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-First Name*"
                    label="First Name*"
                    value={name}
                    onChange={handleChange}
                />
                <TextField
                    id="outlined-Last Name*"
                    label="Last Name*"
                    defaultValue="Last Name"
                />
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 5, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-First Email*"
                    label="Email*"
                    value={name}
                    onChange={handleChange}
                />
                <TextField
                    id="outlined-Mobile Number*"
                    label="Mobile Number*"
                    defaultValue="Mobile Number"
                />
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 5, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-Alternate Email"
                    label="Alternate Email"
                    value={name}
                    onChange={handleChange}
                />
                <TextField
                    id="Alternate Mobile Number"
                    label="Alternate Mobile Number"
                    defaultValue="Alternate Mobile Number"
                />
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 5, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-Alternate Email"
                    label="Alternate Email"
                    value={name}
                    onChange={handleChange}
                />
                <TextField
                    id="Alternate Mobile Number"
                    label="Alternate Mobile Number"
                    defaultValue="Alternate Mobile Number"
                />


            </Box>
            {/* State */}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 5, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div component="form"
                    sx={{
                        '& > :not(style)': { m: 5, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off">

                    <TextField
                        id="Alternate Mobile Number"
                        select
                        label="Alternate Mobile Number"
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
                        id="Alternate Mobile Number"
                        select
                        label="Alternate Mobile Number"
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


        </Container>
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