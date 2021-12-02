import React, { useState } from 'react'
import { Typography ,AppBar,Toolbar,Button,IconButton,Menu,MenuItem, ListItemText,Drawer,List,ListItem} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import  MoreIcon from '@material-ui/icons/MoreVert'
import { getListItemSecondaryActionClassesUtilityClass } from '@mui/material';
 
const DrawerWidth=200

const useStyles = makeStyles((theme) => ({
  root:{
  paddingLeft:250
  },
  content:{
    padding:theme.spacing(3)
  }, 
  appBar:{
    zIndex: theme.zIndex.drawer +1, 
  },
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
  },
  drawer:{
    width:170

  },
  }));

const Sidebar = () => {
      const classes = useStyles();
      const [mobileelment, setMobileelment] = useState(null)
      const [Open, setOpen] = useState(false)
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
          <MenuItem component={Link} onClick={CloseMobileMenu} to="/setting" >setting</MenuItem>
          <MenuItem onClick= {()=> setOpen(true)}  >a</MenuItem>

        </Menu>
      )

    return (
            <>
             <div className={classes.root}>
          <Drawer open={Open} onClose={() => setOpen(false)} variant="permanent">
            <List disablepadding className={classes.drawer}>
              <Toolbar/>
              <ListItem button component={Link} to='./FirstElement'>
                <ListItemText primary="First Item" />
              </ListItem>
              <ListItem button component={Link} to='./SecondElement'>
                <ListItemText primary="Second Item" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Third Item" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Fourth Item" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Fifth Item" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Sixth Item" />
              </ListItem>
            </List>
          </Drawer>
        </div>
            </>
        
    )
}

export default Sidebar
