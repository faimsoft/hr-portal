import React, { useState, useEffect } from 'react'
import { TablePagination, Typography, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Checkbox, Toolbar, Button, Box } from "@material-ui/core";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";
// modal
import { Modal } from '@material-ui/core';



// icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// text
import { TextFrmkHead } from '../../views/text';








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

    },


}));


// dot modal style
const style = {
    position: 'absolute',
    top: '32%',
    left: '79%',
    transform: 'translate(-50%, -50%)',
    width: 150,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};
// btn modal style
const modal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 872,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 5,
}

function Joblist1() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    //  button modal
    const [btopen, setBtOpen] = useState(false);
    const handleBtOpen = () => setBtOpen(true);
    const handleBtClose = () => setBtOpen(false);


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


    const history = useHistory();
    function handleClick() {
        history.push("/JobView");
    }

    return (
        <>

            <Grid container spacing={2}    >
                <Grid item xs={6} style={{ marginLeft: "180px" }} >
                    <Typography variant="h5">
                        <Button variant="text" ><ArrowBackIcon color="primary"
                            button
                            style={{ fontSize: '30px' }} onClick={handleClick}
                        /></Button>
                        Assistant Professor - Mechanical Engineering
                    </Typography>
                </Grid>
                <Grid item xs={2} style={{ marginLeft: "65px" }} >
                    <TextField
                        style={{
                            width: '249px',

                        }}
                        id="Zip Code"
                        select
                        size='small'
                        label="Sort New to Old"
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

                <Grid item xs={2} style={{ marginLeft: "10px" }}>
                    <Button style={{ background: "#109CF1" }} component={Link} onClick={handleBtOpen} variant="contained" disableElevation>
                        Assign a candidate
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


            {/* button modal */}
            <Modal
                open={btopen}
                onClose={handleBtClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modal} >
                    <div >
                        {/* <TextHead3 text3={'Hiring Status'} /> */}
                        <Typography variant="h4" style={{ textAlign: "center", }}>
                            Assign a candidate to this job
                        </Typography>
                    </div>
                    <Grid container spacing={2} style={{ marginTop: "40px", paddingRight: "15px" }}  >
                        <Grid item xs={3}  >
                            <TextFrmkHead frmtext={'Search for Candidate'} />
                        </Grid>
                        <Grid item xs={8}  >
                            <Box>
                                <TextField size='small' fullWidth label="Type job title ..." id="fullWidth" />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} style={{ marginTop: "20px", paddingRight: "15px" }}  >
                        <Grid item xs={3}  >
                            <TextFrmkHead frmtext={'Hiring Stage'} />
                        </Grid>
                        <Grid item xs={8}  >
                            <Box>
                                <TextField size='small' fullWidth label="Choose the hiring stage" id="fullWidth" />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} style={{ marginTop: "20px", paddingRight: "15px" }}  >
                        <Grid item xs={3}  >
                            <TextFrmkHead frmtext={'Notes'} />
                        </Grid>
                        <Grid item xs={8}  >
                            <Box>
                                <TextField size='small' fullWidth id="fullWidth" />
                            </Box>
                        </Grid>
                    </Grid>
                    <div style={{ marginLeft: "43%", marginTop: "50px", width: "259px" }}>
                        <Button style={{ width: "259px" }} variant="contained" color="primary">Add</Button>
                    </div>


                </Box>
            </Modal>
        </>
    )
}

export default Joblist1




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