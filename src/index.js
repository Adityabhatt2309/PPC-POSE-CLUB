import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./polyfill";

import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "./utils/getLibrary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>
);
