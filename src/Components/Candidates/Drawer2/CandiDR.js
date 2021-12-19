import React, { useState } from 'react'
import { Typography, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import MoreIcon from '@material-ui/icons/MoreVert'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Formdata from '../Formdata/Formdata';
import TextField from '@mui/material/TextField';
import { Filters } from '../../../views/button';

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
        width: 180

    },
    nestedItem: {
        marginLeft: ""
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


    const [currency, setCurrency] = React.useState('EUR');

    const clickhandleChange = (e) => {
        setCurrency(e.target.value);
    };




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
                        <ListItem button component={Link}  >
                            {/* <ListItemText primary="From Date" /> */}
                            <TextField
                                style={{
                                    width: '249px',

                                }}
                                id="Zip Code"
                                select
                                size='small'
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
                        </ListItem>
                        <ListItem button component={Link} to="/Cdsingleview" >
                            <TextField
                                style={{
                                    width: '249px',

                                }}
                                id="Zip Code"
                                select
                                size='small'
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
                        </ListItem>
                        <ListItem button >
                            <TextField
                                style={{
                                    width: '249px',

                                }}
                                id="Zip Code"
                                select
                                size='small'
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
                        </ListItem>
                        <ListItem button >
                            <TextField
                                style={{
                                    width: '249px',

                                }}
                                id="Zip Code"
                                select
                                size='small'
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
                        </ListItem>
                        <ListItem button >
                            <TextField
                                style={{
                                    width: '249px',

                                }}
                                id="Zip Code"
                                select
                                size='small'
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
                        </ListItem>
                        <ListItem button >
                            <TextField
                                style={{
                                    width: '249px',

                                }}
                                id="Zip Code"
                                select
                                size='small'
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
                        </ListItem>
                        <ListItem button >
                            <TextField
                                style={{
                                    width: '249px',

                                }}
                                id="Zip Code"
                                select
                                size='small'
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
                        </ListItem>
                        <ListItem button >
                            <TextField
                                style={{
                                    width: '249px',

                                }}
                                id="Zip Code"
                                select
                                size='small'
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
                        </ListItem>

                        {/* <ListItem button onClick={() => setOpene(!opene)}>
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
                        </Collapse> */}
                        <ListItem >
                            <ListItemText className={classes.nestedItem} >
                                <Filters filter={"Apply Filters"} />
                            </ListItemText>

                        </ListItem>

                    </List>

                </Drawer>
            </div>
        </>

    )
}

export default CandiDR




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




