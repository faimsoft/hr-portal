import React, { useState, useEffect } from 'react'
import { useHistory, Redirect, useLocation, Link } from 'react-router-dom'

import { Toolbar, Menu, MenuItem, ListItemText, Drawer, List, ListItem, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Formdata from '../Formdata/Formdata';
import TextField from '@mui/material/TextField';
import { Filters } from '../../../views/button';
import axios from 'axios';
//import api
import { apicountries, apiCallUnsecureGet } from '../../../utils/api';
import { isAuthenticated } from '../../../utils/session'


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

    if(!isAuthenticated()) {
        return <Redirect to='/Login'  />
    }

    const classes = useStyles();
    const [cities, setCities] = useState([]);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [loadData, setLoadData] = useState(true)

    const [currency, setCurrency] = React.useState('EUR');

    const clickhandleChange = (e) => {
        setCurrency(e.target.value);
    };

    const [Open, setOpen] = useState(false)




    const loadcountrie = () => {
        apiCallUnsecureGet(apicountries,
            (response) => {
                setLoadData(false);
                setCountries(response.countries);
                setStates(response.states);
                setCities(response.cities);
            },
            (errorMsg) => {
                setLoadData(false);
                alert(errorMsg)
            }
        )

    }

    useEffect(() => {
        loadcountrie()
    }, [loadData])

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
                                value={countries}
                                onChange={clickhandleChange}
                                SelectProps={{
                                    native: true,
                                }}
                            >  {countries.map((option) => (
                                <option key={option.id} value={option.name}>
                                    {option.name}
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
                                value={states}
                                onChange={clickhandleChange}
                                SelectProps={{
                                    native: true,
                                }}
                            >  {states.map((option) => (
                                <option key={option.id} value={option.name}>
                                    {option.name}
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
                                value={cities}
                                onChange={clickhandleChange}
                                SelectProps={{
                                    native: true,
                                }}
                            >  {cities.map((option) => (
                                <option key={option.id} value={option.name}>
                                    {option.name}
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




// const countries = [
//     { code: 'AD', label: 'Andorra', phone: '376' },
//     {
//         code: 'AE',
//         label: 'United Arab Emirates',
//         phone: '971',
//     },
//     { code: 'AF', label: 'Afghanistan', phone: '93' },
//     {
//         code: 'AG',
//         label: 'Antigua and Barbuda',
//         phone: '1-268',
//     },
//     { code: 'AI', label: 'Anguilla', phone: '1-264' },
//     { code: 'AL', label: 'Albania', phone: '355' },
//     { code: 'AM', label: 'Armenia', phone: '374' },
//     { code: 'AO', label: 'Angola', phone: '244' },
//     { code: 'AQ', label: 'Antarctica', phone: '672' },
//     { code: 'AR', label: 'Argentina', phone: '54' },
//     { code: 'AS', label: 'American Samoa', phone: '1-684' },
//     { code: 'AT', label: 'Austria', phone: '43' },
//     {
//         code: 'AU',
//         label: 'Australia',
//         phone: '61',
//         suggested: true,
//     },
//     { code: 'AW', label: 'Aruba', phone: '297' },
//     { code: 'AX', label: 'Alland Islands', phone: '358' },
//     { code: 'AZ', label: 'Azerbaijan', phone: '994' },
//     {
//         code: 'BA',
//         label: 'Bosnia and Herzegovina',
//         phone: '387',
//     },
// ]




