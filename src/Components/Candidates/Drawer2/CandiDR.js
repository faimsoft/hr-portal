import React, { useState } from 'react'
import { Typography, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import MoreIcon from '@material-ui/icons/MoreVert'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Formdata from '../Formdata/Formdata';
const DrawerWidth = 200

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: 250
    },
    content: {
        padding: theme.spacing(3)
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        }
    },
    MobileDesktop: {
        display: "none",
        [theme.breakpoints.down("md")]: {
            display: "flex",
        }
    },
    drawer: {
        width: 170

    },
    nestedItem: {
        paddingLeft: theme.spacing(8),
    },
}));

const CandiDR = () => {
    const classes = useStyles();
    const [opene, setOpene] = useState(false)
    // const [from, setFrom] = useState(false)
    // const [date, setDate] = useState(false)
    // const [experience, setExperience] = useState(false)
    // const [job, setJob] = useState(false)
    // const [skills, setSkills] = useState(false)
    // const [education, setEducation] = useState(false)
    // const [hiring, setHiring] = useState(false)






    const [mobileelment, setMobileelment] = useState(null)
    const [Open, setOpen] = useState(false)
    const isMobileMenuOpen = Boolean(mobileelment)
    const openMobileMenu = (event) => {
        setMobileelment(event.currentTarget)
    }
    const CloseMobileMenu = () => {
        setMobileelment(null)
    }
    // FOR MOBILE RESPONSIVE
    const MobileMenu = (
        <Menu anchorEl={mobileelment} id="mobile-menu" keepMounted open={isMobileMenuOpen}>
            <MenuItem component={Link} onClick={CloseMobileMenu} to="/Formdata">Home</MenuItem>
            <MenuItem component={Link} onClick={CloseMobileMenu} to="/About" >About</MenuItem>
            <MenuItem component={Link} onClick={CloseMobileMenu} to="/Login">Login</MenuItem>
            <MenuItem component={Link} onClick={CloseMobileMenu} to="/SignUp" >SignUp</MenuItem>
            <MenuItem component={Link} onClick={CloseMobileMenu} to="/Jobs" >Jobs</MenuItem>
            <MenuItem component={Link} onClick={CloseMobileMenu} to="/setting" >setting</MenuItem>
            <MenuItem onClick={() => setOpen(true)}  >a</MenuItem>

        </Menu>
    )

    return (
        <>
            <Formdata />
            <div className={classes.root}>
                <Drawer open={Open} onClose={() => setOpen(false)} variant="permanent">
                    <List disablepadding className={classes.drawer}>
                        <Toolbar />
                        <ListItem button component={Link} to="/Formdata" >
                            <ListItemText primary="From Date" />
                        </ListItem>
                        <ListItem button component={Link} to="/Cdsingleview" >
                            <ListItemText primary="To date" />
                        </ListItem>
                        <ListItem button >
                            <ListItemText primary="Experience" />
                        </ListItem>
                        <ListItem button >
                            <ListItemText primary="Skills" />
                        </ListItem>
                        <ListItem button >
                            <ListItemText primary="Job Applied" />
                        </ListItem>
                        <ListItem button >
                            <ListItemText primary="Education" />
                        </ListItem>
                        <ListItem button >
                            <ListItemText primary="Hiring Status" />
                        </ListItem>
                        <ListItem button onClick={() => setOpene(!opene)}>
                            <ListItemText primary="Sourceed from" />
                            {opene ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={opene}>
                            <List disablePadding>
                                <ListItem className={classes.nestedItem} button>
                                    <ListItemText >list one</ListItemText>
                                </ListItem>
                                <ListItem className={classes.nestedItem} button>
                                    <ListItemText >list one</ListItemText>
                                </ListItem>
                                <ListItem className={classes.nestedItem} button>
                                    <ListItemText >list one</ListItemText>
                                </ListItem>
                                <ListItem className={classes.nestedItem} button >
                                    <ListItemText >list one</ListItemText>
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </Drawer>
            </div>
        </>

    )
}

export default CandiDR
