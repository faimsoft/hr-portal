import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, FormControl, InputLabel, BootstrapInput, TablePagination, Paper, TCheckbox, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse, Container } from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";
import { TextHead3 } from '../../../views/text'
import { TextSCHead } from '../../../views/text';
import { TextClrHead } from '../../../views/text';
import { LgButton } from '../../../views/button';
import { SelectOption } from '../../../views/Dropdown';




const useStyles = makeStyles((theme) => ({
    hr: {
        position: 'absolute',
        width: '1268px',
        height: '0px',
        left: '69px',
        top: '190px',
        border: '1px solid #ADB5BD'
    },
    root: {
        position: 'absolute',
        width: '1268px',
        height: '0px',
        left: '69px',
        top: '190px',
    }


}));


function Cdsingleview() {
    const [currency, setCurrency] = React.useState('');

    const clickhandleChange = (e) => {
        setCurrency(e.target.value);
    };

    const classes = useStyles();

    return (

        // SelectOption('Countries', currency, countries, setCurrency)
        <>
            <Grid container spacing={2}   >
                <Grid item xs={3}  >
                    <div style={{ marginLeft: '10px' }}>
                        <Typography variant="h4">
                            <ArrowBackIcon color="primary"
                                button
                                variant="text"
                                style={{ fontSize: '30px' }} //onClick={handleClick}
                            />
                            Abhineet Sabharwal
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={2}  >
                    <TextSCHead smtext={" M. Tech. (Structure)"} />
                </Grid>
                <Grid item xs={5}  >
                    <TextSCHead smtext={" +91-9930705653"} />
                </Grid>
                <Grid item xs={2}  >

                    <Button color="primary" component={Link} variant="text" disableElevation>
                        <MoreHorizIcon style={{ fontSize: '50px' }} />
                    </Button>
                </Grid>
            </Grid>
            <hr className={classes.hr} />
            {/* three button */}
            <div className={classes.root} >
                <Grid container spacing={2} style={{ marginTop: "10px" }}   >
                    <Grid item xs={2}  >
                        < TextHead3 text3='Last Job Applied' />
                        <TextSCHead smtext={" HOD, Civil"} />
                    </Grid>
                    <Grid item xs={2}  >
                        <TextHead3 text3={'Hiring Status'} />
                        <TextClrHead smtext={"Shortlisted"} />

                    </Grid>
                    <Grid item xs={2}  >
                        <TextHead3 text3={'Assessment'} />
                        <TextClrHead smtext={"View"} />
                    </Grid>
                    <Grid item xs={2}  >
                        <LgButton lagbutton={"Schedule Interview"} />
                    </Grid>
                    <Grid item xs={2}  >

                        <LgButton lagbutton={"Assign to a job"} />

                    </Grid>

                    <Grid item xs={2}  >
                        <LgButton lagbutton={"Hiring Status"} />

                    </Grid>

                </Grid>

            </div>
        </>
    )
}

export default Cdsingleview


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