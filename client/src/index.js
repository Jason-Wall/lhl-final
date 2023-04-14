import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
// import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* we wrap app in router so that all components are a child of router so they can use all the methods and benefits of router*/}
    {/* <Router> */}
    <App />
    {/* </Router> */}
  </React.StrictMode>
);
