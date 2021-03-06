import React from 'react'
import Sidebar from '../../SideBar/sidebar'
import { makeStyles } from "@material-ui/core/styles";
import {Toolbar, Typography} from "@material-ui/core"
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const useStyles = makeStyles((theme) => ({
   SideSpace:{
       paddingLeft:250,
       paddingRight:10
    },
    instituteForm: {
        marginTop: 10,
        
    },
    instituteLogo: {
        marginTop:30
    },
    instituteweb: {
        marginTop:75
    },
   
    
   

}))


const commonStyles = {
  bgcolor: ' #f2f2f2',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '145px',
    height: '128px',
  
};


const CareerSite = () => {
     const classes = useStyles();

    return (
        <>
        <Sidebar/>
        <div  className={classes.SideSpace}>
                 <div>
                  <Grid container spacing={2} align="center">
                    <Grid  xs={2}>
                            <Typography >
                                <h4>Institute Name  :</h4>
                                <Toolbar/>
                                <h4 >Institute Logo :</h4>
                                <Toolbar />
                                <h4 className={classes.instituteweb}>Institute Website :</h4>
                                <h4 className={classes.instituteweb}>Description :</h4>
                                <Toolbar />
                                <Toolbar/>
                                <h4  >Institute Address :</h4>   
                          </Typography>
                    </Grid>
                    <Grid  xs={4} align="Left">
                            <Typography   className={classes.instituteForm}>
                               <TextField
                                id="outlined-size-small"
                                    size="small"
                                    placeholder="Mss College Ambad"
                                style={{ width: 450 }}
                                />
                               
                                 <Box className={classes.instituteLogo} sx={{ display: 'flex', justifyContent: 'Left' }}>
                                    <Box sx={{ ...commonStyles, borderRadius: '10px' }} />
                                </Box>
                                <Button variant="contained">Upload Photo</Button>
                                <Toolbar />
                                <TextField
                                id="outlined-size-small"
                                    size="small"
                                    placeholder="www.faimsoft.com"
                                />
                                <Toolbar />
                                <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                />
                                <Toolbar/>
                                <TextField
                                id="outlined-size-small"
                                size="small"
                                />
                                 

                            </Typography>
                    </Grid>
                  </Grid>  
                    <hr />
                   
                    <div>
                        <Stack  
                        direction="row"
                        justifyContent="right"
                        alignItems="right"
                        spacing={2}>
                            <Button variant="outlined">Cancel</Button>
                            <Button variant="contained">Create</Button>
                        </Stack>
                    </div>
                </div>
                <Toolbar/>
        </div>
        </>
    )
}

export default CareerSite
