import React, { useState } from 'react'
import { Typography ,AppBar,Toolbar,Button,IconButton,Menu,MenuItem, ListItemText,Drawer,List,ListItem,Collapse} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import  MoreIcon from '@material-ui/icons/MoreVert'
import { getListItemSecondaryActionClassesUtilityClass } from '@mui/material';
 import { ExpandLess, ExpandMore } from '@mui/icons-material';

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
  nestedItem: {
        paddingLeft: theme.spacing(8),
    },
  }));

const Sidebar = () => {
      const classes = useStyles();
      const [mobileelment, setMobileelment] = useState(null)
      const [Open, setOpen] = useState(false)
      const [from, setFrom] = useState(false)

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
              <ListItem button component={Link} to='./Career_Site'>
                <ListItemText primary="Career Site" />
              </ListItem>
              <ListItem button  onClick={() => setFrom(!from)}>
                <ListItemText primary="Institute Setting" />
                {from ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
               {/* collapse */}
              <Collapse in={from}>
                            <List disablePadding>
                                <ListItem className={classes.nestedItem}  component={Link} to='./Deparments' button>
                                    <ListItemText >Departments</ListItemText>
                                </ListItem>
                                <ListItem className={classes.nestedItem}  component={Link} to='/Designations' button>
                                    <ListItemText > Designation</ListItemText>
                                </ListItem>
                                <ListItem className={classes.nestedItem} component={Link} to='/Degree' button>
                                    <ListItemText > Degree</ListItemText>
                                </ListItem>
                              
                            </List>
                        </Collapse>
              <ListItem button>
                <ListItemText primary="Third Item" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Fourth Item" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Fifth Item" />
              </ListItem>
              <ListItem button >
                <ListItemText primary="sixth item"  />
                 
              </ListItem>
             
            </List>
          </Drawer>
        </div>
            </>
        
    )
}

export default Sidebar
