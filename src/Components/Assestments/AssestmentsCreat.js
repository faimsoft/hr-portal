import React from 'react'
import { Typography, Paper, Toolbar, Button, ListItemText, List, ListItem, } from "@material-ui/core";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";
// import { TextSCHead } from '../../../views/text';
import { TextSCHead } from "../../views/text";
import { TextHead2 } from "../../views/text";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
// import { Bottomtext } from '../../../views/text';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Divider from '@mui/material/Divider';
import { Question1 } from './Question';

// Question
import Question from './Question';







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
        background: "#F9F9F9;",
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


function AssestmentsCreat() {
    const [currency, setCurrency] = React.useState('EUR');

    const history = useHistory();
    function handleClick() {
        history.push("/InterviewDrawer");
    }

    const clickhandleChange = (e) => {
        setCurrency(e.target.value);
    };


    const classes = useStyles();
    // toggle button
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    return (
        <>
            <Grid container spacing={2} style={{ marginBottom: "10px" }} >
                <Grid item xs={8}  >

                    <div style={{ marginLeft: '80px' }}>
                        <Typography variant="h5">
                            <Button variant="text" ><ArrowBackIosNewIcon color="primary"
                                button
                                style={{ fontSize: '30px' }} onClick={handleClick}
                            /></Button>
                            Create a candidate</Typography>
                    </div>
                </Grid>
                <Grid item xs={1}  >
                    <Button style={{ width: "142px", }} color="primary" component={Link} to='/' variant="contained" disableElevation>
                        Preview
                    </Button>
                </Grid>
                <Grid item xs={2}  >
                    <Button style={{ width: "142px", marginLeft: "70px", background: "#068B92" }} color="primary" component={Link} to='/' variant="contained" disableElevation>
                        Save
                    </Button>
                </Grid>
            </Grid>

            <Box component={Paper} className={classes.box}>
                <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                    <Grid xs={4} className={classes.interviiw}>
                        {/* Nmae */}
                        <TextSCHead smtext={" Select Assessment Category"} />
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
                            style={{ width: 410, marginTop: "10px" }}
                            size='small'
                            renderInput={(params) => (
                                <TextField {...params} label="Checkboxes" placeholder="Favorites" />
                            )}
                        />
                        <br />
                        {/* checkbox */}
                        <br />
                        {/* Interviewers */}
                        <Grid container spacing={2} style={{ marginLeft: "10px", marginTop: "20px", }}>
                            <Grid xs={10} >
                                <TextHead2 text2={"Select Question Types"} />
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container spacing={2} style={{ marginLeft: "10px", marginTop: "20px", }}>
                            <Grid xs={10} >
                                <Box component={Paper} >
                                    <List sx={{
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'background.paper',
                                    }} component="nav" aria-label="mailbox folders">
                                        <ListItem button>
                                            <ListItemText primary="Multiple Choice Question" />
                                            <Button color="primary" component={Link} to='/' variant="contained" disableElevation>
                                                Add
                                            </Button>
                                        </ListItem>
                                        <Divider />
                                        <ListItem button divider>
                                            <ListItemText primary="Multiple Checkboxes" />
                                            <Button color="primary" component={Link} to='/' variant="contained" disableElevation>
                                                Add
                                            </Button>
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText primary="Drop Down" />
                                            <Button color="primary" component={Link} to='/' variant="contained" disableElevation>
                                                Add
                                            </Button>
                                        </ListItem>
                                        <Divider light />
                                        <ListItem button>
                                            <ListItemText primary="Text/ Paragraph" />
                                            <Button color="primary" component={Link} to='/' variant="contained" disableElevation>
                                                Add
                                            </Button>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <hr style={{ height: "800px" }} />
                    <Grid xs={7}>
                        <div className={classes.text}>
                            <TextSCHead smtext={" Give name to your Assessment"} />
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
                            <Question />
                            <br />
                            <br />
                            <div style={{ marginTop: "40%" }}>
                                <Question1 />

                            </div>
                        </div>



                    </Grid>
                </Grid>


                <Toolbar />


            </Box>


        </>
    )
}

export default AssestmentsCreat





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



];

// seclet
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

