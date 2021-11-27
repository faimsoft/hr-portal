  import React, { useState } from 'react'
import { Typography ,AppBar,Toolbar,Button,IconButton,Menu,MenuItem} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import  MoreIcon from '@material-ui/icons/MoreVert'
 
const useStyles = makeStyles((theme) => ({
  sectionDesktop:{
    display:"none",
    [theme.breakpoints.up("md")]:{
      display:"flex",  
    }
  },
  MobileDesktop:{
    display:"none",
    [theme.breakpoints.down("md")]:{
      display:"flex",  
    }
  }
  }));

  const Navbar = () => {
      const classes = useStyles();
      const [mobileelment, setMobileelment] = useState(null)
      const isMobileMenuOpen =Boolean(mobileelment)
      const openMobileMenu =(event) => {
          setMobileelment(event.currentTarget)
      }
      const CloseMobileMenu =() => {
        setMobileelment(null)
      }
                              // FOR MOBILE RESPONSIVE
      const MobileMenu=(
        <Menu anchorEl={mobileelment} id="mobile-menu" keepMounted open={isMobileMenuOpen}>
          <MenuItem component={Link} onClick={CloseMobileMenu} to="/Home">Home</MenuItem>
          <MenuItem component={Link} onClick={CloseMobileMenu} to="/About" >About</MenuItem>
          <MenuItem component={Link} onClick={CloseMobileMenu} to="/Login">Login</MenuItem>
          <MenuItem component={Link} onClick={CloseMobileMenu} to="/SignUp" >SignUp</MenuItem>
          <MenuItem component={Link} onClick={CloseMobileMenu} to="/Jobs" >Jobs</MenuItem>
        </Menu>
      )

      return (
          <>
            <AppBar color="secondary" position="statics">
       <Toolbar>
       <Typography variant="h6" style={{flexGrow:1}}> Hr Portal</Typography>
       <div className={classes.sectionDesktop}>
        <Button color="inherit" component={Link} to='/Home'>Home</Button>
       <Button color="inherit" component={Link} to='/About'>About</Button>
       <Button color="inherit" component={Link} to='/Login'>Login</Button>
       <Button color="inherit" component={Link} to='SignUp'>Sign Up</Button>
       <Button color="inherit" component={Link} to='/Jobs'>Jobs</Button>
       </div>
       <div className={classes.MobileDesktop} >
         <IconButton color="inherit" onClick={openMobileMenu}  >
         <MoreIcon  />
       </IconButton>
       </div>
       </Toolbar>
     </AppBar>
     {MobileMenu}
          </>
      )
  }
  
  export default Navbar
  