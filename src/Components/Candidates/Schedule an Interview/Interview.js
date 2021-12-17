
import React from 'react'
import { Typography, FormControl, InputLabel, BootstrapInput, TablePagination, Paper, TCheckbox, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem, Collapse, Container } from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";
import { TextSCHead } from '../../../views/text';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { Bottomtext } from '../../../views/text';



// email icon
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
// import Divider from '@mui/material/Divider';

// icon
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// check box
import Checkbox from '@mui/material/Checkbox';





const useStyles = makeStyles((theme) => ({

    // root: {
    //     position: 'absolute',
    //     width: '1268px',
    //     height: '0px',
    //     left: '69px',
    //     top: '190px',
    //     // marginTop: '100px',
    // },
    box: {
        position: "absolute",
        width: "1279px",
        height: " 900px",
        // height: "106px",
        left: "100px",
        // left: " 958px",
        background: "#EBEBEB",
        border: "1px solid #D5D5D5",
        " box- sizing": "border- box",
        "border - radius": "5px",
        // marginBottom: "10px"
    },
    text: {

        marginTop: "80px",
        marginLeft: "2%"
    },
    email: {
        width: "613px",
        marginTop: "5px",
        height: "200px"

    },
    interviiw: {
        marginTop: "80px",
        marginLeft: "5%"
    }



}));

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


