import React, { useState, useEffect } from 'react'
import { Container,TablePagination, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Checkbox,} from "@material-ui/core";
import { Link } from 'react-router-dom';
import Sidebar from '../SideBar/sidebar'
import { makeStyles, } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles((theme) => ({
   box:{
       paddingLeft:250,
       paddingRight:10
   },
   root: {

        width: "85vw",
        paddingTop: theme.spacing(5),

    },
    Create: {
        paddingLeft: theme.spacing(),
        display: 'flex'

    }

}))

const Templates = () => {
               const classes = useStyles();
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const onChangePage = (event, nextPage) => {
        setPage(nextPage);
    }

    return (
        <>
        <Sidebar/>
        <div className={classes.box} align="center">
             <Container className={classes.Create} >
                <div style={{ flexGrow: 1 }}>
                </div>
                <Button color="primary" component={Link} to='/CreateEmailTemplate' variant="contained" disableElevation>
                    Create
                </Button>
                            {/* table */}
            </Container>
            <Container className={classes.root} >
                <TableContainer component={Paper} >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" ><Button variant="text"><Checkbox {...label} /></Button></TableCell>
                                    <TableCell color="primary"  align="left" > Name</TableCell>
                                    <TableCell align="left"> Subject </TableCell>
                                    <TableCell align="left"> Category </TableCell>
                                    <TableCell align="left"> Typee </TableCell>
                                    <TableCell align="center"> Action </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                <TableRow >
                                    <TableCell><Button variant="text"><Checkbox {...label} /></Button></TableCell>
                                    <TableCell variant="h3"  align="left">Invite for video call</TableCell>
                                    <TableCell variant="h3" align="left" >Video call details</TableCell>
                                    <TableCell variant="h3" align="left" >Job Offer</TableCell>
                                    <TableCell variant="h3" align="left" >Candidate</TableCell>
                                    <TableCell align="center" >
                                        <Button variant="text" ><EditIcon color="primary" /></Button>
                                        <Button variant="text"><DeleteIcon color="error" /></Button>
                                    </TableCell>
                                </TableRow>
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
                    />
                </TableContainer>
            </Container>
            </div>
    </>
    )
}

export default Templates