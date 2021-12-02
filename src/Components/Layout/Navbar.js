import React, { useState } from 'react'
import { Typography, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemText, Drawer, List, ListItem } from "@material-ui/core";
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
      <MenuItem component={Link} onClick={CloseMobileMenu} to="/Candidates">Candidates</MenuItem>
      <MenuItem component={Link} onClick={CloseMobileMenu} to="/About" >Interviews</MenuItem>
      <MenuItem component={Link} onClick={CloseMobileMenu} to="/Login">Assessments</MenuItem>
      <MenuItem component={Link} onClick={CloseMobileMenu} to="/Jobs" >Settings</MenuItem>
      <MenuItem component={Link} onClick={CloseMobileMenu} to="/SignUp" >Jobs</MenuItem>
      <MenuItem onClick={() => setOpen(true)}  >a</MenuItem>

    </Menu>
  )

  return (
    <>
      <div className={classes.root}>
        {/* <Drawer open={Open} onClose={() => setOpen(false)} variant="permanent">
            <List disablePadding className={classes.drawer}>
              <Toolbar/>
              <ListItem button>
                <ListItemText primary="First Item" />
              </ListItem>
              <ListItem button>
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
          </Drawer> */}
        <AppBar color="secondary" position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}> Hr Portal</Typography>
            <div className={classes.sectionDesktop}>
              <Button color="inherit" component={Link} to='/Candidates'>Candidates</Button>
              <Button color="inherit" component={Link} to='/About'>Interviews</Button>
              <Button color="inherit" component={Link} to='/Login'>Assessments</Button>
              <Button color="inherit" component={Link} to='/Jobs'>Settings</Button>
              <Button color="inherit" component={Link} to='SignUp'>Jobs</Button>
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
          {/* <Typography variant="h2">A. P. J. Abdul Kalam</Typography>
       <Typography>
         
From Wikipedia, the free encyclopedia
Jump to navigationJump to search
A. P. J. Abdul Kalam
A. P. J. Abdul Kalam.jpg
Kalam in 2002
11th President of India
In office
25 July 2002 – 25 July 2007
Prime Minister	Atal Bihari Vajpayee
Manmohan Singh
Vice President	Krishan Kant
Bhairon Singh Shekhawat
Preceded by	K. R. Narayanan
Succeeded by	Pratibha Patil
1st Principal Scientific Adviser to the Government of India
In office
1999–2002
President	K. R. Narayanan
Prime Minister	Atal Bihari Vajpayee
Preceded by	Position established
Succeeded by	Rajagopala Chidambaram
Personal details
Born	Avul Pakir Jainulabdeen Abdul Kalam
15 October 1931
Rameswaram, Madras Presidency, British India
(present-day Tamil Nadu, India)
Died	27 July 2015 (aged 83)
Shillong, Meghalaya, India
Resting place	Dr. A. P. J. Abdul Kalam Desiya Ninaivagam, Pei Karumbu, Rameswaram, Tamil Nadu, India
Nationality	Indian
Other political
affiliations	NDA [fn 1]
Alma mater	
St. Joseph's College, Tiruchirappalli (BEng)
Madras Institute of Technology (MEng)
Profession	
Aerospace ScientistAuthor
Awards	Full list
Notable work(s)	
Wings of Fire
India 2020
Ignited Minds
Indomitable Spirit
Transcendence: My Spiritual Experiences with Pramukh Swamiji
Signature	
Website	Official Website
Scientific career
Fields	Aerospace Engineering
Institutions	Defence Research and Development Organisation
Indian Space Research Organisation
Avul Pakir Jainulabdeen Abdul Kalam (/ˈəbdəl kəˈlɑːm/ (About this soundlisten); 15 October 1931 – 27 July 2015) was an Indian aerospace scientist who served as the 11th president of India from 2002 to 2007. He was born and raised in Rameswaram, Tamil Nadu and studied physics and aerospace engineering. He spent the next four decades as a scientist and science administrator, mainly at the Defence Research and Development Organisation (DRDO) and Indian Space Research Organisation (ISRO) and was intimately involved in India's civilian space programme and military missile development efforts.[1] He thus came to be known as the Missile Man of India for his work on the development of ballistic missile and launch vehicle technology.[2][3][4] He also played a pivotal organisational, technical, and political role in India's Pokhran-II nuclear tests in 1998, the first since the original nuclear test by India in 1974.[5]

Kalam was elected as the 11th president of India in 2002 with the support of both the ruling Bharatiya Janata Party and the then-opposition Indian National Congress. Widely referred to as the "People's President",[6] he returned to his civilian life of education, writing and public service after a single term. He was a recipient of several prestigious awards, including the Bharat Ratna, India's highest civilian honour.

While delivering a lecture at the Indian Institute of Management Shillong, Kalam collapsed and died from an apparent cardiac arrest on 27 July 2015, aged 83.[7] Thousands, including national-level dignitaries, attended the funeral ceremony held in his hometown of Rameswaram, where he was buried with full state honours.[8]
       </Typography> */}
        </main>
        {MobileMenu}
      </div>
    </>
  )
}

export default Navbar