function Interview() {

    const classes = useStyles();
    // toggle button
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    return (
        <>
            <div style={{ marginLeft: '10px', marginBottom: "20px" }}>
                <Typography variant="h4">
                    <Button variant="text" ><ArrowBackIcon color="primary"
                        button
                        style={{ fontSize: '30px' }}
                    /></Button>
                    Send Email
                </Typography>
            </div>

            <Box component={Paper} className={classes.box}>
                <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                    <Grid xs={4} className={classes.interviiw}>
                        {/* Nmae */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                            <Grid xs={2}>
                                <TextSCHead smtext={" Name*"} />
                            </Grid>
                            <Grid xs={9}>
                                <Box
                                    sx={{
                                        width: 700,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Type interview name..." id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        <br />
                        {/* checkbox */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                            <Grid xs={1}>
                                <Checkbox />
                            </Grid>
                            <Grid xs={3} marginTop={"10px"}>
                                <TextSCHead smtext={"In person"} />
                            </Grid>
                            <Grid xs={1}>
                                <Checkbox />
                            </Grid>
                            <Grid xs={3} marginTop={"10px"}>
                                <TextSCHead smtext={" Telephonic"} />
                            </Grid>
                            <Grid xs={1}>
                                <Checkbox />
                            </Grid>
                            <Grid xs={3} marginTop={"10px"}>
                                <TextSCHead smtext={"Video"} />
                            </Grid>
                        </Grid>
                        <br />
                        {/* Date */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                            <Grid xs={2}>
                                <TextSCHead smtext={" Date*"} />
                            </Grid>
                            <Grid xs={9}>
                                <Box
                                    sx={{
                                        width: 700,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="3 November 2021" id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        <br />
                        {/* Time* */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                            <Grid xs={2}>
                                <TextSCHead smtext={" Time*"} />
                            </Grid>
                            <Grid xs={9}>
                                <Box
                                    sx={{
                                        width: 700,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="10:00 AM" id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        <br />
                        {/* Duration */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                            <Grid xs={2}>
                                <TextSCHead smtext={" Duration"} />
                            </Grid>
                            <Grid xs={9}>
                                <Box
                                    sx={{
                                        width: 700,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="45 Minutes" id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        <br />
                        {/* Location */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                            <Grid xs={2}>
                                <TextSCHead smtext={" Location"} />
                            </Grid>
                            <Grid xs={9}>
                                <Box
                                    sx={{
                                        width: 700,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="" id="fullWidth" />
                                </Box>

                            </Grid>
                        </Grid>
                        <br />
                        {/* Interviewers */}
                        <Grid container spacing={2} style={{ margin: "px", marginTop: "20px", }}>
                            <Grid xs={2} >
                                <TextSCHead smtext={"Interview"} />
                            </Grid>
                            <Grid xs={9}>
                                <Box
                                    sx={{
                                        width: 700,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField size="small" fullWidth label="Search for team memebers..." id="fullWidth" />
                                </Box>
                            </Grid>
                        </Grid>
                        <br />
                    </Grid>
                    <hr />
                    <Grid xs={7}>
                        <div className={classes.text}>
                            <TextSCHead smtext={" Select Email Template"} />
                            <Autocomplete
                                multiple
                                id="checkboxes-tags-demo"
                                options={top100Films}
                                disableCloseOnSelect
                                getOptionLabel={(option) => option.title}
                                renderOption={(props, option, { selected }) => (
                                    <li {...props}>
                                        <Checkbox
                                            icon={icon}
                                            checkedIcon={checkedIcon}
                                            style={{ marginRight: 8 }}
                                            checked={selected}
                                        />
                                        {option.title}
                                    </li>
                                )}
                                style={{ width: 600, marginTop: "10px" }}
                                size='small'
                                renderInput={(params) => (
                                    <TextField {...params} label="Checkboxes" placeholder="Favorites" />
                                )}
                            />
                            <br />
                            <Grid container spacing={2} style={{ marginLeft: "2px", marginTop: "20px", }}>
                                <Grid xs={1}>
                                    <TextSCHead smtext={" From:"} />
                                </Grid>
                                <Grid xs={8}>
                                    <Box
                                        sx={{
                                            width: 523,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <TextField size="small" fullWidth label="From" id="fullWidth" />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} style={{ marginLeft: "2px", marginTop: "20px", }}>
                                <Grid xs={1}>
                                    <TextSCHead smtext={" To:"} />
                                </Grid>
                                <Grid xs={8}>
                                    <Box
                                        sx={{
                                            width: 523,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <TextField size="small" fullWidth label="To" id="fullWidth" placeholder='Gmail' />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} style={{ marginLeft: "1px", marginTop: "20px", }}>
                                <Grid xs={1}>
                                    <TextSCHead smtext={" Subject:"} />
                                </Grid>
                                <Grid xs={8}>
                                    <Box
                                        sx={{
                                            width: 523,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <TextField size="small" fullWidth label="Subject" id="fullWidth" />
                                    </Box>
                                </Grid>
                            </Grid>
                            <div style={{ marginTop: "50px" }}>
                                <TextSCHead smtext={" Email Body"} />
                            </div>

                            <Box component={Paper} className={classes.email}>
                                <ToggleButtonGroup
                                    value={formats}
                                    onChange={handleFormat}
                                    aria-label="text formatting"
                                >
                                    <ToggleButton value="bold" aria-label="bold">
                                        <FormatBoldIcon />
                                    </ToggleButton>
                                    <ToggleButton value="italic" aria-label="italic">
                                        <FormatItalicIcon />
                                    </ToggleButton>
                                    <ToggleButton value="underlined" aria-label="underlined">
                                        <FormatUnderlinedIcon />
                                    </ToggleButton>
                                    <ToggleButton value="color" aria-label="color" disabled>
                                        <FormatColorFillIcon />
                                        <ArrowDropDownIcon />
                                        {/* <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} /> */}
                                    </ToggleButton>
                                    <ToggleButton >
                                        Android<ArrowDropDownIcon />
                                    </ToggleButton>
                                    <ToggleButton  >
                                        10<ArrowDropDownIcon />
                                    </ToggleButton>
                                    <ToggleButton value="left" key="left">
                                        <FormatAlignLeftIcon />
                                    </ToggleButton>,
                                    <ToggleButton value="center" key="center">
                                        <FormatAlignCenterIcon />
                                    </ToggleButton>,
                                    <ToggleButton value="right" key="right">
                                        <FormatAlignRightIcon />
                                    </ToggleButton>,
                                    <ToggleButton value="justify" key="justify">
                                        <FormatAlignJustifyIcon />
                                    </ToggleButton>
                                    <ToggleButton value="android">
                                        A
                                    </ToggleButton>
                                </ToggleButtonGroup>
                                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                                    <Bottomtext last={"Type your email details here......."} />
                                </div>
                            </Box>
                            <Grid container spacing={2} style={{ marginLeft: "1px", marginTop: "50px", }}>
                                <Grid xs={1}>
                                    <TextSCHead smtext={" Attachment:"} />
                                </Grid>
                                <Grid xs={8}>
                                    <Button style={{ width: "330px", marginLeft: "50px", marginBottom: "40px" }} variant="contained">Browse</Button>
                                </Grid>
                            </Grid>



                        </div>



                    </Grid>
                </Grid>
                <hr />


                <Button style={{
                    marginLeft: "40%",
                    width: "213px", height: "44px", background: " #109CF1",
                    marginTop: "3%"
                }} variant="contained">
                    Schedule
                </Button>

            </Box>

        </>
    )
}

export default Interview




// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
];