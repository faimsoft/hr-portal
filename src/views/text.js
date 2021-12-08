import React from 'react'
import { Typography, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



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
        color: '#000000 '
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
        "font- family": "Inter",
        "font- style": "normal",
        "font - weight": "bold",
        "font - size": "20px",
        "line - height": "175 %",
        /* identical to box height, or 35px */
        display: "flex",
        "align - items": "center",
        color: " #109CF1"
    },
    frm: {
        "font- family": "Inter",
        "font- style": "normal",
        "font - weight": "bold",
        "font - size": "l6px",
        "line - height": "175 %",
        /* identical to box height, or 35px */
        display: "flex",
        "align - items": "center",
        color: "#000000",
    },
    p: {
        "font- family": "Inter",
        " font- style": "normal",
        "font - weight": "normal",
        " font - size": "16px",
        "line - height": "175 %",
        /* or 28px */
        color: "#000000,"


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
        <Typography style={{ color: "" }} className={classes.para} >{smtext}</Typography>
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
        <Typography className={classes.frm} >{ptext}</Typography>
    )
}