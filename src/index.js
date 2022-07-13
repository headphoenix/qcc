import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { UserProvider } from './context/user.context';
import { CampusProvider } from "./context/campus.context"


ReactDOM.render(
  <React.StrictMode>
    <CampusProvider>
      <UserProvider>
          <App />
      </UserProvider>
      </CampusProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
