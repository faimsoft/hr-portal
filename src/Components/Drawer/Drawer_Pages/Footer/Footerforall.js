import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography } from '@material-ui/core';

const Footerforall = () => {
    return (
        <div align='center'>
            {/* <hr /> */}
            <Box component={Paper}>
                <hr />
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Button variant="text">Copyright © 2021 faimsoft</Button>
                        <Typography paragraph> All right reserved</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack direction="row" spacing={1}>
                            <IconButton aria-label="Facebook"  size="large">
                                <FacebookIcon color="primary" fontSize="inherit" />
                            </IconButton>
                            <IconButton aria-label="Instagram">
                                <InstagramIcon  color="secondary" />
                            </IconButton>
                            <IconButton aria-label="GitHubIcon">
                                <GitHubIcon color="primary" />
                            </IconButton>
                            <IconButton aria-label="Twitter">
                                <TwitterIcon color="primary" />
                            </IconButton>
                           
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    )
}

export default Footerforall
