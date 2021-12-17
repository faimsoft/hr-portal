import React, { useState, useEffect } from 'react'
import { Typography, TablePagination, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Checkbox, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse, Container } from "@material-ui/core";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import candidatesview from './view';
import { LgButton } from '../../../views/button';





const useStyles = makeStyles((theme) => ({
    root: {

        width: "75vw",
        paddingTop: theme.spacing(5),

    },
    Create: {
        paddingLeft: theme.spacing(),
        display: 'flex'

    }

}));
function Formdata() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    const loadUsers = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);

    };

    useEffect(() => {
        loadUsers();
        console.warn("users")
    }, [])

    const onChangePage = (event, nextPage) => {
        setPage(nextPage);
    }

    const onChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
    }

    const [currency, setCurrency] = React.useState('EUR');

    const clickhandleChange = (e) => {
        setCurrency(e.target.value);
    };
    return (
        <>
            <Grid container spacing={2}    >
                <div style={{ flexGrow: 1 }}></div>
                <Grid item xs={2}  >
                    <TextField
                        style={{
                            width: '249px',

                        }}
                        id="Zip Code"
                        select
                        size='small'
                        label="Zip Code"
                        value={currency}
                        onChange={clickhandleChange}
                        SelectProps={{
                            native: true,
                        }}
                    >  {countries.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                    </TextField>

                </Grid>
                <Grid item xs={2}  >
                    <TextField
                        style={{
                            width: '249px',

                        }}
                        id="Zip Code"
                        size='small'
                        select
                        label="Zip Code"
                        value={currency}
                        onChange={clickhandleChange}
                        SelectProps={{
                            native: true,
                        }}
                    >  {countries.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                    </TextField>

                </Grid>

                <Grid item xs={2} component={Link} to='./CreatCandidate' >
                    <LgButton select lagbutton={"Create a candidate"} />
                </Grid>
            </Grid>
            <Container className={classes.root} >

                <TableContainer component={Paper} >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell><Button variant="text"><Checkbox {...label} /></Button></TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Associated Job</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Sourced from</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell align="center">
                                    <Button variant="text" ><EditIcon color="primary" /></Button>
                                    <Button variant="text"><DeleteIcon color="error" /></Button>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((users) => (
                                <TableRow >
                                    <TableCell><Button variant="text"><Checkbox {...label} /></Button></TableCell>
                                    <TableCell variant="h3">{users.name}</TableCell>
                                    <TableCell>{users.email}</TableCell>
                                    <TableCell>{users.website}</TableCell>
                                    <TableCell>{users.company.name}</TableCell>
                                    <TableCell>{users.phone}</TableCell>
                                    <TableCell align="center">
                                        <Button variant="text" ><EditIcon color="primary" /></Button>
                                        <Button variant="text"><DeleteIcon color="error" /></Button>
                                    </TableCell>
                                    {/* <TableCell>Sameer</TableCell> */}
                                </TableRow>

                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>

                <TableContainer component={Paper}>
                    <TablePagination
                        rowsPerPageOptions={[3, 5, 8, 10, 12, 15]}
                        count={users.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={onChangePage}
                        onChangeRowsPerPage={onChangeRowsPerPage}
                    />
                </TableContainer>

            </Container>
            <candidatesview />
        </>
    )
}

export default Formdata



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





// function Cdsingleview() {
//     const [currency, setCurrency] = React.useState('Afghanistan');

//     const clickhandleChange = (value) => {
//         console.log('select', value);
//         setCurrency(value)
//     };


//     return (
//         SelectOption('Countries', currency, countries, clickhandleChange)
//     )
// }

// export default Cdsingleview


// const countries = [
//     { code: 'AD', label: 'Andorra', phone: '376' },
//     {
//         code: 'AE',
//         label: 'United Arab Emirates',
//         phone: '971',
//     },
//     { code: 'AF', label: 'Afghanistan', phone: '93' },
//     {
//         code: 'AG',
//         label: 'Antigua and Barbuda',
//         phone: '1-268',
//     },
//     { code: 'AI', label: 'Anguilla', phone: '1-264' },
//     { code: 'AL', label: 'Albania', phone: '355' },
//     { code: 'AM', label: 'Armenia', phone: '374' },
//     { code: 'AO', label: 'Angola', phone: '244' },
//     { code: 'AQ', label: 'Antarctica', phone: '672' },
//     { code: 'AR', label: 'Argentina', phone: '54' },
//     { code: 'AS', label: 'American Samoa', phone: '1-684' },
//     { code: 'AT', label: 'Austria', phone: '43' },
//     {
//         code: 'AU',
//         label: 'Australia',
//         phone: '61',
//         suggested: true,
//     },
//     { code: 'AW', label: 'Aruba', phone: '297' },
//     { code: 'AX', label: 'Alland Islands', phone: '358' },
//     { code: 'AZ', label: 'Azerbaijan', phone: '994' },
//     {
//         code: 'BA',
//         label: 'Bosnia and Herzegovina',
//         phone: '387',
//     },
// ]