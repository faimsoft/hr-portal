import React, { useState } from 'react'
import { Typography, AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import MoreIcon from '@material-ui/icons/MoreVert'

const DrawerWidth = 200
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: DrawerWidth
  },
  content: {
    padding: theme.spacing(3)
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    }
  },
  MobileDesktop: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    }
  },
  drawer: {
    width: 170

  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [mobileelment, setMobileelment] = useState(null)
  const [Open, setOpen] = useState(false)
  const isMobileMenuOpen = Boolean(mobileelment)
  const openMobileMenu = (event) => {
    setMobileelment(event.currentTarget)
  }
  const CloseMobileMenu = () => {
    setMobileelment(null)
  }
  // FOR MOBILE RESPONSIVE
  const MobileMenu = (
    <Menu anchorEl={mobileelment} id="mobile-menu" keepMounted open={isMobileMenuOpen}>
      <MenuItem component={Link} onClick={CloseMobileMenu} to="/CandiDR">Candidates</MenuItem>
      <MenuItem component={Link} onClick={CloseMobileMenu} to="/About" >Interviews</MenuItem>
      <MenuItem component={Link} onClick={CloseMobileMenu} to="/CarerSiteMain">Assessments</MenuItem>
      <MenuItem component={Link} onClick={CloseMobileMenu} to="/CareerSite" >Settings</MenuItem>
      <MenuItem component={Link} onClick={CloseMobileMenu} to="/Login" >Log in</MenuItem>
      {/* <MenuItem onClick={() => setOpen(true)}  >a</MenuItem> */}
    </Menu>
  )

  return (
    <>
      <div className={classes.root}>

        <AppBar color="primary" position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }} component={Link} to="/Dashboard"> Hr Portal</Typography>
            <div className={classes.sectionDesktop}>
              <Button color="inherit" component={Link} to='/Job'>Jobs</Button>
              <Button color="inherit" component={Link} to='/CandiDR'>Candidates</Button>
              <Button color="inherit" component={Link} to='/About'>Interviews</Button>
              <Button color="inherit" component={Link} to='/AssestmentsDrawer'>Assessments</Button>
              <Button color="inherit" component={Link} to='/CareerSite'>Settings</Button>
              <Button color="inherit" component={Link} to='/Login'>Log in</Button>
            </div>
            <div className={classes.MobileDesktop} >
              <IconButton color="inherit" onClick={openMobileMenu}  >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <Toolbar />
        </main>
        {MobileMenu}
      </div>
    </>
  )
}

export default Navbar
