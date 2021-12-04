import React, { useState } from 'react'
import { Typography, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import MoreIcon from '@material-ui/icons/MoreVert'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
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
    const [from, setFrom] = useState(false)
    const [date, setDate] = useState(false)
    const [experience, setExperience] = useState(false)
    const [job, setJob] = useState(false)
    const [skills, setSkills] = useState(false)
    const [education, setEducation] = useState(false)
    const [hiring, setHiring] = useState(false)






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
            <MenuItem component={Link} onClick={CloseMobileMenu} to="/Home">Home</MenuItem>
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
            <div className={classes.root}>
                <Drawer open={Open} onClose={() => setOpen(false)} variant="permanent">
                    <List disablepadding className={classes.drawer}>
                        <Toolbar />
                        <ListItem button onClick={() => setFrom(!from)} >
                            <ListItemText primary="From Date" />
                            {from ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={from}>
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
                        <ListItem button onClick={() => setDate(!date)} >
                            <ListItemText primary="To date" />
                            {date ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={date}>
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
                        <ListItem button onClick={() => setExperience(!experience)}>
                            <ListItemText primary="Experience" />
                            {experience ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={experience}>
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
                        <ListItem button onClick={() => setJob(!job)}>
                            <ListItemText primary="Skills" />
                            {job ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={job}>
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
                        <ListItem button onClick={() => setSkills(!skills)}>
                            <ListItemText primary="Job Applied" />
                            {skills ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={skills}>
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
                        <ListItem button onClick={() => setEducation(!education)}>
                            <ListItemText primary="Education" />
                            {education ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={education}>
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
                        <ListItem button onClick={() => setHiring(!hiring)}>
                            <ListItemText primary="Hiring Status" />
                            {hiring ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={hiring}>
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
