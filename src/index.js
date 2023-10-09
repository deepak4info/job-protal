import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./scss/volt.scss";
import "./index.css";
import "react-datetime/css/react-datetime.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <HashRouter>
    <ToastContainer />
    <ScrollToTop />
    <HomePage />
  </HashRouter>,
  document.getElementById("root")
);
