import React, { useState, useEffect } from 'react'
import {  Toolbar,Container,TablePagination, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Checkbox,} from "@material-ui/core";
import { Link } from 'react-router-dom';
import Sidebar from '../../SideBar/sidebar'
import { makeStyles, } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';



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

const Pipelines = () => {
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
        <div className={classes.box}>
             <Container className={classes.Create} >
                <div style={{ flexGrow: 1 }}>
                </div>
                {/* <Button color="primary" component={Link} onClick={handleOpen} variant="contained" disableElevation>
                    Create
                </Button> */}

            </Container>
            <Container className={classes.root} >
                 <TableContainer component={Paper} >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell><Button variant="text"><Checkbox {...label} /></Button>Name</TableCell>
                                <TableCell  align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                <TableRow  >
                                    <TableCell ><Button variant="text"><Checkbox {...label} /></Button>Admin Placement</TableCell>
                                    <TableCell align="center">
                                        <Button variant="text" component={Link} to='/PipelineCreate' ><EditIcon color="primary" /></Button>
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

            {/* Modal */}
             <div>
          </div>
    </>

    )
}

export default Pipelines

