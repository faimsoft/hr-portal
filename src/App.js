import React from "react";
import "./styles/App.css";
// import { Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter ,  Route, Switch } from 'react-router-dom';
import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Login from "./Components/pages/Login";
import SignUp from "./Components/pages/SignUp";
import Jobs from './Components/pages/Jobs'
// drawer pages
import FirstElement from "./Components/Drawer/Drawer_Pages/FirstElement";
import SecondElement from "./Components/Drawer/Drawer_Pages/SecondElement";

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
      <Navbar/>
      <Switch>
        <Route exact path='/Home' component={Home}>
          <Home/>
        </Route>
        <Route exact path='/about' component={About}>
          <About/>
        </Route>
        <Route exact path='/Login' component={Login}>
          <Login/>
        </Route>
        <Route exact path='/SignUp' component={SignUp}>
          <SignUp/>
        </Route>
        <Route exact path='/Jobs' component={Jobs}>
          <Jobs/>
        </Route>
        <Route exact path='/FirstElement' component={FirstElement}>
          <FirstElement/>
        </Route>
        <Route exact path='/SecondElement' component={SecondElement}>
          <SecondElement/>
        </Route>
        
        
      </Switch>
      </container>
    </BrowserRouter>
  );
}

export default App;
