import React from 'react'
import { Typography, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({

    root: {
        "font-family": 'Inter',
        "font-style": 'normal',
        "font-weight": 'bold',
        "font-size": '20px',
        "line-height": '175%',
        /* identical to box height, or 35px */

        display: "flex",
        "align-items": 'center',
        color: '#000000'
    },
    para: {
        "font- family": "Inter",
        "  font- style": "normal",
        "font - weight": " bold",
        "font - weight": " 700px",
        "font - size": "20px",
        "line - height": "175 %",
        "font-weight": '400',
        /* identical to box height, or 35px */
        display: "flex",
        "align - items": "center",
        color: "#000000",
    },
    sm: {
        "font- family": "Inter",
        "  font- style": "normal",
        "font - weight": " bold",
        "font - size": "20px",
        "line - height": "175 %",
        "font-weight": '400',
        /* identical to box height, or 35px */
        display: "flex",
        "align - items": "center",
        color: "#3A57E8",
    },
    blue: {
        // top: "691px",
        "font- family": "Inter",
        "font- style": "normal",
        fontWeight: "bold",
        "font - size": "50px",
        "line - height": "175 %",
        /* identical to box height, or 35px */
        display: "flex",
        "align - items": "center",
        color: " #109CF1"
    },
    frm: {
        "font- family": "Inter",
        "font- style": "normal",
        fontWeight: "bold",
        "font - size": "l6px",
        "line - height": "175 %",
        /* identical to box height, or 35px */
        display: "flex",
        "align - items": "center",
        color: "#000000",
        alignItems: "center",

    },
    p: {
        "font- family": "Inter",
        " font- style": "normal",
        "font - weight": "normal",
        " font - size": "16px",
        "line - height": "175 %",
        /* or 28px */
        color: "#000000"


    },

    select: {

        position: "absolute",
        height: "20px",

        " font- family": "Poppins",
        "font- style": "normal",
        "font - size": "13px",
        "line - height": "19px",
        /* identical to box height */


        color: "#000000",

    },
    hr: {
        position: 'absolute',
        width: '1268px',
        height: '0px',
        left: '69px',
        top: '190px',
        border: '1px solid #ADB5BD'
    },
    note: {
        position: "absolute",
        width: "291px",
        height: " 92px",
        left: " 5px",

        "font- family": "Inter",
        "font- style": "normal",
        "font - weight": "normal",
        "font - size": "13px",
        "line - height": "175 %",
        /* or 23px */

        color: "#414141",
    },
    last: {
        position: "absolute",


        "font- family": "Inter",
        "font- style": "normal",
        "font - weight": "normal",
        "font - size": "10px",
        "line - height": "150 %",
        /* identical to box height, or 23px */


        color: "#919191",
    },
    para: {
        "font- family": "Inter",
        " font- style": "normal",
        "font - weight": "normal",
        fontSize: "15px",
        "line - height": "175 %",
        /* or 28px */
        color: "#000000"

    }


}));

export function TextHead1({ text1 }) {
    const classes = useStyles();

    return (
        <Typography variant="h1" className={classes.root}>{text1}</Typography>
    )

}

export function TextHead2({ text2 }) {
    const classes = useStyles();
    return (
        <Typography variant="h2" className={classes.root}>{text2}</Typography>
    )
}
export function TextHead3({ text3 }) {
    const classes = useStyles();
    return (
        <Typography variant="h3" className={classes.root}>{text3}</Typography>
    )
}

export function TextHead4({ text4 }) {
    const classes = useStyles();
    return (
        <Typography variant="h4" className={classes.root} >{text4}</Typography>
    )
}
export function TextHead5({ text5 }) {
    const classes = useStyles();
    return (
        <Typography variant="h5" className={classes.root}>{text5}</Typography>
    )
}

export function TextHead6({ text6 }) {
    const classes = useStyles();

    return (
        <Typography variant="h6" className={classes.root} >{text6}</Typography>
    )
}

// small heading
export function TextSCHead({ smtext }) {
    const classes = useStyles();

    return (
        <Typography className={classes.para} >{smtext}</Typography>
    )
}



// // clour heading
// Link color
export function TextClrHead({ smtext }) {
    const classes = useStyles();

    return (
        <Typography className={classes.sm} >{smtext}</Typography>
    )
}

// headind blue color
export function TextDarkHead({ smtext }) {
    const classes = useStyles();

    return (
        <Typography className={classes.blue} >{smtext}</Typography>
    )
}

// form heading
export function TextFrmkHead({ frmtext }) {
    const classes = useStyles();

    return (
        <Typography className={classes.frm} >{frmtext}</Typography>
    )
}

// paragrph
export function TextPkHead({ ptext }) {
    const classes = useStyles();

    return (
        <Typography className={classes.p} >{ptext}</Typography>
    )
}



export function TextSidebar({ select }) {
    const classes = useStyles();

    return (
        <ListItemText className={classes.select} >{select}</ListItemText>
    )
}



export function Horizanderline() {
    const classes = useStyles();

    return (
        <hr className={classes.hr} />

    )
}

//note text

export function Note({ note }) {
    const classes = useStyles();

    return (
        <ListItemText className={classes.note} >{note}</ListItemText>

    )
}

export function Bottomtext({ last }) {
    const classes = useStyles();

    return (
        <ListItemText className={classes.last} >{last}</ListItemText>

    )
}

