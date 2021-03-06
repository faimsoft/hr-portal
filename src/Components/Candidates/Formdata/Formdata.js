import React, { useState, useEffect } from 'react'
import { TablePagination, Paper, Table, Box, TableBody, TableContainer, TableHead, TableRow, TableCell, Checkbox, Toolbar, Button, } from "@material-ui/core";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';




// const loadUsers = async () => {
//     const res = await axios.get("http://192.168.1.197:8080/common/data");
//     setUsers(res.data);
// };
// useEffect(() => {
//     loadUsers();

// }, [])
// console.warn('users', users)
// const [users, setUsers] = useState("");



const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        width: "1279px",
        height: " 900px",
        // height: "106px",
        left: "200px",
        // left: " 958px",
        background: "#F9F9F9;",
        border: "1px solid #D5D5D5",
        " box- sizing": "border- box",
        "border - radius": "5px",
        marginTop: "20px",
    },
    Create: {
        paddingLeft: theme.spacing(),
        display: 'flex'

    }

}));
function CdList() {
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

            <Grid container spacing={2}   >
                <div style={{ flexGrow: 1, }}></div>
                <Grid item xs={2}   >
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

                <Grid item xs={2}   >
                    <Button color="primary" component={Link} to='/CreatCandidate' variant="contained" disableElevation>
                        Create a candidate
                    </Button>
                </Grid>
            </Grid>
            <Box className={classes.root} >

                <TableContainer component={Paper}  >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell><Button variant="text"><Checkbox {...label} /></Button></TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Latest Job Applied</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Sourced from</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell><Button variant="text" ><EditIcon color="primary" /></Button></TableCell>
                                <TableCell><Button variant="text" ><DeleteIcon color="error" /></Button></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
                                <TableRow >
                                    <TableCell><Button variant="text"><Checkbox {...label} /></Button></TableCell>
                                    <TableCell variant="h3">{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.website}</TableCell>
                                    <TableCell>{user.company.name}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell><Button variant="text" ><EditIcon color="primary" /></Button></TableCell>
                                    <TableCell><Button variant="text" ><DeleteIcon color="error" /></Button></TableCell>
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
                <Toolbar />
            </Box>
        </>
    )
}

export default CdList




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