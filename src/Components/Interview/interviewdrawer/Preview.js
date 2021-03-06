import React from 'react'
import { Typography, Paper, Toolbar, Button, } from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";
import { TextSCHead } from '../../../views/text';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';






// import Divider from '@mui/material/Divider';

// icon
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// check box





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
        height: " auto",
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


function Preview() {
    const [currency, setCurrency] = React.useState('EUR');

    const history = useHistory();
    function handleClick() {
        history.push("/InterviewCreate");
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
            <div style={{ marginLeft: '80px', marginBottom: "20px" }}>
                <Typography variant="h5">
                    <Button variant="text" ><ArrowBackIcon color="primary"
                        button
                        style={{ fontSize: '30px' }} onClick={handleClick}
                    /></Button>
                    Create an Interview
                </Typography>
            </div>

            <Box component={Paper} className={classes.box}>
                <Grid container spacing={2} style={{ marginTop: "20px", }}>
                    <Grid xs={4} className={classes.interviiw}>
                        {/* Nmae */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                            <Grid xs={3}>
                                <TextSCHead smtext={" Name*"} />
                            </Grid>
                            <Grid xs={8}>
                                <TextSCHead smtext={"Technical Round"} />
                            </Grid>
                        </Grid>
                        <br />
                        {/* checkbox select*/}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                            <Grid xs={3}>
                            </Grid>
                            <Grid xs={8}>
                                <TextSCHead smtext={"Telephonics"} />
                            </Grid>
                        </Grid>
                        <br />

                        {/* Date */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                            <Grid xs={3}>
                                <TextSCHead smtext={" Date*"} />
                            </Grid>
                            <Grid xs={8}>
                                <Box
                                    sx={{
                                        width: 700,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextSCHead smtext={"3 November 2021"} />
                                </Box>
                            </Grid>
                        </Grid>
                        <br />
                        {/* Time* */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                            <Grid xs={3}>
                                <TextSCHead smtext={" Time*"} />
                            </Grid>
                            <Grid xs={8}>
                                <Box
                                    sx={{
                                        width: 700,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextSCHead smtext={"10:00 AM"} />
                                </Box>
                            </Grid>
                        </Grid>
                        <br />
                        {/* Duration */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                            <Grid xs={3}>
                                <TextSCHead smtext={" End Time"} />
                            </Grid>
                            <Grid xs={8}>
                                <Box
                                    sx={{
                                        width: 700,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextSCHead smtext={"10:00 AM"} />
                                </Box>
                            </Grid>
                        </Grid>
                        <br />
                        {/* Location */}
                        <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                            <Grid xs={3}>
                                <TextSCHead smtext={" Location"} />
                            </Grid>
                            <Grid xs={8}>

                                <TextSCHead smtext={" College Office, Latur"} />


                            </Grid>
                        </Grid>
                        <br />
                        {/* Interviewers */}
                        <Grid container spacing={2} style={{ margin: "px", marginTop: "25px", }}>
                            <Grid xs={3} >
                                <TextSCHead smtext={"Interview"} />
                            </Grid>
                            <Grid xs={8}>
                                <Box
                                    sx={{
                                        width: 700,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextSCHead smtext={" Sameer, Petsy, Rahul"} />
                                </Box>
                            </Grid>
                        </Grid>
                        <br />
                    </Grid>
                    <hr />
                    <Grid xs={7}>
                        <div className={classes.text}>
                            {/* Nmae */}
                            <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                                <Grid xs={3}>
                                    <TextSCHead smtext={"Select Candidate"} />
                                </Grid>
                                <Grid xs={8}>
                                    <TextSCHead smtext={"Abhineet Sabharwal"} />
                                </Grid>
                            </Grid>
                            <br />
                            {/* checkbox select*/}
                            <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                                <Grid xs={3}>
                                    <TextSCHead smtext={"Select Job"} />
                                </Grid>
                                <Grid xs={8}>
                                    <TextSCHead smtext={" Aisstant Professor - Mechanical Engineering"} />
                                </Grid>
                            </Grid>
                            <br />

                            {/* Date */}
                            <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                                <Grid xs={3}>
                                    <TextSCHead smtext={"Select Template"} />
                                </Grid>
                                <Grid xs={8}>
                                    <Box
                                        sx={{
                                            width: 700,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <TextSCHead smtext={"Techincal Round Interview Email Template"} />
                                    </Box>
                                </Grid>
                            </Grid>
                            <br />
                            {/* Time* */}
                            <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                                <Grid xs={3}>
                                    <TextSCHead smtext={" Subject:"} />
                                </Grid>
                                <Grid xs={8}>
                                    <Box
                                        sx={{
                                            width: 700,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <TextSCHead smtext={"Hi $candiate_name Your technical round has been scheduled on ..."} />
                                    </Box>
                                </Grid>
                            </Grid>
                            <br />
                            {/* Duration */}
                            <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                                <Grid xs={3}>
                                    <TextSCHead smtext={"Email Body"} />
                                </Grid>

                            </Grid>
                            <div style={{ marginTop: "20px" }}>
                                <TextSCHead smtext={"Hi $candidate_name "} />
                                <TextSCHead smtext={"As per our last call, you have been shortlisted for the next round.The next round is going to be a technical interviewPlease find the details of the "} />
                                <div style={{ textAlign: "center" }}>
                                    <TextSCHead smtext={"interview belowLocation: College Office, Latur Time: 10 am - 11 am Date: 26th December 2021 "} />
                                </div>
                                <TextSCHead smtext={"Please reach the location 10 minutes earlier for convenience "} />

                            </div>
                            <br />
                            {/* Location */}
                            <Grid container spacing={2} style={{ marginLeft: "px", marginTop: "20px", }}>
                                <Grid xs={2}>
                                    <TextSCHead smtext={" Attachment:"} />
                                </Grid>
                                <Grid xs={8}>

                                    <TextSCHead smtext={" None"} />


                                </Grid>
                            </Grid>
                            <br />


                        </div>



                    </Grid>
                </Grid>
                <hr />
                <Button style={{
                    marginLeft: "40%",
                    width: "213px", height: "44px", background: "#068B92",
                    marginTop: "3%"
                }} component={Link} to='/InterviewCreate' variant="contained">
                    Create
                </Button>
                <Toolbar />

            </Box>

        </>
    )
}

export default Preview





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

