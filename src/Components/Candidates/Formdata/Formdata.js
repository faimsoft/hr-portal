import React, { useState, useEffect } from 'react'
import { Typography, TablePagination, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Checkbox, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse, Container } from "@material-ui/core";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';




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
    }, [])

    const onChangePage = (event, nextPage) => {
        setPage(nextPage);
    }

    const onChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
    }
    return (
        <>
            <Container className={classes.Create} >
                <div style={{ flexGrow: 1 }}>
                </div>
                <Button color="primary" component={Link} to='/CreatCandidate' variant="contained" disableElevation>
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
        </>
    )
}

export default Formdata
