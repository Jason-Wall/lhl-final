import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App";
import LoginProvider from "./providers/UserContext";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import StateProvider from "./providers/StateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </StateProvider>
  </React.StrictMode>
);
