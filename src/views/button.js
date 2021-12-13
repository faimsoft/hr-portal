import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, FormControl, InputLabel, BootstrapInput, TablePagination, Paper, TCheckbox, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse, Container } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
    lg: {
        position: "absolute",
        "width": "200px",
        "height": "44px",
        "background": "#109CF1",
        "box- shadow": " 0px 2px 4px rgba(58, 87, 232, 0.3)",
        "border- radius": "4px",
        // left: "654px",
    },
    sm: {
        position: "absolute",
        width: "129px",
        height: "44px",
        background: "#068B92",
        "box- shadow": "0px 2px 4px rgba(58, 87, 232, 0.3)",
        " border- radius": "4px",
    },
    exsm: {
        position: "absolute",
        width: "91px",
        height: "35px",
        background: " #109CF1",
        "border- radius": "5px",
    },

}))


// blue button
export function LgButton({ lagbutton }) {
    const classes = useStyles();

    return (
        <Button variant="contained" className={classes.lg} disableElevation>{lagbutton}</Button>

    )
}

// lgsmall button
export function SmButton({ smbutton }) {
    const classes = useStyles();
    return (
        <Button variant="contained" className={classes.sm} disableElevation>{smbutton}</Button>

    )
}

// exsm button
export function ExSmButton({ exsmbutton }) {
    const classes = useStyles();
    return (
        <Button variant="contained" className={classes.exsm} disableElevation>{exsmbutton}</Button>

    )
}

