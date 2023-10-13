import ReactDOM from "react-dom/client";
import React from "react";

import "./index.css";
import App from "./App";



import { BrowserRouter as Main } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Main>
    
      <App />
   
  </Main>
);
