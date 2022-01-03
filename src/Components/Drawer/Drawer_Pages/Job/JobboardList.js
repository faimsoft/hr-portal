import React from 'react'
import Sidebar from '../../SideBar/sidebar';
import { makeStyles, } from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Toolbar } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
// import CardMedia from '@mui/material/CardMedia';
import linkedin from '../../../Media/images/linkedinnn.png'
import Naukri from '../../../Media/images/naukricom.jpg'
import indeed from '../../../Media/images/indeedlogo.png'
// switch

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 46,
  height: 30,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 26,
    height: 26,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
                                                //  modal
    const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
      bgcolor: 'background.paper',
  borderRadius:'30px',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const useStyles = makeStyles((theme) => ({
  box:{
       paddingLeft:240,
       paddingRight:10
    },
    switch: {
       paddingLeft:150
  },
    formsize: {
        width: 500,
        height:30
    }
  
  

}))

const JobboardList = () => {
        const classes = useStyles();
  const [openLinkedin, setOpenLinkedin] = React.useState(false);
  const [OpenNaukri, setOpenNaukri] = React.useState(false);
  const [Openindeeed, setOpenindeeed] = React.useState(false);
 
 
 
  const handleOpen = () => {
    setOpenLinkedin(true);
  };
  const handleClose = () => {
    setOpenLinkedin(false);
  };
  // naukri
   const naukrieOpen = () => {
    setOpenNaukri(true);
  };
  const naukriClose = () => {
    setOpenNaukri(false);
  };
  // indeed
   const IndeedOpen = () => {
    setOpenindeeed(true);
  };
  const IndeedClose = () => {
    setOpenindeeed(false);
  };

    
    return (
        <>
        <Sidebar/>
            {/* <div className={classes.box}> */}
                <div align='center'>
                     <Box component={Paper} sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                            <Grid item xs={2}>
                            </Grid>
                            <Grid item xs={3}>
                            <Card align="center" sx={{ maxWidth: 300 }}>
                                <br />
                                <CardMedia
                                  component="img"
                                  height="54"                                  
                                  image={linkedin}
                                  alt="Paella dish"
                                />
                                      {/* linked in  */}
                                <div  className={classes.switch}>
                                    <Toolbar/>
                                    <FormGroup align='center'>
                                        <FormControlLabel
                                        component={Button}  
                                        onClick={handleOpen}
                                        control={<IOSSwitch sx={{ m: 1 }}  />}
                                        label=""
                                        />
                                    </FormGroup>
                                    <Toolbar/>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card align="center" sx={{ maxWidth: 300 }}>
                                <br />
                                <CardMedia
                                  component="img"
                                  height="54"                                  
                                  image={Naukri}
                                  alt="Paella dish"
                                />
                                  {/* naukri  */}
                                <div  className={classes.switch}>
                                    <Toolbar/>
                                    <FormGroup align='center'>
                                      <FormControlLabel
                                        component={Button}  
                                        onClick={naukrieOpen}
                                        control={<IOSSwitch sx={{ m: 1 }}  />}
                                        label=""
                                      />
                                    </FormGroup>
                                    <Toolbar/>
                                </div>
                            </Card>
                            </Grid>
                            <Grid item  xs={3}>
                             <Card align="center" sx={{ maxWidth: 300 }}>
                                <br />
                                <CardMedia
                                  component="img"
                                  height="54"                                  
                                  image={indeed}
                                  alt="Paella dish"
                                />
                          {/* indeed */}
                                <div  className={classes.switch}>
                                    <Toolbar/>
                                    <FormGroup align='center'>
                                        <FormControlLabel
                                          component={Button}
                                          onClick={IndeedOpen}
                                          control={<IOSSwitch sx={{ m: 1 }}  />}
                                          label=""
                                        />
                                    </FormGroup>
                                    <Toolbar/>
                                </div>
                                </Card>
                                </Grid>
                                <Grid xs={ 1}>
                                </Grid>
                           </Grid>
                       <Toolbar/>
          </Box>
                </div>
            
            {/* {modal Linked in } */}
            <Modal
        open={openLinkedin}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
          <Box sx={{ ...style, width: 700 }}>
            <Toolbar/>
            <Typography variant="h4" align='center' style={{ fontWeight: 600 }}> Linked IN</Typography>
            <div>
              <Toolbar/>
              <Stack direction="row" spacing={4}>
                <Typography variant="h6" style={{ flexGrow: 1 }} >   User ID </Typography>
                <TextField id="outlined-basic" svariant="outlined" size="small" className={classes.formsize} />
              </Stack>
              <Toolbar />
              <Stack direction="row" spacing={4}>
                <Typography variant="h6" style={{ flexGrow: 1 }}> Private key Token</Typography>
                <TextField id="outlined-basic" svariant="outlined" size="small" className={classes.formsize} />
              </Stack>
              <Toolbar />
              <div  align='center'>
                <Button variant="contained" color="primary" >Validate</Button>
              </div>
            </div>
        </Box>
      </Modal>
      {/* {naukri.com ModAL } */}
            <Modal
        open={OpenNaukri}
        onClose={naukriClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
          <Box sx={{ ...style, width: 700 }}>
            <Toolbar/>
            <Typography variant="h4" align='center' style={{ fontWeight: 600 }}>Naukri.Com</Typography>
            <div>
              <Toolbar/>
              <Stack direction="row" spacing={4}>
                <Typography variant="h6" style={{ flexGrow: 1 }} >   User ID </Typography>
                <TextField id="outlined-basic" svariant="outlined" size="small" className={classes.formsize} />
              </Stack>
              <Toolbar />
              <Stack direction="row" spacing={4}>
                <Typography variant="h6" style={{ flexGrow: 1 }}> Private key Token</Typography>
                <TextField id="outlined-basic" svariant="outlined" size="small" className={classes.formsize} />
              </Stack>
              <Toolbar />
              <div  align='center'>
                <Button variant="contained" color="primary" >Validate</Button>
              </div>
            </div>
        </Box>
        </Modal>
        {/* {Indeeed.com modal } */}
            <Modal
        open={Openindeeed}
        onClose={IndeedClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
          <Box sx={{ ...style, width: 700 }}>
            <Toolbar/>
            <Typography variant="h4" align='center' style={{ fontWeight: 600 }}>Indeed</Typography>
            <div>
              <Toolbar/>
              <Stack direction="row" spacing={4}>
                <Typography variant="h6" style={{ flexGrow: 1 }} >   User ID </Typography>
                <TextField id="outlined-basic" svariant="outlined" size="small" className={classes.formsize} />
              </Stack>
              <Toolbar />
              <Stack direction="row" spacing={4}>
                <Typography variant="h6" style={{ flexGrow: 1 }}> Private key Token</Typography>
                <TextField id="outlined-basic" svariant="outlined" size="small" className={classes.formsize} />
              </Stack>
              <Toolbar />
              <div  align='center'>
                <Button variant="contained" color="primary" >Validate</Button>
              </div>
            </div>
        </Box>
      </Modal>
        </>
    )
}

export default JobboardList
