import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import EmployerRegistration from "./EmployerRegistration";
import PostJob from "./PostJob";
import Categories from "./Categories";
import SubCategories from "./SubCategories";
import AdminProfile from "./AdminProfile";
// import Profile from "./Profile";
import RequestCV from "./RequestCV";
import VacancyList from "./VacancyList";

import CandidateRegistration from "./CandidateRegistration";
import EmployerList from "./EmployerList";
import PageTrafficTable from "./components/Tables";

import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// documentation pages
import DocsOverview from "./documentation/DocsOverview";
import DocsDownload from "./documentation/DocsDownload";
import DocsQuickStart from "./documentation/DocsQuickStart";
import DocsLicense from "./documentation/DocsLicense";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/DocsBuild";
import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";
import UnderConstruction from "./UnderConstruction";
import OTPVerify from "./examples/OTPVerify";
import EmployerView from "./EmployerView";
import CandidateList from "./CandidateList";
import CandidateView from "./CandidateView";
import Login from "./employer/Login";
import VerifyOtp from "./employer/VerifyOtp";
import Sidebar2 from "../components/SidebarEmployer";
import NavbarEmployer from "../components/NavbarEmployer";
// import CandidateVerifyOTP from "./CandidateVerifyOTP";
import CandidateListEmployer from "./employer/CandidateList";
import DashboardEmployer from "./dashboard/DashboardEmployer";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {" "}
          <Preloader show={loaded ? false : true} /> <Component {...props} />{" "}
        </>
      )}
    />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem("settingsVisible") === "false" ? false : true;
  };

  const [showSettings, setShowSettings] = useState(
    localStorageIsSettingsVisible
  );

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem("settingsVisible", !showSettings);
  };

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Preloader show={loaded ? false : true} />
          <Sidebar />

          <main className="content">
            <Navbar />
            <Component {...props} />
            <Footer
              toggleSettings={toggleSettings}
              showSettings={showSettings}
            />
          </main>
        </>
      )}
    />
  );
};
const RouteWithSidebar2 = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible2 = () => {
    return localStorage.getItem("settingsVisible2") === "false" ? false : true;
  };

  const [showSettings2, setShowSettings2] = useState(
    localStorageIsSettingsVisible2
  );

  const toggleSettings2 = () => {
    setShowSettings2(!showSettings2);
    localStorage.setItem("settingsVisible2", !showSettings2);
  };

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Preloader show={loaded ? false : true} />
          <Sidebar2 />

          <main className="content">
            <NavbarEmployer />
            <Component {...props} />
            <Footer
              toggleSettings={toggleSettings2}
              showSettings={showSettings2}
            />
          </main>
        </>
      )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Presentation.path} component={Signin} />
    <RouteWithLoader exact path={Routes.otpVerify.path} component={OTPVerify} />
    <RouteWithLoader
      exact
      path={Routes.UnderConstruction.path}
      component={UnderConstruction}
    />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    {/* <RouteWithLoader exact path={Routes.Employer.path} component={EmployerRegistration} /> */}
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader
      exact
      path={Routes.ForgotPassword.path}
      component={ForgotPassword}
    />
    <RouteWithLoader
      exact
      path={Routes.ResetPassword.path}
      component={ResetPassword}
    />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader
      exact
      path={Routes.NotFound.path}
      component={NotFoundPage}
    />
    <RouteWithLoader exact path={Routes.EmployerLogin.path} component={Login} />
    <RouteWithLoader
      exact
      path={Routes.EmployerOTPverify.path}
      component={VerifyOtp}
    />
    <RouteWithLoader
      exact
      path={Routes.ServerError.path}
      component={ServerError}
    />

    {/* pages */}
    <RouteWithSidebar2
      exact
      path={Routes.DashboardEmployer.path}
      component={DashboardEmployer}
    />
    <RouteWithSidebar2
      exact
      path={Routes.EmployerCandidateList.path}
      component={CandidateListEmployer}
    />

    <RouteWithSidebar
      exact
      path={Routes.DashboardOverview.path}
      component={DashboardOverview}
    />
    <RouteWithSidebar exact path={Routes.Upgrade.path} component={Upgrade} />
    <RouteWithSidebar
      exact
      path={Routes.Transactions.path}
      component={Transactions}
    />
    <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
    <RouteWithSidebar
      exact
      path={Routes.Employer.path}
      component={EmployerRegistration}
    />
    <RouteWithSidebar
      exact
      path={Routes.EmployerView.path}
      component={EmployerView}
    />
    <RouteWithSidebar
      exact
      path={Routes.CandidateView.path}
      component={CandidateView}
    />
    <RouteWithSidebar
      exact
      path={Routes.Candidate.path}
      component={CandidateRegistration}
    />
    <RouteWithSidebar
      exact
      path={Routes.CandidateList.path}
      component={CandidateList}
    />
    {/* <RouteWithSidebar exact path={Routes.CandidateOTP.path} component={CandidateVerifyOTP} /> */}
    <RouteWithSidebar
      exact
      path={Routes.Employerlist2.path}
      component={EmployerList}
    />
    <RouteWithSidebar
      exact
      path={Routes.AdminProfile.path}
      component={AdminProfile}
    />
    <RouteWithSidebar
      exact
      path={Routes.RequestCV.path}
      component={RequestCV}
    />
    <RouteWithSidebar
      exact
      path={Routes.VacancyList.path}
      component={VacancyList}
    />
    {/* <RouteWithSidebar exact path={Routes.Profile.path} component={Profile} /> */}
    <RouteWithSidebar
      exact
      path={Routes.Categories.path}
      component={Categories}
    />
    <RouteWithSidebar
      exact
      path={Routes.SubCategories.path}
      component={SubCategories}
    />

    <RouteWithSidebar
      exact
      path="/tables/bootstrap-tables"
      component={BootstrapTables}
    />

    {/* components */}
    <RouteWithSidebar
      exact
      path={Routes.Accordions.path}
      component={Accordion}
    />
    <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
    <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
    <RouteWithSidebar
      exact
      path={Routes.Breadcrumbs.path}
      component={Breadcrumbs}
    />
    <RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />
    <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
    <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
    <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
    <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
    <RouteWithSidebar
      exact
      path={Routes.Pagination.path}
      component={Pagination}
    />
    <RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />
    <RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />
    <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
    <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
    <RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />
    <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />

    {/* documentation */}
    <RouteWithSidebar
      exact
      path={Routes.DocsOverview.path}
      component={DocsOverview}
    />
    <RouteWithSidebar
      exact
      path={Routes.DocsDownload.path}
      component={DocsDownload}
    />
    <RouteWithSidebar
      exact
      path={Routes.DocsQuickStart.path}
      component={DocsQuickStart}
    />
    <RouteWithSidebar
      exact
      path={Routes.DocsLicense.path}
      component={DocsLicense}
    />
    <RouteWithSidebar
      exact
      path={Routes.DocsFolderStructure.path}
      component={DocsFolderStructure}
    />
    <RouteWithSidebar
      exact
      path={Routes.DocsBuild.path}
      component={DocsBuild}
    />
    <RouteWithSidebar
      exact
      path={Routes.DocsChangelog.path}
      component={DocsChangelog}
    />

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
