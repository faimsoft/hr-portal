import React, { useState, useEffect } from 'react'
import { Container,TablePagination, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Checkbox,} from "@material-ui/core";
import { Link } from 'react-router-dom';
import Sidebar from '../../SideBar/sidebar';
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

const Aproval = () => {
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
             
            <Container className={classes.root} >
                <TableContainer component={Paper} >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" ><Button variant="text"><Checkbox {...label} /></Button>Name </TableCell>
                                    {/* <TableCell color="primary"  align="left" > </TableCell> */}
                                    <TableCell align="left"> Email </TableCell>
                                    <TableCell align="left"> phone </TableCell>
                                    <TableCell align="left"> Department </TableCell>
                                    <TableCell align="center"> Action </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                <TableRow >
                                    <TableCell><Button variant="text"><Checkbox {...label} /></Button> Google firlds</TableCell>
                                    {/* <TableCell variant="h3"  align="left"></TableCell> */}
                                    <TableCell variant="h3" align="left" >aaqil@123</TableCell>
                                    <TableCell variant="h3" align="left" >9876543210</TableCell>
                                    <TableCell variant="h3" align="left" >Commerce Department</TableCell>
                                    <TableCell align="center" >
                                        <Button variant="text" variant="contained">Approved</Button>
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

export default Aproval

