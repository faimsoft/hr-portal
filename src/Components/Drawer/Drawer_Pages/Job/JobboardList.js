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
                                    height="40px"
                                    width="164px"
                                    image="data:image/jpeg;base64,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"
                                    alt=""
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
                                    height="40px"
                                    width="164px"
                                    image="data:image/jpeg;base64,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"
                                    alt=""
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
                                    height="40px"
                                    width="164px"
                                    image="data:image/jpeg;base64,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"
                                    alt=""
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
                                {/* <h1>xs=4</h1> */}
                            </Grid>
                         </Grid>
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
            <Typography variant="h4" align='center'> Linked IN</Typography>
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
            <Typography variant="h4" align='center'>Naukri.Com</Typography>
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
            <Typography variant="h4" align='center'>Indeed</Typography>
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
