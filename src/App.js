import React from "react";
import "./styles/App.css";
// import { Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./Components/Layout/Navbar";
import About from "./Components/pages/About";
import Login from "./Components/pages/Login";
import SignUp from "./Components/pages/SignUp";
import Jobs from './Components/pages/Jobs'
// drawer pages
import Career_Site from "./Components/Drawer/Drawer_Pages/Career_Site/Career_Site";
import Deparments from "./Components/Drawer/Drawer_Pages/Institute_Setting/Deparments";
import CreatePage from './Components/Drawer/Drawer_Pages/Create-Field/CreatePage'
import Designations from './Components/Drawer/Drawer_Pages/Institute_Setting/Designations'
import Degree from "./Components/Drawer/Drawer_Pages/Institute_Setting/Degree"
// Candidates
import Candidates from "./Components/pages/Candidates";
// Formdata
import Formdata from "./Components/Candidates/Formdata/Formdata";
import CandiDR from "./Components/Candidates/Drawer2/CandiDR";
import CreatCandidate from "./Components/Candidates/Formdata/CreatCandidate"



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <container className={classes.root} disabledGutters>
        <Navbar />
        <Switch>
          <Route exact path='/Candidates' component={Candidates}>
            <Candidates />
          </Route>
          <Route exact path='/about' component={About}>
            <About />
          </Route>
          <Route exact path='/Login' component={Login}>
            <Login />
          </Route>
          <Route exact path='/SignUp' component={SignUp}>
            <SignUp />
          </Route>
          <Route exact path='/Jobs' component={Jobs}>
            <Jobs />
          </Route>
          <Route exact path='/Career_Site' component={Career_Site}>
            <Career_Site />
          </Route>
          <Route exact path='/Deparments' component={Deparments}>
            <Deparments />
          </Route>
          <Route exact path='/CreatePage' component={CreatePage}>
            <CreatePage />
            </Route>
          <Route exact path='/Formdata' component={Formdata}>
            <Formdata />
          </Route>
          <Route exact path='/CandiDR' component={CandiDR}>
            <CandiDR />
          </Route>
          <Route exact path='/CreatCandidate' component={CreatCandidate}>
            <CreatCandidate />
          </Route>
          <Route exact path='/Designations' component={Designations}>
            <Designations />
          </Route>
          <Route exact path='/Degree' component={Degree}>
            <Degree />
          </Route>
        </Switch>
      </container>
    </BrowserRouter>
  );
}

export default App;
