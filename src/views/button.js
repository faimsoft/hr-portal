import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, FormControl, InputLabel, BootstrapInput, TablePagination, Paper, TCheckbox, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse, Container } from "@material-ui/core";
import { styled, alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




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
    Status: {
        position: "absolute",
        "width": "200px",
        "height": "44px",
        "background": "#068B92",
        "box- shadow": " 0px 2px 4px rgba(58, 87, 232, 0.3)",
        "border- radius": "4px",
    },
    filter: {
        position: "absolute",
        width: "150px",
        height: "44px",

        background: "#3A57E8",
        "box- shadow": "0px 2px 4px rgba(58, 87, 232, 0.3)",
        "border- radius": "4px"
    },
    // job
    job: {
        position: "absolute",
        width: "170px",
        height: "64px",



        background: "#FFFFFF",
        border: "1px solid #109CF1",
        "box- sizing": "border- box",
        "border - radius": "5px",
    },
    // job numbers
    Number: {
        position: "absolute",
        width: "41px",
        height: "56px",

        " font- family": "Inter",
        "font- style": "normal",
        "font - weight": "bold",
        "font - size": "32px",
        "line - height": "175 %",
        /* identical to box height, or 56px */

        display: "flex",
        "align - items": "center",
        "text - decoration - line": "underline",

        color: " #0066FF",
    }

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

// filter btn
export function Filters({ filter }) {
    const classes = useStyles();
    return (
        <Button variant="contained" className={classes.filter} disableElevation>{filter}</Button>

    )
}


// hering status
const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export function HiringStatus({ Status }) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button className={classes.Status}
                id="demo-customized-button"
                aria-controls="demo-customized-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                {Status}
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple>
                    Applied
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    Shortlisted
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                    In Review
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    HR Interview
                </MenuItem>
            </StyledMenu>
        </div>
    );
}

// job btn
export function Job({ job }) {
    const classes = useStyles();
    return (
        <Button variant="contained" className={classes.job} disableElevation>{job}</Button>

    )
}

// nuber in Job
export function Number({ number }) {
    const classes = useStyles();
    return (
        <Typography className={classes.Number} >{number}</Typography>

    )
}