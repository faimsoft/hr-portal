import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  Toolbar,Container,TablePagination, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Checkbox,} from "@material-ui/core";
import { Link } from 'react-router-dom';
import Sidebar from '../../SideBar/sidebar'
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles, } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';



// import './FirstElement.css';
// import data from './mock-data.json';

const useStyles = makeStyles((theme) => ({
   box:{
       paddingLeft:250,
       paddingRight:10
   },
   root: {

        width: "75vw",
        paddingTop: theme.spacing(5),

    },
    Create: {
        paddingLeft: theme.spacing(),
        display: 'flex'

    }

}))

const table_sample = () => {
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

    return (
        <>
        <Sidebar/>
        <div className={classes.box}>
             <Container className={classes.Create} >
                <div style={{ flexGrow: 1 }}>

                </div>
                <Button color="primary" component={Link} to='/CreatePage' variant="contained" disableElevation>
                    Create a candidate
                </Button>

            </Container>
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
                                    <TableCell><Button variant="text"><EditIcon color="primary" /></Button></TableCell>
                                    <TableCell><Button variant="text"><DeleteIcon color="error" /></Button></TableCell>
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
            </div>
    </>
    )
}


export default table_sample

