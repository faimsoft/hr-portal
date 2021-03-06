import React from "react";
import "./styles/App.css";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// NavbarPages
import Navbar from "./Components/Appbar/Navbar";
import About from "./Components/pages/About";
import Login from "./Components/pages/Login/Login";
import SignUp from "./Components/pages/SignUp/SignUp";
import Jobs from './Components/pages/Jobs'
// drawer pages
import CareerSite from "./Components/Drawer/Drawer_Pages/Career_Site/CareerSite";
import Deparments from "./Components/Drawer/Drawer_Pages/Institute_Setting/Deparments";
import CreatePage from './Components/Drawer/Drawer_Pages/Create-Field/CreatePage'
import Designations from './Components/Drawer/Drawer_Pages/Institute_Setting/Designations'
import Degree from "./Components/Drawer/Drawer_Pages/Institute_Setting/Degree"
import Jobstatus from "./Components/Drawer/Drawer_Pages/Institute_Setting/Jobstatus";
import Stages from "./Components/Drawer/Drawer_Pages/Hiring_Pipeline/Stages";
import Pipelines from "./Components/Drawer/Drawer_Pages/Hiring_Pipeline/Pipelines";
import Categories from "./Components/Drawer/Drawer_Pages/EmailTemplates/Categories";
import Templates from './Components/Drawer/Drawer_Pages/EmailTemplates/Templates'
import CreateEmailTemplate from './Components/Drawer/Drawer_Pages/EmailTemplates/CreateEmailTemplate';
import UserList from "./Components/Drawer/Drawer_Pages/User/UserList";
import EditUser from "./Components/Drawer/Drawer_Pages/User/EditUser";
import CreateUser from "./Components/Drawer/Drawer_Pages/User/CreateUser";
import CreateStage from "./Components/Drawer/Drawer_Pages/Hiring_Pipeline/CreateStage";
import WebformList from "./Components/Drawer/Drawer_Pages/Webforms/WebformList";
import CreateWebForm from "./Components/Drawer/Drawer_Pages/Webforms/CreateWebForm";
import Aproval from "./Components/Drawer/Drawer_Pages/User/Aproval";
import PipelineCreate from "./Components/Drawer/Drawer_Pages/Hiring_Pipeline/PipelineCreate";
import BillingList from './Components/Drawer/Drawer_Pages/Billing/BillingList'
import JobboardList from "./Components/Drawer/Drawer_Pages/Job/JobboardList";
// Candidates
// Candidates /Formdata 
import Candidates from "./Components/pages/Candidates";
import view from "./Components/Candidates/Formdata/view";
import Formdata from "./Components/Candidates/Formdata/Formdata";
import CandiDR from "./Components/Candidates/Drawer2/CandiDR";
import CreatCandidate from "./Components/Candidates/Formdata/CreatCandidate"
import CdList from "./Components/Candidates/Formdata/CdList";
import Cdsingleview from "./Components/Candidates/Formdata/Cdsingleview";
// import { Approval } from "@mui/icons-material";
import ControlledAccordions from "./Components/Candidates/Formdata/Controlled accordion";
import Email from "./Components/Candidates/sendemail/Email";
import Interview from "./Components/Candidates/Schedule an Interview/Interview";
// interview pages
import InterviewDrawer from "./Components/Interview/interviewdrawer/InterviewDrawer";
import InterviewList from "./Components/Interview/interviewdrawer/InterviewList";
import InterviewCreate from "./Components/Interview/interviewdrawer/InterviewCreate";
import Preview from "./Components/Interview/interviewdrawer/Preview";
// Assestments
import AssestmentsDrawer from "./Components/Assestments/Drawer/AssestmentsDrawer";
import AssestmentList from "./Components/Assestments/AssestmentList";
import AssestmentsCreat from "./Components/Assestments/AssestmentsCreat";
// jobs
import Job from "./Components/Jobs/job/Job";
import Joblist from "./Components/Jobs/Joblist";
import Jobcreat from "./Components/Jobs/Jobcreat";
import JobPreview from "./Components/Jobs/JobPreview";
import JobView from "./Components/Jobs/JobView";
import Joblist1 from "./Components/Jobs/Joblist1";
import Joblistdraw from "./Components/Jobs/Joblistdraw";
// Footer
import Footerforall from "./Components/Drawer/Drawer_Pages/Footer/Footerforall";
// dashboard
import Dashboard from './Components/Dashboard/Dashboard'
// candidate aaply
import CarerSiteMain from './Components/CareerSite/CarerSiteMain'
import SingleJobView from './Components/CareerSite/SingleJobView'
import CandidateApply from './Components/CareerSite/CandidateApply'
// Email varification
import Emailvarification from './Components/EmailVarification/Emailvarification'
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
        <Switch>
          <Route exact path='/Login' component={Login}>
            <Login />
          </Route>
          <Route exact path='/Emailvarification' component={Emailvarification}>
            < Emailvarification />
          </Route>
          <Route exact path='/SignUp' component={SignUp}>
            <SignUp />
          </Route>
          <Route exact path='/CarerSiteMain' component={CarerSiteMain}>
            < CarerSiteMain />
          </Route>
          <Route exact path='/SingleJobView' component={SingleJobView}>
            < SingleJobView />
          </Route>
          <Route exact path='/CandidateApply' component={CandidateApply}>
            < CandidateApply />
          </Route>
          <div>
            <Navbar />
            <Route exact path='/Candidates' component={Candidates}>
              <Candidates />
            </Route>
            <Route exact path='/about' component={About}>
              <About />
            </Route>
            <Route exact path='/Jobs' component={Jobs}>
              <Jobs />
            </Route>
            <Route exact path='/CareerSite' component={CareerSite}>
              <CareerSite />
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
            <Route exact path='/CdList' component={CdList}>
              <CdList />
            </Route>
            <Route exact path='/Cdsingleview' component={Cdsingleview}>
              <Cdsingleview />
            </Route>
            <Route exact path='/Designations' component={Designations}>
              <Designations />
            </Route>
            <Route exact path='/Degree' component={Degree}>
              <Degree />
            </Route>
            <Route exact path='/view' component={view}>
              <view />
            </Route>
            <Route exact path='/Jobstatus' component={Jobstatus}>
              <Jobstatus />
            </Route>
            <Route exact path='/Stages' component={Stages}>
              <Stages />
            </Route>
            <Route exact path='/Pipelines' component={Pipelines}>
              <Pipelines />
            </Route>
            <Route exact path='/Categories' component={Categories}>
              <Categories />
            </Route>
            <Route exact path='/Templates' component={Templates}>
              <Templates />
            </Route>
            <Route exact path='/CreateEmailTemplate' component={CreateEmailTemplate}>
              <CreateEmailTemplate />
            </Route>
            <Route exact path='/UserList' component={UserList}>
              <UserList />
            </Route>
            <Route exact path='/EditUser' component={EditUser}>
              <EditUser />
            </Route>
            <Route exact path='/CreateUser' component={CreateUser}>
              <CreateUser />
            </Route>
            <Route exact path='/CreateStage' component={CreateStage}>
              <CreateStage />
            </Route>
            <Route exact path='/WebformList' component={WebformList}>
              <WebformList />
            </Route>
            <Route exact path='/CreateWebForm' component={CreateWebForm}>
              <CreateWebForm />
            </Route>
            <Route exact path='/Aproval' component={Aproval}>
              <Aproval />
            </Route>
            <Route exact path='/PipelineCreate' component={PipelineCreate}>
              <PipelineCreate />
            </Route>
            <Route exact path='/BillingList' component={BillingList}>
              <BillingList />
            </Route>
            <Route exact path='/JobboardList' component={JobboardList}>
              <JobboardList />
            </Route>
            <Route exact path='/ControlledAccordions' component={ControlledAccordions}>
              <ControlledAccordions />
            </Route>
            <Route exact path='/Email' component={Email}>
              < Email />
            </Route>
            <Route exact path='/Interview' component={Interview}>
              < Interview />
            </Route>
            <Route exact path='/Footerforall' component={Footerforall}>
              < Footerforall />
            </Route>
            {/* interview */}
            <Route exact path='/InterviewDrawer' component={InterviewDrawer}>
              < InterviewDrawer />
            </Route>
            <Route exact path='/InterviewList' component={InterviewList}>
              < InterviewList />
            </Route>
            <Route exact path='/InterviewCreate' component={InterviewCreate}>
              < InterviewCreate />
            </Route>
            <Route exact path='/Preview' component={Preview}>
              < Preview />
            </Route>
            {/* Assestments */}
            <Route exact path='/AssestmentsDrawer' component={AssestmentsDrawer}>
              < AssestmentsDrawer />
            </Route>
            <Route exact path='/AssestmentList' component={AssestmentList}>
              < AssestmentList />
            </Route>
            <Route exact path='/AssestmentsCreat' component={AssestmentsCreat}>
              < AssestmentsCreat />
            </Route>
            {/* jobs */}
            <Route exact path='/Job' component={Job}>
              < Job />
            </Route>
            <Route exact path='/Joblist' component={Joblist}>
              < Joblist />
            </Route>
            <Route exact path='/Jobcreat' component={Jobcreat}>
              < Jobcreat />
            </Route>
            <Route exact path='/JobPreview' component={JobPreview}>
              < JobPreview />
            </Route>
            <Route exact path='/JobView' component={JobView}>
              < JobView />
            </Route>
            <Route exact path='/Joblist1' component={Joblist1}>
              < Joblist1 />
            </Route>
            <Route exact path='/Joblistdraw' component={Joblistdraw}>
              < Joblistdraw />
            </Route>
            {/* Dashboard */}
            <Route exact path='/' component={Dashboard}>
              < Dashboard />
            </Route>
          </div>
        </Switch>
      </container>
    </BrowserRouter>
  );
}

export default App;
