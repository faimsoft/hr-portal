import React, { useState, useEffect } from 'react'
import Sidebar from '../../SideBar/sidebar'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Button from '@mui/material/Button';
// import FormHelperText from "@mui/material/FormHelperText";
// import { SmButton } from '../../../../views/button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TablePagination,Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Checkbox, Button, MenuItem, } from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles((theme) => ({
   SideSpace:{
       paddingLeft:250,
       paddingRight:20
    },
    activebtn: {
        width:120
    },
  boxsize: {
    padding: 10,
    marginRight: 150,
    
  },
  createbtn: {
    marginTop:8
  },
  tablewidth: {
    width:"100"
  }
    
}))





const UserList = () => {
    const classes = useStyles();
    const [Active, setActive] = React.useState('');
  const [sort, setsort] = React.useState('')
  const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleChange = (event) => {
    setActive(event.target.value);
    };
    
    const sortby = (event) => {
    setsort(event.target.value);
  };
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
        <div>
            <Sidebar />
            <div className={classes.SideSpace}>
            <Box  className={classes.boxsize}>
                <div align="right">
                     <Box>
                         <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          value={Active}
                          onChange={handleChange}
                          size="small" 
                          displayEmpty
                        >
                        <MenuItem value="">
                        <em>Active</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                       <Select
                        value={sort}
                        onChange={sortby}
                        size="small" 
                        displayEmpty
                      >
                        <MenuItem value="">
                        <em>Sort by low to high</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                       </Select>
                    </FormControl >
                    <Button variant="contained" size="medium" color='primary' className={classes.createbtn} component={Link} to="/CreateUser"> Create </Button>
                    <hr />
                     </Box>
                    <Box component={Paper}>
                      {/* table */}
                      <TableContainer component={Paper} className={classes.tablewidth}>
                          <Table >
                              <TableHead>
                                  <TableRow>
                                      <TableCell><Button variant="text"><Checkbox {...label} /></Button></TableCell>
                                      <TableCell>Name</TableCell>
                                      <TableCell>Latest Job Applied</TableCell>
                                      <TableCell>Status</TableCell>
                                      <TableCell>Sourced from</TableCell>
                                      <TableCell>Phone</TableCell>
                                      <TableCell align='center'>Action</TableCell>
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
                                            <TableCell>
                                              <Button variant="text" component={Link} to='/EditUser'><EditIcon color="primary" /></Button>
                                              <Button variant="text"><DeleteIcon color="error" /></Button>
                                            </TableCell>
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
                    </Box> 
                </div>
            </Box>
            </div>
        </div>
    )
}

export default UserList
