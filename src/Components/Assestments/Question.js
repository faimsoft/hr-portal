import React from 'react'
import Box from '@mui/material/Box';
import { Paper } from '@material-ui/core';
import { ClassNames } from '@emotion/react';
import { Typography, FormControl, InputLabel, BootstrapInput, TablePagination, TCheckbox, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { TextFrmkHead } from '../../views/text';

// icon
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';






const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        width: "628px",
        height: "295px",
        marginRight: "10px"
    }

}));


function Question() {
    const classes = useStyles();

    return (
        <div >
            <Box className={classes.root} component={Paper}>
                <div >
                    {/* <TextHead3 text3={'Hiring Status'} /> */}

                    <Grid container spacing={2} style={{ marginTop: "1px", marginLeft: "10px" }}  >
                        <Grid item xs={10}  >
                            <Typography variant="h5" style={{ textAlign: "center", }}>
                                Question 1: Multiple Choice Question
                            </Typography>
                        </Grid>
                        <Grid item xs={2}  >
                            <Box>
                                < CloseIcon style={{ marginLeft: '30px', color: " #FF5F5F", }} />
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <Grid container spacing={2} style={{ marginTop: "10px", marginLeft: "10px" }}  >
                    <Grid item xs={2}  >
                        <TextFrmkHead frmtext={'Question'} />
                    </Grid>
                    <Grid item xs={9}  >
                        <Box>
                            <TextField size='small' fullWidth label="Type job title ..." id="fullWidth" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: "5px", marginLeft: "10px" }}  >
                    <Grid item xs={2}  >
                        <TextFrmkHead frmtext={'Option 1:'} />
                    </Grid>
                    <Grid item xs={8}  >
                        <Box>
                            <TextField size='small' fullWidth label="Choose the hiring stage" id="fullWidth" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: "5px", marginLeft: "10px" }}  >
                    <Grid item xs={2}  >
                        <TextFrmkHead frmtext={'Option 1:'} />
                    </Grid>
                    <Grid item xs={8}  >
                        <Box>
                            <TextField size='small' fullWidth id="fullWidth" />
                        </Box>
                    </Grid>
                    <Grid item xs={2} style={{ marginTop: "px" }} variant="text" >
                        <Button variant="text" >
                            <AddIcon button />
                        </Button>
                    </Grid>
                </Grid>
                <div style={{ marginLeft: "50%", marginTop: "10px", marginBottom: "20px" }}>
                    <Button style={{ width: "91px", }} variant="contained" color="primary">Add</Button>
                </div>
            </Box>

        </div>
    )
}

export default Question


export function Question1() {
    const classes = useStyles();

    return (
        <div >
            <Box className={classes.root} component={Paper}>
                <div >
                    {/* <TextHead3 text3={'Hiring Status'} /> */}

                    <Grid container spacing={2} style={{ marginTop: "1px", marginLeft: "10px" }}  >
                        <Grid item xs={10}  >
                            <Typography variant="h5" style={{ textAlign: "center", }}>
                                Question 1: Multiple Checkboxes
                            </Typography>
                        </Grid>
                        <Grid item xs={2}  >
                            <Box>
                                < CloseIcon style={{ marginLeft: '30px', color: " #FF5F5F", }} />
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <Grid container spacing={2} style={{ marginTop: "10px", marginLeft: "10px" }}  >
                    <Grid item xs={2}  >
                        <TextFrmkHead frmtext={'Question'} />
                    </Grid>
                    <Grid item xs={9}  >
                        <Box>
                            <TextField size='small' fullWidth label="Type job title ..." id="fullWidth" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: "5px", marginLeft: "10px" }}  >
                    <Grid item xs={2}  >
                        <TextFrmkHead frmtext={'Option 1:'} />
                    </Grid>
                    <Grid item xs={8}  >
                        <Box>
                            <TextField size='small' fullWidth label="Choose the hiring stage" id="fullWidth" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: "5px", marginLeft: "10px" }}  >
                    <Grid item xs={2}  >
                        <TextFrmkHead frmtext={'Option 1:'} />
                    </Grid>
                    <Grid item xs={8}  >
                        <Box>
                            <TextField size='small' fullWidth id="fullWidth" />
                        </Box>
                    </Grid>
                    <Grid item xs={2} style={{ marginTop: "px" }} variant="text" >
                        <Button variant="text" >
                            <AddIcon button />
                        </Button>
                    </Grid>
                </Grid>
                <div style={{ marginLeft: "50%", marginTop: "10px", marginBottom: "20px" }}>
                    <Button style={{ width: "91px", }} variant="contained" color="primary">Add</Button>
                </div>
            </Box>

        </div>
    )
}

