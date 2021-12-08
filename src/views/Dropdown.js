import React from 'react'
import { Typography, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@mui/material/TextField';




const useStyles = makeStyles((theme) => ({
    exlg: {
        position: "absolute",
        width: "330px",
        height: "35px",


        background: " #FFFFFF",
        " border": " 0.5px solid #BFBFBF",
        "box- sizing": "border- box",
        " border - radius": "5px",
    },
    select: {
        position: "absolute",
        width: "249px",
        height: "44px",
        background: "#FFFFFF",
        border: " 1px solid #ADB5BD",
        "box- sizing": "border- box",
        "border - radius": "5px",
    },
    sm: {
        position: "absolute",
        width: "160px",
        height: " 35px",
        background: " #F4F4F4",
        "border - radius": "5px",
    },
    esm: {
        width: "150px",
        height: "35px",
        background: " #FFFFFF",
        " border": " 0.5px solid #BFBFBF",
        "box- sizing": "border- box",
        " border - radius": "5px",
    }

}))


// from detail



export function SelectOption(lable, value, list, setValue) {
    const classes = useStyles();


    return (
        <div>

            <TextField
                className={classes.exlg}
                id={lable}
                select
                label={lable}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                SelectProps={{
                    native: true,
                }}
            >  {list.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
            </TextField>


        </div >
    )
}

export function SelectOption2(lable, value, list, setValue) {
    const classes = useStyles();
    return (
        <TextField
            id={lable}
            select
            label={lable}
            value={value}
            className={classes.select}
            SelectProps={{
                native: true,
            }}
        >
            {list.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}

        </TextField>
    )
}


export function SelectOption3(lable, value, list, setValue) {

    const classes = useStyles();
    return (
        <TextField
            id={lable}
            label={lable}
            value={value}
            className={classes.sm}
            select
            SelectProps={{
                native: true,
            }}
        >
            {list.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}

        </TextField>
    )
}

// fromsm detail
export function SelectOption4(lable, value, list, setValue) {

    const classes = useStyles();
    return (
        <TextField
            id={lable}
            label={lable}
            value={value}
            className={classes.esm}
            select
            SelectProps={{
                native: true,
            }}
        >
            {list.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}

        </TextField>
    )
}