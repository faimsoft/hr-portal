// import React, { useState, useEffect } from 'react'
// import { Typography, TablePagination, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Checkbox, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse, Container } from "@material-ui/core";
// import axios from 'axios';
// import { makeStyles } from "@material-ui/core/styles";
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Link } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';

// const useStyles = makeStyles((theme) => ({
//     root: {

//         position: "absolute",
//         width: "150px",
//         height: "35px",
//         left: "440px",
//         top: "930px",

//         background: "#FFFFFF",
//         border: "0.5px solid #BFBFBF",
//         "box- sizing": " border- box",
//         "border - radius": "5px",
//     },

// }))


// function Table() {
//     const classes = useStyles(heading, name, email, website, company, phone);
//     const [page, setPage] = useState(0);
//     const [rowsPerPage, setRowsPerPage] = useState(5);

//     const onChangeRowsPerPage = (event) => {
//         setRowsPerPage(event.target.value);
//     }
//     const onChangePage = (event, nextPage) => {
//         setPage(nextPage);
//     }

//     return (
//         <Container className={classes.root} >

//             <TableContainer component={Paper} >
//                 <Table >
//                     <TableHead>
//                         <TableRow>
//                             {/* <TableCell><Button variant="text">{icon}</Button></TableCell> */}
//                             <TableCell>{heading}</TableCell>

//                             <TableCell><Button variant="text" ><EditIcon color="primary" /></Button></TableCell>
//                             <TableCell><Button variant="text" ><DeleteIcon color="error" /></Button></TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((users) => (
//                             <TableRow >
//                                 <TableCell>{users.name}</TableCell>
//                                 <TableCell variant="h3">{users.email }</TableCell>
//                                 <TableCell>{users.website }</TableCell>
//                                 <TableCell>{users.company.name}</TableCell>
//                                 <TableCell>{users.phone}</TableCell>

//                                 {/* <TableCell>Sameer</TableCell> */}
//                             </TableRow>

//                         ))}

//                     </TableBody>
//                 </Table>
//             </TableContainer>

//             {<TableContainer component={Paper}>
//                 <TablePagination
//                     rowsPerPageOptions={[3, 5, 8, 10, 12, 15]}
//                     count={users.length}
//                     rowsPerPage={rowsPerPage}
//                     page={page}
//                     onChangePage={onChangePage}
//                     onChangeRowsPerPage={onChangeRowsPerPage}
//                 />
//             </TableContainer> 

//         </Container>
//     )
// }

// export default Table
