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
  const [HiringPeople, setHiringPeople] = useState(false)
  const [Userbtn, setUserbtn] = useState(false)
  const [Emailtemplates, setEmailtemplates] = useState(false)
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
          <MenuItem component={Link} onClick={CloseMobileMenu} to="/job">job</MenuItem>
          <MenuItem component={Link} onClick={CloseMobileMenu} to="/SignUp" >SignUp</MenuItem>
          <MenuItem component={Link} onClick={CloseMobileMenu} to="/Login" >Login</MenuItem>
          <MenuItem component={Link} onClick={CloseMobileMenu} to="/Career_Site" >setting</MenuItem>
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
                  <ListItem className={classes.nestedItem} component={Link} to='/Jobstatus' button>
                                    <ListItemText > Job Status</ListItemText>
                                </ListItem>
                              
                            </List>
                        </Collapse>
             
              {/*  */}
              <ListItem button  onClick={() => setUserbtn(!Userbtn)}>
                <ListItemText primary="Users" />
                {from ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
               {/* collapse */}
              <Collapse in={Userbtn}>
                            <List disablePadding>
                                <ListItem className={classes.nestedItem}  component={Link} to='./' button>
                                    <ListItemText >List</ListItemText>
                                </ListItem>
                                <ListItem className={classes.nestedItem}  component={Link} to='/' button>
                                    <ListItemText > Approvals</ListItemText>
                                </ListItem>
                  
                              
                            </List>
                        </Collapse>
              {/*  */}
              <ListItem button  onClick={() => setHiringPeople(!HiringPeople)}>
                <ListItemText primary="Hiring Pipe" />
                {HiringPeople ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
               {/* collapse */}
              <Collapse in={HiringPeople}>
                            <List disablePadding>
                                <ListItem className={classes.nestedItem}  component={Link} to='/Stages' button>
                                    <ListItemText >Stages</ListItemText>
                                </ListItem>
                                <ListItem className={classes.nestedItem}  component={Link} to='/Pipelines' button>
                                    <ListItemText > PipeLine</ListItemText>
                                </ListItem>
                            </List>
                        </Collapse>
              {/* <ListItem button>
                <ListItemText primary="Fifth Item" />
              </ListItem> */}
              <ListItem button  onClick={() => setEmailtemplates(!Emailtemplates)}>
                <ListItemText primary="Email Templates" />
                {from ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
               {/* collapse */}
              <Collapse in={Emailtemplates}>
                            <List disablePadding>
                                <ListItem className={classes.nestedItem}  component={Link} to='./Categories' button>
                                    <ListItemText >Categories</ListItemText>
                                </ListItem>
                                <ListItem className={classes.nestedItem}  component={Link} to='/Templates' button>
                                    <ListItemText > Templates</ListItemText>
                                </ListItem>
                  
                              
                            </List>
                        </Collapse>
             
            </List>
          </Drawer>
        </div>
            </>
        
    )
}

export default Sidebar
